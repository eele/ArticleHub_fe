<template>
<el-main>
  <div class="title">
    {{ article.title }}
  </div>
  <div class="authorInfo">
    <el-row>
      <el-col :span="3">
        <img :src="article.portraitURL" width="50px" height="50px" style="border-radius: 25px;">
      </el-col>
      <el-col :span="21" style="text-align: left">
        <div style="height: 5px;"></div>
        <span class="UserName"><b>{{ article.author }}</b></span><br>
        <span>{{ article.datetime }}</span> &nbsp;&nbsp;&nbsp;
        <span>阅读：{{ article.reading }}</span> &nbsp;&nbsp;&nbsp;
        <span>评论：{{ article.commentNum }}</span> &nbsp;&nbsp;&nbsp;
        <span>收藏：{{ article.collection }}</span>
      </el-col>
    </el-row>
  </div>
  <div class="_content" v-html="article._content">
  </div>
  <div class="favorite">
    <el-button type="primary" round @click="collect">{{collectText}}</el-button>
  </div>
  <div class="comments">
    <div class="commentTitle">评论</div><br>
    <el-input type="textarea" :rows="5" placeholder="你的评论 ..." v-model="commentText">
    </el-input>
    <div align="right">
      <br>
      <el-button type="primary" @click="postComment">提交</el-button>
    </div>
    <commentList mode="reading" />
  </div>
</el-main>
</template>

<script>
import commentList from './../common/comments/commentList.vue'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import qs from 'qs'
import {
  mapGetters
} from 'vuex';
export default {
  components: {
    commentList
  },
  data() {
    return {
      collectText: '收藏本文',
      commentText: '',
      article: {}
    }
  },
  mounted: function() {
    var self = this;
    this.$axios.get('/ArticleHub/articleDetail/aid/' + this.getQueryString("aid") + '?_content=')
      .then(function(response) {
        self.article = response.data.data[0];
      })
      .catch(function(error) {
        console.log(error);
      });

      this.$axios.get('/ArticleHub/collect/uid/' + this.getSessionUid() + '?' + qs.stringify({
          aid: this.getQueryString("aid")
        }))
        .then(function(response) {
          if (response.data.data[0] == undefined) {
            self.collectText = '收藏本文';
          } else {
            self.collectText = '取消收藏';
          }
        })
        .catch(function(error) {
          console.log(error);
        });
  },
  methods: {
    ...mapGetters(['getSessionUid']),
    getQueryString: function(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    },
    collect: function() {
      var self = this;
      if (this.collectText == '收藏本文') {
        this.$axios.post('/ArticleHub/collect', {
          uid: this.getSessionUid(),
          aid: this.getQueryString("aid"),
          _randomID: 'cid'
        })
          .then(function(response) {
            self.collectText = '取消收藏';
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        this.$axios.delete('/ArticleHub/collect/uid/' + this.getSessionUid() + '?' + qs.stringify({
            aid: this.getQueryString("aid")
          }))
          .then(function(response) {
            self.collectText = '收藏本文';
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    postComment: function() {

    }
  }
}
</script>

<style>
.el-main {
  width: 700px;
  text-align: center;
  margin: auto;
}

.title {
  margin-top: 30px;
  font-size: 28px;
  font-weight: 900;
  padding-bottom: 30px;
}

._content {
  padding-top: 40px;
}

.commentTitle,
._content {
  text-align: left;
}

.favorite {
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>

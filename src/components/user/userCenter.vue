<template>
<el-main class="m-main">
  <el-row class="m-row">
    <el-col :span="16" style="width: 620px">
      <topArea :info="info"/>
      <el-tabs v-model="userActiveTab">
        <el-tab-pane label="个人文章" name="articles">
          <articleList label="个人文章" style="margin-top: -50px" />
        </el-tab-pane>
        <el-tab-pane label="最新评论" name="comments">
          <commentList style="margin-top: -50px" />
        </el-tab-pane>
        <el-tab-pane label="收藏文章" name="favorites">
          <articleList label="." style="margin-top: -50px" />
        </el-tab-pane>
        <el-tab-pane label="个人信息" name="info" v-if="getSessionUid()==getQueryString('uid')">
          <userInfo/>
        </el-tab-pane>
      </el-tabs>
    </el-col>
    <el-col :span="8" style="margin-left: 20px">
      <el-card style="text-align:left" v-if="info.desc!=''">
        <span>个人简介</span><br><br>
        <span>{{ info.desc }}</span>
      </el-card>
      <topicList label="我订阅的专题" v-if="getSessionUid()==getQueryString('uid')" /><br>
      <authorList label="我关注的作者" v-if="getSessionUid()==getQueryString('uid')" />
      <br>
    </el-col>
  </el-row>
</el-main>
</template>

<script>
import topArea from './topArea.vue'
import topicList from './../common/topics/topicList.vue'
import store from './../../store/store.js'
import articleList from './../common/articles/articleList.vue'
import userInfo from './userInfo.vue'
import commentList from './../common/comments/commentList.vue'
import authorList from './../common/authors/authorList.vue'
import qs from 'qs'
import {
  mapGetters
} from 'vuex';
export default {
  components: {
    topicList,
    topArea,
    articleList,
    userInfo,
    commentList,
    authorList
  },
  data() {
    return {
      info: {}
    }
  },
  store,
  computed: {
    userActiveTab: {
      set: function(userActiveTab) {
        userActiveTab = this.$store.state.userActiveTab;
      },
      get: function() {
        return this.$store.state.userActiveTab;
      }
    }
  },
  methods: {
    ...mapGetters(['getSessionUid']),
    getQueryString: function(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    }
  },
  mounted: function() {
    var self = this;
    this.$axios.get("/ArticleHub/author/uid/" + this.getQueryString('uid'))
      .then(function(response) {
        self.info = response.data.data[0];
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}
</script>

<style>
.m-main {
  width: 960px;
  text-align: center;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
}
</style>

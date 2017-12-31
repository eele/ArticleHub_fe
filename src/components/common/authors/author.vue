<template>
<el-row>
  <el-col :span="5">
    <div class="portrait">
      <img :src="authorInfo.portraitURL" width="48px" height="48px" style="border-radius: 24px;">
    </div>
  </el-col>
  <el-col :span="15">
    <div class="info">
      <span style="font-size: 14px;font-family: Microsoft YaHei;">{{ authorInfo.name }}</span>
      <br>
      <span style="font-size: 14px;color: #9c9999">&nbsp;{{ authorInfo.followNum }} 人关注</span>
    </div>
  </el-col>
  <el-col :span="4">
    <div class="follow">
      <el-button type="text" v-show="!isfollow" @click="follow">
        <b>+ 关注</b>
      </el-button>
      <el-button type="text" v-show="isfollow" @click="unfollow">
        <i class="el-icon-remove-outline"></i>
      </el-button>
    </div>
  </el-col>
</el-row>
</template>

<script>
import qs from 'qs'
import {
  mapGetters
} from 'vuex';
export default {
  props: ['authorInfo', 'label'],
  data() {
    return {
      isfollow: true,
      fid: ''
    }
  },
  methods: {
    ...mapGetters(['getSessionUid']),
    guid: function() {
      function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      }
      return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    },
    follow: function() {
      var self = this;
      this.$axios.post('/ArticleHub/follow' + '?' + qs.stringify({
          fid: this.guid(),
          uid: this.getSessionUid(),
          authorid: this.authorInfo.uid,
        }))
        .then(function(response) {
          self.checkfollow();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    unfollow: function() {
      var self = this;
      this.$axios.delete('/ArticleHub/follow/fid/' + this.fid)
        .then(function(response) {
          self.checkfollow();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    checkfollow: function() {
      var self = this;
      this.$axios.get('/ArticleHub/follow/uid/' + this.getSessionUid() + '?' + qs.stringify({
          authorid: self.authorInfo.uid
        }))
        .then(function(response) {
          if (response.data.data[0] == undefined) {
            self.isfollow = false;
          } else {
            self.isfollow = true;
            self.fid = response.data.data[0].fid;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted: function() {
    this.checkfollow();
  }
}
</script>

<style>
.el-row {
  margin-top: 0px;
  margin-bottom: 0px;
}

.portrait {
  width: 48px;
  height: 48px;
}

.info {
  text-align: left;
}
</style>

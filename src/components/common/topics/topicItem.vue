<template>
<el-row>
  <el-col :span="5">
    <div class="portrait">
      <img :src="topicInfo.portraitURL" width="48px" height="48px" style="border-radius: 24px;">
    </div>
  </el-col>
  <el-col :span="15">
    <div class="info">
      <span style="font-size: 14px;font-family: Microsoft YaHei;">{{ topicInfo.name }}</span>
      <br>
      <span style="font-size: 14px;color: #9c9999">&nbsp;{{ topicInfo.subscribeNum }} 人订阅</span>
    </div>
  </el-col>
  <el-col :span="4" style="margin-top: 5px;">
    <div class="subscribe">
      <el-button type="text" v-show="!isSubscribed" @click="subscribe">
        <b>+ 订阅</b>
      </el-button>
      <el-button type="text" v-show="isSubscribed" @click="unsubscribe">
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
  props: ['topicInfo'],
  data() {
    return {
      isSubscribed: true,
      tid: ''
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
    subscribe: function() {
      var self = this;
      this.$axios.post('/ArticleHub/subscribe' + '?' + qs.stringify({
          sid: this.guid(),
          uid: this.getSessionUid(),
          tid: this.topicInfo.tid,
        }))
        .then(function(response) {
          self.checkSubscribe();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    unsubscribe: function() {
      var self = this;
      this.$axios.delete('/ArticleHub/subscribe/tid/' + this.tid)
        .then(function(response) {
          self.checkSubscribe();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    checkSubscribe: function() {
      var self = this;
      this.$axios.get('/ArticleHub/subscribe/uid/' + this.getSessionUid() + '?' + qs.stringify({
          tid: self.topicInfo.tid
        }))
        .then(function(response) {
          if (response.data.data[0] == undefined) {
            self.isSubscribed = false;
          } else {
            self.isSubscribed = true;
            self.tid = response.data.data[0].tid;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted: function() {
    this.checkSubscribe();
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

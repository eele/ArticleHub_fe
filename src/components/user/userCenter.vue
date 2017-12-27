<template>
<div>
  <el-container>
    <el-header style="padding: 0px">
      <topbar/>
    </el-header>
    <el-main class="m-main">
      <el-row class="m-row">
        <el-col :span="16" style="width: 620px">
          <topArea/>
          <el-tabs v-model="userActiveTab">
            <el-tab-pane label="个人文章" name="articles">
                <articleList label="" style="margin-top: -50px"/>
            </el-tab-pane>
            <el-tab-pane label="最新评论" name="comments">
                <commentList style="margin-top: -50px"/>
            </el-tab-pane>
            <el-tab-pane label="收藏文章" name="favorites">
                <articleList label="." style="margin-top: -50px"/>
            </el-tab-pane>
            <el-tab-pane label="个人信息" name="info">
                <userInfo/>
            </el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="8" style="margin-left: 20px">
          <topicList/>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</div>
</template>

<script>
import topbar from './../common/topbar.vue'
import topArea from './topArea.vue'
import topicList from './topics/topicList.vue'
import store from './../../store/store.js'
import articleList from './../home/list/articleList.vue'
import userInfo from './userInfo.vue'
import commentList from './../common/comments/commentList.vue'
import {
  mapState
} from 'vuex';
export default {
  components: {
    topbar,
    topicList,
    topArea,
    articleList,
    userInfo,
    commentList
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
  }
}
</script>

<style>
body {
  padding: 0px;
  margin: 0px;
}

.m-main {
  width: 960px;
  text-align: center;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
}
</style>

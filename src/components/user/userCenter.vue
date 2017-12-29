<template>
<el-main class="m-main">
  <el-row class="m-row">
    <el-col :span="16" style="width: 620px">
      <topArea/>
      <el-tabs v-model="userActiveTab">
        <el-tab-pane label="个人文章" name="articles">
          <articleList label="" style="margin-top: -50px" />
        </el-tab-pane>
        <el-tab-pane label="最新评论" name="comments">
          <commentList style="margin-top: -50px" />
        </el-tab-pane>
        <el-tab-pane label="收藏文章" name="favorites">
          <articleList label="." style="margin-top: -50px" />
        </el-tab-pane>
        <el-tab-pane label="个人信息" name="info">
          <userInfo/>
        </el-tab-pane>
      </el-tabs>
    </el-col>
    <el-col :span="8" style="margin-left: 20px">
      <el-card style="text-align:left" v-if="desc!=''">
        <span>个人简介</span><br><br>
        <span>{{ desc }}</span>
      </el-card>
      <topicList label="我订阅的专题" /><br>
      <authorList label="我关注的作者" />
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
import {
  mapState
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
      desc: '个人简介个人简介个人简介个人简介个人简介个人简介'
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

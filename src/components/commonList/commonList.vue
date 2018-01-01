<template>
<el-main class="m-main">
  <div style="text-align:left" v-if="path=='/search'">
    <b>搜索结果</b>
  </div>
  <br>
  <div class="list">
    <el-tabs v-model="tab" v-if="path=='/topics'" @tab-click="handleClick1">
      <el-tab-pane label="推荐专题" name="1">
        <topicList label="推荐专题" style="width: 100%;margin-top: -50px" />
      </el-tab-pane>
      <el-tab-pane label="我订阅的" name="2" v-if="getSessionUid() != null">
        <topicList label="我订阅的" style="width: 100%;margin-top: -50px" />
      </el-tab-pane>
    </el-tabs>
    <el-tabs v-model="tab" v-if="path=='/authors'" @tab-click="handleClick2">
      <el-tab-pane label="推荐作者" name="1">
        <authorList label="推荐作者" style="width: 100%;margin-top: -50px" />
      </el-tab-pane>
      <el-tab-pane label="我关注的" name="2" v-if="getSessionUid() != null">
        <authorList label="我关注的" style="width: 100%;margin-top: -50px" />
      </el-tab-pane>
    </el-tabs>
    <el-tabs v-model="tab" v-if="path=='/search'" @tab-click="handleClick3">
      <el-tab-pane label="文章" name="1">
        <articleList label="search" style="width: 100%;margin-top: -50px" />
      </el-tab-pane>
      <el-tab-pane label="作者" name="2">
        <authorList label="search" style="width: 100%;margin-top: -50px" />
      </el-tab-pane>
      <el-tab-pane label="专题" name="3">
        <topicList label="search" style="width: 100%;margin-top: -50px" />
      </el-tab-pane>
    </el-tabs>
  </div>
</el-main>
</template>

<script>
import articleList from './../common/articles/articleList.vue'
import authorList from './../common/authors/authorList.vue'
import topicList from './../common/topics/topicList.vue'
import {
  mapGetters
} from 'vuex';
export default {
  components: {
    articleList,
    authorList,
    topicList
  },
  data() {
    return {
      tab: this.getQueryString("tab"),
      path: '',
      desc: '专题公告专题公告专题公告专题公告专题公告专题公告'
    }
  },
  created: function() {
    this.path = location.pathname;
  },
  methods: {
    ...mapGetters(['getSessionUid']),
    getQueryString: function(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    },
    handleClick1: function(tab, event) {
      location.href = '/topics?tab=' + tab.name + '&pb=1&ps=10';
    },
    handleClick2: function(tab, event) {
      location.href = '/authors?tab=' + tab.name + '&pb=1&ps=10';
    },
    handleClick3: function(tab, event) {
      location.href = '/search?tab=' + tab.name + '&pb=1&ps=10';
    }
  }
}
</script>

<style>
.m-main {
  width: 680px;
  text-align: center;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
}
</style>

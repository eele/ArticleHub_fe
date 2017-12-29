<template>
<el-main class="m-main">
  <div style="text-align:left" v-if="path=='/search'">
    <b>搜索结果</b>
  </div>
  <br>
  <div class="list">
    <el-tabs value="1" v-if="path=='/topics'">
      <el-tab-pane label="推荐专题" name="1">
        <topicList label="推荐专题" style="width: 100%;margin-top: -50px" />
      </el-tab-pane>
      <el-tab-pane label="我订阅的" name="2">
        <topicList label="我订阅的" style="width: 100%;margin-top: -50px" />
      </el-tab-pane>
    </el-tabs>
    <el-tabs value="1" v-if="path=='/authors'">
      <el-tab-pane label="推荐作者" name="1">
        <authorList label="推荐作者" style="width: 100%;margin-top: -50px" />
      </el-tab-pane>
      <el-tab-pane label="我关注的" name="2">
        <authorList label="我关注的" style="width: 100%;margin-top: -50px" />
      </el-tab-pane>
    </el-tabs>
    <el-tabs value="1" v-if="path=='/search'">
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
export default {
  components: {
    articleList,
    authorList,
    topicList
  },
  data() {
    return {
      path: '',
      desc: '专题公告专题公告专题公告专题公告专题公告专题公告'
    }
  },
  created: function() {
    this.path = location.pathname;
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

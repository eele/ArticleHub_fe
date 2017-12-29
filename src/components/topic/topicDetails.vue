<template>
<el-main class="m-main">
  <el-row class="m-row">
    <el-col :span="16" style="width: 620px">
      <topArea/>
      <articleList label="热门文章"/>
    </el-col>
    <el-col :span="8" style="margin-left: 20px">
      <el-card style="text-align:left;min-height:200px">
        <span>专题公告</span><br><br>
        <span v-if="desc==''">暂无公告</span>
        <span>{{ desc }}</span>
      </el-card>
      <br>
    </el-col>
  </el-row>
</el-main>
</template>

<script>
import topArea from './topArea.vue'
import articleList from './../common/articles/articleList.vue'
import {
  mapState
} from 'vuex';
export default {
  components: {
    topArea,
    articleList
  },
  data() {
    return {
      desc: '专题公告专题公告专题公告专题公告专题公告专题公告'
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

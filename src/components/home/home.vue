<template>
<el-main>
  <el-row>
    <el-col :span="8">
      <authors label="推荐作者" style="width: 280px" />
    </el-col>
    <el-col :span="16">
      <articles label="热门文章" />
    </el-col>
  </el-row>
</el-main>
</template>

<script>
import authors from './../common/authors/authorList.vue'
import articles from './../common/articles/articleList.vue'
export default {
  components: {
    authors,
    articles
  }
}
</script>

<style>
.el-main {
  width: 960px;
  text-align: center;
  margin: auto;
}

.el-row {
  margin-top: 30px;
}
</style>

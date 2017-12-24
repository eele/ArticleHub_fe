<template>
<div id="app">
  <el-container>
    <el-header><topbar/></el-header>
    <el-main>
      <div class="main">
        <el-row :gutter="20">
          <el-col :span="8"><authors/></el-col>
          <el-col :span="16"><articles/></el-col>
        </el-row>
      </div>
    </el-main>
  </el-container>
</div>
</template>

<script>
import topbar from './common/topbar.vue'
import authors from './home/authors.vue'
import articles from './home/articles.vue'
export default {
  name: 'app',
  components: {
    topbar, authors, articles
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
body {
  padding: 0px;
  margin: 0px;
}

.el-header {
  padding: 0px;
}

.main {
  width: 960px;
  text-align: center;
  margin: auto;
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>

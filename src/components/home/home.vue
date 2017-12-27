<template>
<div>
  <loginDialog/>
  <el-container>
    <el-header>
      <topbar/>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="8">
          <authors/>
        </el-col>
        <el-col :span="16">
          <articles/>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</div>
</template>

<script>
import topbar from './../common/topbar.vue'
import authors from './list/authorList.vue'
import articles from './list/articleList.vue'
import loginDialog from './../common/loginDialog/loginDialog.vue'
export default {
  components: {
    topbar,
    authors,
    articles,
    loginDialog
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

.el-main {
  width: 960px;
  text-align: center;
  margin: auto;
}

.el-row {
  margin-top: 30px;
}
</style>

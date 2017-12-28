<template>
<div style="height: 100%">
  <el-container>
    <el-header style="padding: 0px">
      <topbar/>
    </el-header>
    <router-view></router-view>
  </el-container>
</div>
</template>

<script>
import topbar from './common/topbar.vue'
export default {
  components: {
    topbar
  }
}
</script>

<style>
body {
  padding: 0px;
  margin: 0px;
}
</style>

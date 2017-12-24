<template>
<div id="app">
  <topbar></topbar>
</div>
</template>

<script>
import topbar from './common/topbar.vue'
export default {
  name: 'app',
  components: {
    topbar
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
</style>

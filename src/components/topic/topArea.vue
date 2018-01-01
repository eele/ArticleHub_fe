<template>
<el-container style="text-align: left">
  <el-header style="padding-left: 10px; height: 100px">
    <el-row>
      <el-col :span="3">
        <img :src="info.portraitURL" width="80px" height="80px" style="border-radius: 40px;">
      </el-col>
      <el-col :span="21">
        <div style="height: 5px;"></div>
        <span class="TopicName">{{ info.name }}</span><br><br>
        <span class="articleNum">收录文章：{{ info.articleNum }}</span>
        &nbsp;&nbsp;&nbsp;
        <span>订阅：{{ info.subscribeNum }}</span>
      </el-col>
    </el-row>
  </el-header>
</el-container>
</template>

<script>
export default {
  props: ['info'],
  methods: {
    getQueryString: function(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    }
  }
}
</script>

<style>
.TopicName {
  font-size: 25px;
  font-weight: 900;
  margin-left: 20px;
}
.articleNum {
  margin-left: 20px;
}
</style>

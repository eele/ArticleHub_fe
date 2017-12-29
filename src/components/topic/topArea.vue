<template>
<el-container style="text-align: left">
  <el-header style="padding-left: 10px; height: 100px">
    <el-row>
      <el-col :span="3">
        <img :src="portraitURL" width="80px" height="80px" style="border-radius: 40px;">
      </el-col>
      <el-col :span="21">
        <div style="height: 5px;"></div>
        <span class="TopicName">{{ name }}</span><br><br>
        <span class="articleNum">收录文章：{{ articleNum }}</span>
        &nbsp;&nbsp;&nbsp;
        <span>关注：{{ followNum }}</span>
      </el-col>
    </el-row>
  </el-header>
</el-container>
</template>

<script>
export default {
  data() {
    return {
      portraitURL: 'https://upload.jianshu.io/collections/images/16/computer_guy.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',
      name: '专题名称',
      articleNum: 12312,
      followNum: 12312
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

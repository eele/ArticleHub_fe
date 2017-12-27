<template>
<el-row>
  <el-col :span="5">
    <div class="portrait">
      <img :src="topicInfo.portraitURL" width="48px" height="48px" style="border-radius: 24px;">
    </div>
  </el-col>
  <el-col :span="15">
    <div class="info">
      <span style="font-size: 14px;font-family: Microsoft YaHei;">{{ topicInfo.name }}</span>
      <br>
      <span style="font-size: 14px;color: #9c9999">&nbsp;{{ topicInfo.followNum }} 人关注</span>
    </div>
  </el-col>
  <el-col :span="4" style="margin-top: 5px;">
    <el-button type="text">
      <i class="el-icon-remove-outline"></i>
    </el-button>
  </el-col>
</el-row>
</template>

<script>
export default {
  props: ['topicInfo']
}
</script>

<style>
.el-row {
  margin-top: 0px;
  margin-bottom: 0px;
}

.portrait {
  width: 48px;
  height: 48px;
}

.info {
  text-align: left;
}
</style>

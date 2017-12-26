<template>
<div>
  <div>
    <el-input placeholder="昵称" v-model="username" clearable></el-input>
    <br><br>
    <el-input placeholder="邮箱" v-model="username" clearable></el-input>
    <br><br>
    <el-input placeholder="设置密码" v-model="username" clearable></el-input>
    <br><br>
    <el-input placeholder="确认密码" v-model="password" clearable></el-input>
  </div>
  <div class="button">
    <el-button type="primary" @click="loginDialogPopup = false" plain>
      <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注册&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
    </el-button>
  </div>
</div>
</template>

<script>
export default {}
</script>

<style>
.button {
  margin-top: 40px;
  text-align: center;
  height: 50px;
}
</style>

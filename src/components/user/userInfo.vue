<template>
<el-form class="form" ref="form" :model="form" label-width="80px">
  <br>
  <el-form-item label="昵称">
    <el-input v-model="form.username"></el-input>
  </el-form-item>
  <el-form-item label="电子邮件">
    <el-input v-model="form.email"></el-input>
  </el-form-item>
  <el-form-item label="个人简介">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <hr style="border-color: rgba(237, 237, 237, 0.15);"><br>
  <el-form-item label="修改密码">
    <el-input v-model="form.password"></el-input>
  </el-form-item>
  <el-form-item label="确认密码">
    <el-input v-model="form.co_password"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">保存修改</el-button>
  </el-form-item>
</el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        email: '',
        desc: '',
        password: '',
        co_password: ''
      }
    }
  },
  methods: {
    onSubmit:function() {

    }
  }
}
</script>

<style>
.form {
  width: 580px;
}
</style>

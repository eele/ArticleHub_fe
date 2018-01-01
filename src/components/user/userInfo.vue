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
    <el-input type="password" v-model="form.password"></el-input>
  </el-form-item>
  <el-form-item label="确认密码">
    <el-input type="password" v-model="co_password"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">保存修改</el-button>
  </el-form-item>
</el-form>
</template>

<script>
import {
  mapGetters
} from 'vuex';
export default {
  data() {
    return {
      co_password: '',
      form: {
        username: '',
        email: '',
        desc: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapGetters(['getSessionUid']),
    onSubmit: function() {
      var self = this;
      this.$axios.put('/ArticleHub/user/uid/' + this.getSessionUid(), this.form)
        .then(function(response) {
          self.$message({
            message: '成功保存用户信息',
            type: 'success'
          });
        })
        .catch(function(error) {
          self.$message.error('无法保存用户信息');
          console.log(error);
        });
    }
  },
  mounted: function() {
    var self = this;
    this.$axios.get('/ArticleHub/user/uid/' + this.getSessionUid())
      .then(function(response) {
        self.form = response.data.data[0];
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}
</script>

<style>
.form {
  width: 580px;
}
</style>

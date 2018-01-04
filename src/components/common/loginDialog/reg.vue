<template>
<div>
  <div>
    <el-input placeholder="昵称" v-model="user.username" clearable></el-input>
    <br><br>
    <el-input placeholder="邮箱" v-model="user.email" clearable></el-input>
    <br><br>
    <el-input type="password" placeholder="设置密码" v-model="user.password" clearable></el-input>
    <br><br>
    <el-input type="password" placeholder="确认密码" v-model="confirm_pwd" clearable></el-input>
  </div>
  <div class="button">
    <el-button type="primary" @click="reg" plain>
      <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注册&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
    </el-button>
  </div>
</div>
</template>

<script>
import store from './../../../store/store.js'
import {
  mapMutations
} from 'vuex';
export default {
  store,
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: '',
        portraitURL: '',
        _randomID: 'uid'
      },
      confirm_pwd: ''
    };
  },
  methods: {
    ...mapMutations(['switchLoginDialog']),
    reg: function() {
      var self = this;
      this.$axios.post('/ArticleHub/user', this.user)
        .then(function(response) {
          self.switchLoginDialog();
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
}
</script>

<style>
.button {
  margin-top: 40px;
  text-align: center;
  height: 50px;
}
</style>

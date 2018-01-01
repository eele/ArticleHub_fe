<template>
<div>
  <div>
    <el-input placeholder="昵称" v-model="username" clearable></el-input>
    <br><br>
    <el-input placeholder="邮箱" v-model="email" clearable></el-input>
    <br><br>
    <el-input type="password" placeholder="设置密码" v-model="new_pws" clearable></el-input>
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
      username: '',
      email: '',
      new_pws: '',
      confirm_pwd: ''
    };
  },
  methods: {
    ...mapMutations(['switchLoginDialog']),
    reg: function() {
      this.switchLoginDialog();
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

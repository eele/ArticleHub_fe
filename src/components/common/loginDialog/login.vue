<template>
<div>
  <div>
    <el-input placeholder="用户名" v-model="username" clearable></el-input>
    <br><br>
    <el-input placeholder="密码" v-model="password" clearable></el-input>
  </div>
  <div class="button">
    <el-button type="primary" @click="login">
      <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;登录&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
    </el-button>
  </div>
</div>
</template>

<script>
import {
  mapMutations
} from 'vuex';
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    ...mapMutations(['switchLoginDialog']),
    login: function() {
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

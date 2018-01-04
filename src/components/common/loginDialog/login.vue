<template>
<div>
  <div>
    <el-input placeholder="用户名" v-model="user.username" clearable></el-input>
    <br><br>
    <el-input type="password" placeholder="密码" v-model="user.password" clearable></el-input>
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
      user: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    ...mapMutations(['switchLoginDialog']),
    login: function() {
      var self = this;
      this.$axios.post('/ArticleHub/session/user', this.user)
        .then(function(response) {
          self.switchLoginDialog();
          location.href = "/"
        })
        .catch(function(error) {
          alert("用户名或密码错误")
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

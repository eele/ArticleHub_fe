<template>
<el-dialog title="用户" :visible.sync="loginDialogShow" width="350px" center>
  <el-tabs v-model="activeName">
    <el-tab-pane label="登录" name="login">
      <login/>
    </el-tab-pane>
    <el-tab-pane label="注册" name="reg">
      <reg/>
    </el-tab-pane>
  </el-tabs>
</el-dialog>
</template>

<script>
import login from './login.vue'
import reg from './reg.vue'
import store from './../../../store/store.js'
import {
  mapGetters,
  mapMutations
} from 'vuex';
export default {
  computed: {
    loginDialogShow: {
      get: function() {
        return this.getLoginDialogState();
      },
      set: function() {
        this.switchLoginDialog();
      }
    }
  },
  store,
  methods: {
    ...mapGetters(['getLoginDialogState']),
    ...mapMutations(['switchLoginDialog'])
  },
  components: {
    login,
    reg
  },
  data() {
    return {
      activeName: 'login'
    };
  }
};
</script>

<style>
.el-dialog__title {
  line-height: 24px;
  font-size: 21px;
  color: #409eff;
  font-weight: 900;
}
</style>

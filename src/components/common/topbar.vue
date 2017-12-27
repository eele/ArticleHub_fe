<template>
<div id="topbar">
  <loginDialog/>
  <el-container>
    <el-aside width="130px">
      <div class="logo">ArticleHub</div>
    </el-aside>
    <el-main>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
      background-color="#bedcfb" text-color="#0075ff" active-text-color="#3300ff">
        <el-menu-item v-for="(item, index) in items" :key="''+index" :index="''+index">
          <b>{{ item }}</b>
        </el-menu-item>
        <el-input class="searchBox" placeholder="搜索" suffix-icon="el-icon-search" v-model="keyword">
        </el-input>
        <el-button class="rightButton" type="primary" round icon="el-icon-edit">写文章</el-button>
        <el-button id="userButton" class="rightButton" round @click="switchLoginDialog">
          <img src="./../../assets/user/people_fill.png" height="20px" width="20px" />
        </el-button>
      </el-menu>
    </el-main>
  </el-container>
</div>
</template>

<script>
import store from './../../store/store.js'
import loginDialog from './../common/loginDialog/loginDialog.vue'
import {
  mapState,
  mapMutations
} from 'vuex';
export default {
  components: {
    loginDialog
  },
  methods: mapMutations(['switchLoginDialog']),
  store,
  data() {
    return {
      activeIndex: '0',
      items: ['首页', '专题', '作者'],
      keyword: ''
    };
  }
}
</script>

<style>
#topbar {
  min-width: 960px;
}

.el-main {
  padding: 0px;
}

.logo {
  width: 90px;
  height: 21px;
  background-color: #bedcfb;
  font-family: Microsoft YaHei;
  font-weight: 900;
  color: #125bff;
  padding: 20px;
}

.searchBox {
  float: left;
  margin-top: 10px;
  margin-left: 20px;
  width: 300px;
  border-radius: 20px;
  outline: none;
}

.searchBox>.el-input__inner {
  border-radius: 20px;
  background-color: #e3f2ff
}

.rightButton {
  float: right;
  margin-right: 20px;
  margin-top: 10px;
}

#userButton {
  height: 40px;
  width: 40px;
  padding: 4px;
}
</style>

<template>
<div>
  <loginDialog/>
  <el-container id="topbar">
    <el-aside width="130px">
      <div class="logo">ArticleHub</div>
    </el-aside>
    <el-main>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
      background-color="#bedcfb" text-color="#0075ff" active-text-color="#3300ff"
      @select="handleSelect">
        <el-menu-item v-for="item in items" :key="item.index" :index="item.index">
          <b>{{ item.name }}</b>
        </el-menu-item>
        <el-input class="searchBox" placeholder="搜索" suffix-icon="el-icon-search"
        v-model="keyword">
        </el-input>
        <el-button class="rightButton" type="primary" round
        icon="el-icon-edit" @click="write">写文章</el-button>
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
  methods: {
    ...mapMutations(['switchLoginDialog']),
    handleSelect: function(key, keyPath) {
      switch (key) {
        case "/":
          location.href = "/";
          break;
        case "/authors":
          location.href = "/authors";
          break;
        case "/topics":
          location.href = "/topics";
          break;
        default:
          break;
      }
    },
    write: function() {
      location.href = "/writings";
    }
  },
  store,
  data() {
    return {
      activeIndex: '',
      items: [{
          index: '/',
          name: '首页'
        },
        {
          index: '/topics',
          name: '专题'
        },
        {
          index: '/authors',
          name: '作者'
        }],
        keyword: ''
      };
    },
    created: function() {
      this.activeIndex = location.pathname;
    }
  }
</script>

<style>
#topbar {
  min-width: 863px;
  position: fixed;
  z-index: 100;
  width: 100%;
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

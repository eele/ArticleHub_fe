<template>
<div>
  <loginDialog/>
  <el-container id="topbar">
    <el-aside width="130px">
      <div class="logo">ArticleHub</div>
    </el-aside>
    <el-main>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#bedcfb" text-color="#0075ff" active-text-color="#3300ff" @select="handleSelect">
        <el-menu-item v-for="item in items" :key="item.index" :index="item.index">
          <b>{{ item.name }}</b>
        </el-menu-item>
        <el-input class="searchBox" placeholder="搜索" suffix-icon="el-icon-search" v-model="keyword">
        </el-input>
        <el-button class="rightButton" type="primary" round icon="el-icon-edit" @click="write">写文章</el-button>
        <el-button id="userButton" class="rightButton" round @click="switchLoginDialog" v-show="getSessionUid()==null">
          <img src="./../../assets/user/people_fill.png" height="20px" width="20px" />
        </el-button>
        <el-dropdown id="userButton2" v-show="getSessionUid()!=null" @command="handleCommand">
          <el-button id="userButton" class="rightButton" round>
            <img :src="portraitURL" height="40px" width="40px" style="margin-top: -6px;margin-left: -6px;border-radius: 20px" />
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">用户中心</el-dropdown-item>
            <el-dropdown-item command="b">订阅的专题</el-dropdown-item>
            <el-dropdown-item command="c">关注的作者</el-dropdown-item>
            <el-dropdown-item command="d">注销</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-menu>
    </el-main>
  </el-container>
</div>
</template>

<script>
import store from './../../store/store.js'
import loginDialog from './../common/loginDialog/loginDialog.vue'
import {
  mapGetters,
  mapMutations
} from 'vuex';
export default {
  components: {
    loginDialog
  },
  methods: {
    ...mapMutations(['switchLoginDialog', 'resetSessionUid']),
    ...mapGetters(['getSessionUid']),
    handleSelect: function(key, keyPath) {
      switch (key) {
        case "/":
          location.href = "/";
          break;
        case "/authors":
          location.href = "/authors?tab=1&pb=1&ps=10";
          break;
        case "/topics":
          location.href = "/topics?tab=1&pb=1&ps=10";
          break;
        default:
          break;
      }
    },
    handleCommand: function(command) {
      switch (command) {
        case 'a':
          location.href = "/user";
          break;
        case 'b':
          location.href = "/topics?tab=2&pb=1&ps=10";
          break;
        case 'c':
          location.href = "/authors?tab=2&pb=1&ps=10";
          break;
        case 'd':
          this.resetSessionUid();
          location.href = "/";
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
      portraitURL: '',
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
        }
      ],
      keyword: ''
    };
  },
  created: function() {
    this.activeIndex = location.pathname;
    var self = this;
    this.$axios.get('/ArticleHub/user/uid/' + this.getSessionUid())
      .then(function(response) {
        self.portraitURL = response.data.data[0].portraitURL;
      })
      .catch(function(error) {
        console.log(error);
      });
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

#userButton2 {
  height: 40px;
  width: 40px;
  right: 140px;
  position: absolute;
}
</style>

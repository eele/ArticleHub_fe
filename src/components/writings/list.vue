<template>
<div style="height: 100%">
  <el-menu :unique-opened="uniqueOpened" class="list el-menu-vertical-demo" @select="handleSelect">
    <el-button class="newCategory" type="primary" icon="el-icon-circle-plus" plain
    @click="newArticle">新建文章</el-button>
    <el-menu-item :index="''+index" :key="item.aid" v-for="(item, index) in articleList">
      <template slot="title">
        <span>{{ item.title }}</span>
        <el-dropdown class="categoryOp" @command="handleCommand">
          <span class="el-dropdown-link">
            <i class="el-icon-more"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="newArticle">删除</el-dropdown-item>
            <el-dropdown-item command="renameCategory">投稿状态</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </template>
    </el-menu-item>
  </el-menu>
</div>
</template>

<script>
import {
  mapGetters
} from 'vuex';
export default {
  data() {
    return {
      uniqueOpened: true,
      articleList: []
    }
  },
  methods: {
    ...mapGetters(['getSessionUid']),
    newArticle: function() {
      this.$emit('message', {
        title: '',
        reading: '0',
        authorid: this.getSessionUid(),
        tid: null,
        datetime: this.getNowFormatDate(),
        _content: '',
        _randomID: 'aid'
      });
    },
    handleSelect: function(key, keyPath) {
      var self = this;
      this.$axios.get('/ArticleHub/article/aid/' + this.articleList[key].aid + '?_content=')
        .then(function(response) {
          self.$emit('message', response.data.data[0]);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getList: function() {
      var self = this;
      this.$axios.get('/ArticleHub/article/authorid/' + this.getSessionUid())
        .then(function(response) {
          self.articleList = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getNowFormatDate: function() {
      var date = new Date();
      var seperator1 = "-";
      var seperator2 = ":";
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
        " " + date.getHours() + seperator2 + date.getMinutes() +
        seperator2 + date.getSeconds();
      return currentdate;
    },
    handleCommand(command) {
      this.$message('click on item ' + command);
    }
  },
  mounted: function() {
    this.getList();
  }
}
</script>

<style>
.newCategory {
  width: 100%;
}

.list {
  height: 100%;
}

.categoryOp {
  display: none;
  height: 30px;
  float: right;
  margin-top: -3px;
}

.el-menu-item:hover>.categoryOp {
  display: inline;
}
</style>

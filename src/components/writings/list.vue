<template>
<div style="height: 100%">
  <el-menu :unique-opened="uniqueOpened" class="list el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
    <el-button class="newCategory" type="primary" icon="el-icon-circle-plus" plain>新建类别</el-button>
    <el-submenu :index="''+index" :key="''+index" v-for="(item, index) in articleList">
      <template slot="title">
        <i class="el-icon-document"></i>
        <span>{{ item.category }}</span>
        <el-dropdown class="categoryOp" @command="handleCommand">
          <span class="el-dropdown-link">
            <i class="el-icon-more"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="newArticle">新建文章</el-dropdown-item>
            <el-dropdown-item command="renameCategory">重命名</el-dropdown-item>
            <el-dropdown-item command="deleteCategory">删除类别</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </template>
      <el-menu-item :index="index+'-'+i" :key="index+'-'+i" v-for="(article, i) in item.articles">
        {{ article }}
      </el-menu-item>
    </el-submenu>
  </el-menu>
</div>
</template>

<script>
export default {
  data() {
    return {
      uniqueOpened: true,
      articleList: [{
          category: 'aa1',
          articles: [
            'aaa1',
            'aaa2',
            'aaa3'
          ]
        },
        {
          category: 'aa2',
          articles: [
            'aaa1',
            'aaa2',
            'aaa3'
          ]
        }
      ]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleCommand(command) {
      this.$message('click on item ' + command);
    }
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
  margin-right: 15px;
  margin-top: -3px;
}

.el-submenu__title:hover>.categoryOp {
  display: inline;
}
</style>

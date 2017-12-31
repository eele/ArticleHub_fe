<template>
<div style="height: 100%">
  <el-menu :unique-opened="uniqueOpened" class="list el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
    <el-button class="newCategory" type="primary" icon="el-icon-circle-plus" plain @click="newArticle">新建文章</el-button>
    <el-menu-item :index="''+index" :key="''+index" v-for="(item, index) in articleList">
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
      <!-- <el-menu-item :index="index+'-'+i" :key="index+'-'+i" v-for="(article, i) in item.articles">
        {{ article }}
      </el-menu-item> -->
    </el-menu-item>
  </el-menu>
</div>
</template>

<script>
export default {
  data() {
    return {
      uniqueOpened: true,
      articleList: []
    }
  },
  methods: {
    newArticle: function() {

    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleCommand(command) {
      this.$message('click on item ' + command);
    }
  },
  mounted: function() {
    
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

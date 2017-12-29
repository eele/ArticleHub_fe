<template>
<div>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column :label="label">
      <template slot-scope="scope">
          <author :authorInfo="scope.row" :label="label"/>
      </template>
    </el-table-column>
  </el-table>
  <el-button plain class="moreButton" v-if="label=='我关注的作者'">更多关注的作者 ></el-button>
</div>
</template>

<script>
import author from './author.vue'
export default {
  components: {
    author
  },
  props: ['label'],
  data() {
    return {
      tableData: [{
        portraitURL: 'https://upload.jianshu.io/collections/images/16/computer_guy.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',
        name: '作者名称',
        followNum: 123
      }, {
        portraitURL: 'https://upload.jianshu.io/collections/images/16/computer_guy.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',
        name: '作者名称',
        followNum: 567
      }, {
        portraitURL: 'https://upload.jianshu.io/collections/images/16/computer_guy.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',
        name: '作者名称',
        followNum: 789
      }]
    }
  }
}
</script>

<style>
.moreButton {
  width: 100%;
}
</style>

<template>
<div>
  <el-table :data="tableData" style="width: 280px">
    <el-table-column label="推荐作者">
      <template slot-scope="scope">
          <author :authorInfo="scope.row"/>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
import author from './../item/author.vue'
export default {
  components: {
    author
  },
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

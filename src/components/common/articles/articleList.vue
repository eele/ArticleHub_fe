<template>
<el-table :data="tableData" style="width: 100%">
  <el-table-column :label="label">
    <template slot-scope="scope">
        <articleCom :articleInfo="scope.row" :label="label"/>
    </template>
  </el-table-column>
</el-table>
</template>

<script>
import articleCom from './article.vue'
export default {
  components: {
    articleCom
  },
  props: ['label'],
  data() {
    return {
      tableData: [{
        portraitURL: 'https://upload.jianshu.io/collections/images/16/computer_guy.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',
        authorName: '作者名称',
        datetime: '2001-1-1 01:01:01',
        title: '文章题目',
        content: '文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容',
        topic: '文章',
        reading: 12312,
        commentNum: 123,
        collection: 1231
      }, {
        portraitURL: 'https://upload.jianshu.io/collections/images/16/computer_guy.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',
        authorName: '作者名称',
        datetime: '2001-1-1 01:01:01',
        title: '文章题目',
        content: '文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容',
        topic: '文章',
        reading: 12312,
        commentNum: 1238,
        collection: 1231
      }]
    }
  }
}
</script>

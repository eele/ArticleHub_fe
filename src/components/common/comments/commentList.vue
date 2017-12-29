<template>
<el-table :data="tableData" style="width: 100%">
  <el-table-column>
    <template slot-scope="scope">
        <commentItem :commentInfo="scope.row" :mode="mode"/>
    </template>
  </el-table-column>
</el-table>
</template>

<script>
import commentItem from './commentItem.vue'
export default {
  components: {
    commentItem
  },
  props: ['mode'],
  data() {
    return {
      tableData: [{
        portraitURL: 'https://upload.jianshu.io/collections/images/16/computer_guy.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',
        username: '作者名称',
        datetime: '2001-1-1 01:01:01',
        article: '文章题目',
        content: '文章一部分内容文章一部分内容文章',
        agree: 12312,
      }, {
        portraitURL: 'https://upload.jianshu.io/collections/images/16/computer_guy.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',
        username: '作者名称',
        datetime: '2001-1-1 01:01:01',
        article: '文章题目',
        content: '文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容文章一部分内容',
        agree: 12312,
      }]
    }
  }
}
</script>

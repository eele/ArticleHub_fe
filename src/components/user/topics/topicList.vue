<template>
<div>
  <el-table :data="followData" style="width: 100%">
    <el-table-column label="我订阅的专题">
      <template slot-scope="scope">
              <topicItem :topicInfo="scope.row"/>
          </template>
    </el-table-column>
  </el-table>
  <el-button plain class="moreButton">更多订阅的专题 ></el-button>
</div>
</template>

<script>
import topicItem from './topicItem.vue'
export default {
  components: {
    topicItem
  },
  data() {
    return {
      followData: [{
        portraitURL: 'https://upload.jianshu.io/collections/images/16/computer_guy.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',
        name: '专题名称',
        followNum: 123
      }, {
        portraitURL: 'https://upload.jianshu.io/collections/images/16/computer_guy.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',
        name: '专题名称',
        followNum: 567
      }, {
        portraitURL: 'https://upload.jianshu.io/collections/images/16/computer_guy.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',
        name: '专题名称',
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

<template>
<el-main>
  <div class="title">
    {{ article.title }}
  </div>
  <div class="authorInfo">
    <el-row>
      <el-col :span="3">
        <img :src="article.portraitURL" width="50px" height="50px" style="border-radius: 25px;">
      </el-col>
      <el-col :span="21" style="text-align: left">
        <div style="height: 5px;"></div>
        <span class="UserName"><b>{{ article.author }}</b></span><br>
        <span>{{ article.datetime }}</span>
        &nbsp;&nbsp;&nbsp;
        <span>阅读：{{ article.reading }}</span>
        &nbsp;&nbsp;&nbsp;
        <span>评论：{{ article.commentNum }}</span>
        &nbsp;&nbsp;&nbsp;
        <span>收藏：{{ article.collection }}</span>
      </el-col>
    </el-row>
  </div>
  <div class="content" v-html="article.content">
  </div>
  <div class="favorite">
    <el-button type="primary" round>收藏本文</el-button>
  </div>
  <div class="comments">
    <div class="commentTitle">
      评论
    </div>
    <commentList mode="reading" />
  </div>
</el-main>
</template>

<script>
import commentList from './../common/comments/commentList.vue'
export default {
  components: {
    commentList
  },
  data() {
    return {
      article: {
        title: '题目题目题目',
        author: '作者名称',
        portraitURL: 'https://upload.jianshu.io/collections/images/16/computer_guy.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',
        content: 'content content<br>content content<br>content content',
        datetime: '2001-1-1 01:01:01',
        reading: 12312,
        commentNum: 123,
        collection: 1231
      }
    }
  }
}
</script>

<style>
.el-main {
  width: 700px;
  text-align: center;
  margin: auto;
}

.title {
  margin-top: 30px;
  font-size: 28px;
  font-weight: 900;
  padding-bottom: 30px;
}

.content {
  padding-top: 40px;
}

.commentTitle,
.content {
  text-align: left;
}

.favorite {
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>

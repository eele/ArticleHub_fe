<template>
<el-main class="m-main">
  <el-row class="m-row">
    <el-col :span="16" style="width: 620px">
      <topArea :info="info"/>
      <articleList label="专题文章"/>
    </el-col>
    <el-col :span="8" style="margin-left: 20px">
      <el-card style="text-align:left;min-height:200px">
        <span>专题公告</span><br><br>
        <span v-if="info.desc==''">暂无公告</span>
        <span>{{ info.desc }}</span>
      </el-card>
      <br>
    </el-col>
  </el-row>
</el-main>
</template>

<script>
import topArea from './topArea.vue'
import articleList from './../common/articles/articleList.vue'
import qs from 'qs'
import {
  mapGetters
} from 'vuex';
export default {
  components: {
    topArea,
    articleList
  },
  data() {
    return {
      info: {}
    }
  },
  methods: {
    ...mapGetters(['getSessionUid']),
    getQueryString: function(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    }
  },
  mounted: function() {
    var self = this;
    this.$axios.get("/ArticleHub/topicView/tid/" + this.getQueryString('tid'))
      .then(function(response) {
        self.info = response.data.data[0];
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}
</script>

<style>
.m-main {
  width: 960px;
  text-align: center;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
}
</style>

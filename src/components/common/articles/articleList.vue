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
import {
  mapGetters
} from 'vuex';
export default {
  components: {
    articleCom
  },
  props: ['label'],
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    ...mapGetters(['getSessionUid']),
    getQueryString: function(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    },
  },
  mounted: function() {
    var self = this;
    if (this.label == '热门文章') {
      this.$axios.get('/ArticleHub/articleDetail/authorid/%25?_content=&_pb=1&_ps=10')
        .then(function(response) {
          self.tableData = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    } else if (this.label == '个人文章') {
      this.$axios.get('/ArticleHub/articleDetail/authorid/' + this.getQueryString("uid") + '?_content=')
        .then(function(response) {
          self.tableData = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    } else if (this.label == '专题文章') {
      this.$axios.get('/ArticleHub/articleDetail/tid/' + this.getQueryString("tid") + '?_content=')
        .then(function(response) {
          self.tableData = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    } else if (location.pathname == '/search') {
      this.$axios.get('/ArticleHub/articleDetail/title/%25' + this.getQueryString("q") + '%25?_content=')
        .then(function(response) {
          self.tableData = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      this.$axios.get('/ArticleHub/articleCollected/uid/' + this.getQueryString("uid") + '?_content=')
        .then(function(response) {
          self.tableData = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
}
</script>

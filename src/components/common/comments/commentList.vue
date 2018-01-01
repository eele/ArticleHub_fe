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
      tableData: []
    }
  },
  mounted: function() {
    var self = this;
    if (this.mode == 'reading') {
      this.$axios.get('/ArticleHub/commentDetail/aid/' + this.getQueryString("aid"))
        .then(function(response) {
          self.tableData = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      this.$axios.get('/ArticleHub/commentDetail/authorid/' + this.getQueryString("uid"))
        .then(function(response) {
          self.tableData = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  methods: {
    getQueryString: function(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    }
  }
}
</script>

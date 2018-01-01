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
import qs from 'qs'
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
    this.getComments();
  },
  methods: {
    getComments: function() {
      var self = this;
      if (this.mode == 'reading') {
        this.$axios.get('/ArticleHub/commentDetail/aid/' + this.getQueryString("aid"), qs.stringify({
          _orderby: 'datetime',
          _order: 'desc'
        }))
          .then(function(response) {
            self.tableData = response.data.data;
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        this.$axios.get('/ArticleHub/commentDetail/authorid/' + this.getQueryString("uid"), qs.stringify({
          _orderby: 'datetime',
          _order: 'desc'
        }))
          .then(function(response) {
            self.tableData = response.data.data;
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    getQueryString: function(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    }
  }
}
</script>

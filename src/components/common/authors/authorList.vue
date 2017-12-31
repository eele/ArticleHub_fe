<template>
<div>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column :label="label">
      <template slot-scope="scope">
          <author :authorInfo="scope.row" :label="label"/>
      </template>
    </el-table-column>
  </el-table>
  <el-button plain class="moreButton" v-if="label=='我关注的作者'"
  @click="moreAuthors" >更多关注的作者 ></el-button>
</div>
</template>

<script>
import author from './author.vue'
import {
  mapGetters
} from 'vuex';
export default {
  components: {
    author
  },
  props: ['label'],
  data() {
    return {
      tableData: []
    }
  },
  mounted: function() {
    if (location.pathname == "/authors") {
      if (this.label=='我关注的') {
        this.getData('/ArticleHub/followDetail/muid/' + this.getSessionUid(), {
          _pb: this.getQueryString("pb"),
          _ps: this.getQueryString("ps"),
          _orderby: 'followNum',
          _order: 'desc'
        })
      } else {
        this.getData('/ArticleHub/author/uid/%25', {
          _pb: this.getQueryString("pb"),
          _ps: this.getQueryString("ps"),
          _orderby: 'followNum',
          _order: 'desc'
        })
      }
    } else {
      if (this.label=='我关注的作者') {
        this.getData('/ArticleHub/followDetail/muid/' + this.getSessionUid(), {
          muid: this.getSessionUid(),
          _pb: '1',
          _ps: '3',
          _orderby: 'followNum',
          _order: 'desc'
        })
      } else {
        this.getData('/ArticleHub/author/uid/%25', {
          _pb: '1',
          _ps: '3',
          _orderby: 'followNum',
          _order: 'desc'
        })
      }
    }
  },
  methods: {
    ...mapGetters(['getSessionUid']),
    getData: function(url, params) {
      var self = this;
      this.$axios.get(url, {
          params: params
        })
        .then(function(response) {
          self.tableData = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    moreAuthors: function() {
      location.href = "/authors?tab=2&pb=1&ps=10";
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

<style>
.moreButton {
  width: 100%;
}
</style>

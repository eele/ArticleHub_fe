<template>
<div>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column :label="label">
      <template slot-scope="scope">
              <topicItem :topicInfo="scope.row"/>
          </template>
    </el-table-column>
  </el-table>
  <el-button plain class="moreButton" v-if="label=='我订阅的专题'" @click="moreTopics">更多订阅的专题 ></el-button>
</div>
</template>

<script>
import topicItem from './topicItem.vue'
import {
  mapGetters
} from 'vuex';
export default {
  components: {
    topicItem
  },
  props: ['label'],
  data() {
    return {
      tableData: []
    }
  },
  mounted: function() {
    if (location.pathname == "/topics") {
      if (this.label=='我订阅的') {
        this.getData('/ArticleHub/topicDetail/muid/' + this.getSessionUid(), {
          _pb: this.getQueryString("pb"),
          _ps: this.getQueryString("ps"),
          _orderby: 'subscribeNum',
          _order: 'desc'
        })
      } else {
        this.getData('/ArticleHub/topicView/tid/%25', {
          _pb: this.getQueryString("pb"),
          _ps: this.getQueryString("ps"),
          _orderby: 'subscribeNum',
          _order: 'desc'
        })
      }
    } else {
      if (this.label=='我订阅的专题') {
        this.getData('/ArticleHub/topicDetail/muid/' + this.getSessionUid(), {
          muid: this.getSessionUid(),
          _pb: '1',
          _ps: '3',
          _orderby: 'subscribeNum',
          _order: 'desc'
        })
      } else {
        this.getData('/ArticleHub/topicView/tid/%25', {
          _pb: '1',
          _ps: '3',
          _orderby: 'subscribeNum',
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
    moreTopics: function() {
      location.href = "/topics?tab=2&pb=1&ps=10";
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

<template>
<el-container class="container">
  <el-aside>
    <list ref="list" v-if="listShow" v-on:message="recieveMessage" />
  </el-aside>
  <el-main class="editArea" v-if="areaShow">
    <el-row>
      <el-col :span="20">
        <el-input v-model="articleData.title" placeholder="请输入标题"></el-input>
      </el-col>
      <el-col :span="4">
        &nbsp;
        <el-button type="primary" @click="save">保存文章</el-button>
      </el-col>
    </el-row>
    <quill-editor v-model="articleData._content" ref="myQuillEditor">
    </quill-editor>
  </el-main>
</el-container>
</template>

<script>
import list from './list.vue'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import {
  quillEditor
} from 'vue-quill-editor'
import {
  mapGetters
} from 'vuex';
export default {
  components: {
    quillEditor,
    list
  },
  data() {
    return {
      areaShow: false,
      listShow: true,
      articleData: {
        title: '',
        reading: '0',
        authorid: this.getSessionUid(),
        tid: null,
        datetime: this.getNowFormatDate(),
        _content: '',
        _randomID: 'aid'
      }
    }
  },
  methods: {
    ...mapGetters(['getSessionUid']),
    recieveMessage: function(articleData) {
      this.articleData = articleData;
      this.areaShow = false;
      this.areaShow = true;
    },
    getNowFormatDate: function() {
      var date = new Date();
      var seperator1 = "-";
      var seperator2 = ":";
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
        " " + date.getHours() + seperator2 + date.getMinutes() +
        seperator2 + date.getSeconds();
      return currentdate;
    },
    save: function() {
      var self = this;
      var url = '';
      if (this.articleData._randomID == undefined) {
        this.$axios.put('/ArticleHub/article/aid/' + this.articleData.aid, this.articleData)
          .then(function(response) {
            self.$message({
              message: '已保存',
              type: 'success'
            });
          })
          .catch(function(error) {
            self.$message.error('无法保存文章');
            console.log(error);
          });
      } else {
        this.$axios.post('/ArticleHub/article', this.articleData)
          .then(function(response) {
            self.listShow = false;
            self.listShow = true;
            self.$refs.list.getList();
            self.$message({
              message: '已保存',
              type: 'success'
            });
          })
          .catch(function(error) {
            self.$message.error('无法保存文章');
            console.log(error);
          });
      }
    },
    onEditorChange({
      quill,
      html,
      text
    }) {
      console.log('editor change!', quill, html, text)
      this._content = html
    }
  }
}
</script>

<style>
html,
body,
.writings,
.container,
.quill-editor,
.editArea {
  height: 100%;
  overflow: hidden;
  padding: 0px;
  margin: 0px;
}

</style>

<template>
<el-container class="container">
  <el-aside>
    <list/>
  </el-aside>
  <el-main class="editArea">
    <el-row>
      <el-col :span="20">
        <el-input v-model="articleData.title" placeholder="请输入标题"></el-input>
      </el-col>
      <el-col :span="4">
        &nbsp;
        <el-button type="primary" @click="save">保存文章</el-button>
      </el-col>
    </el-row>
    <quill-editor v-model="articleData._content" ref="myQuillEditor" :options="editorOption">
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
      articleData: {
        title: '',
        reading: '0',
        authorid: this.getSessionUid(),
        tid: null,
        datetime: this.getNowFormatDate(),
        _content: '',
        _randomID: 'aid'
      },
      editorOption: {
        // some quill options
      }
    }
  },
  methods: {
    ...mapGetters(['getSessionUid']),
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
      this.$axios.post('/ArticleHub/article', this.articleData)
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
    },
    onEditorChange({
      quill,
      html,
      text
    }) {
      console.log('editor change!', quill, html, text)
      this._content = html
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    }
  },
  mounted() {
    console.log('this is current quill instance object', this.editor)
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

.editArea {
  /* visibility: hidden; */
}
</style>

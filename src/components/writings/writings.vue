<template>
<el-container class="container">
  <el-aside>
    <list/>
  </el-aside>
  <el-main class="editArea">
    <el-row>
      <el-col :span="20">
        <el-input v-model="title" placeholder="请输入标题"></el-input>
      </el-col>
      <el-col :span="4">
        &nbsp;<el-button type="primary">保存文章</el-button>
      </el-col>
    </el-row>
    <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)" @ready="onEditorReady($event)">
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
export default {
  components: {
    quillEditor,
    list
  },
  data() {
    return {
      title: '',
      content: '',
      editorOption: {
        // some quill options
      }
    }
  },
  // manually control the data synchronization
  // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
  methods: {
    onEditorBlur(quill) {
      console.log('editor blur!', quill)
    },
    onEditorFocus(quill) {
      console.log('editor focus!', quill)
    },
    onEditorReady(quill) {
      console.log('editor ready!', quill)
    },
    onEditorChange({
      quill,
      html,
      text
    }) {
      console.log('editor change!', quill, html, text)
      this.content = html
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

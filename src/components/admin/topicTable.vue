<template>
<div>
  <el-dialog title="新建/修改专题" :visible.sync="newTopicDialogVisible" width="30%" center>
    <el-form label-position="right" label-width="80px" :model="formTopic">
      <el-form-item label="专题名">
        <el-input v-model="formTopic.name"></el-input>
      </el-form-item>
      <el-form-item label="图标地址">
        <el-input v-model="formTopic.portraitURL"></el-input>
      </el-form-item>
      <el-form-item label="专题公告">
        <el-input type="textarea" v-model="formTopic.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
        <el-button @click="newTopicDialogVisible=false">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
  <div align="right">
    <el-button type="primary" size="mini" @click="newTopicDialogVisible = true;formTopic={};formTopic._randomID = 'tid';">新建专题</el-button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </div>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="name" label="专题名">
    </el-table-column>
    <el-table-column prop="desc" label="专题公告">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
export default {
  data() {
    return {
      formTopic: {
        name: '',
        portraitURL: '',
        desc: '',
        _randomID: 'tid'
      },
      newTopicDialogVisible: false,
      tableData: []
    }
  },
  methods: {
    onSubmit() {
      var self = this;
      if (this.formTopic._randomID == 'tid') {
        this.$axios.post('/ArticleHub/topic', this.formTopic)
          .then(function(response) {
            self.getList();
            self.newTopicDialogVisible = false;
          })
          .catch(function(error) {
            self.$message.error('无法新建专题');
            console.log(error);
          });
      } else {
        this.$axios.put('/ArticleHub/topic/tid/' + this.formTopic.tid, this.formTopic)
          .then(function(response) {
            self.getList();
            self.newTopicDialogVisible = false;
          })
          .catch(function(error) {
            self.$message.error('无法修改专题');
            console.log(error);
          });
      }
    },
    getList() {
      var self = this;
      this.$axios.get('/ArticleHub/topic/tid/%25')
        .then(function(response) {
          self.tableData = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    handleEdit(index, row) {
      this.formTopic = row;
      this.formTopic._randomID = undefined;
      this.newTopicDialogVisible = true;
    },
    handleDelete(index, row) {
      var self = this;
      this.$axios.get('/ArticleHub/topicView/tid/' + row.tid)
        .then(function(response) {
          if (response.data.data[0].articleNum > 0) {
            alert("该专题有文章存在，不能删除");
          } else {
            self.deleteTopic(row.tid);
          }
        })
        .catch(function(error) {
          console.log(error);
        });

    },
    deleteTopic(tid) {
      var self = this;
      this.$axios.delete('/ArticleHub/topic/tid/' + tid)
        .then(function(response) {
          self.getList();
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted: function() {
    this.getList();
  }
}
</script>

<style>
.el-table td,
.el-table th.is-leaf {
  text-align: center;
}
</style>

<template>
<el-container style="text-align: left;">
  <el-header style="height: 43px;">
    <el-row>
      <el-col :span="2">
        <span>
            <img :src="articleInfo.portraitURL" width="32px" height="32px" style="border-radius: 16px;">
          </span>
      </el-col>
      <el-col :span="22" style="margin-top: 3px;">
        <span class="authorName">{{ articleInfo.authorName }}</span> &nbsp;&nbsp;&nbsp;
        <span class="datetime">{{ articleInfo.datetime }}</span>
      </el-col>
    </el-row>
  </el-header>
  <el-main style="text-align: left;">
    <span class="title">{{ articleInfo.title }}</span>
    <span class="content"><p>{{ articleInfo.content }}</p></span>
  </el-main>
  <el-footer style="padding: 0px; height:auto;">
    <el-tag size="mini">{{ articleInfo.category }}</el-tag>&nbsp;&nbsp;
    <span class="icon-eye" style="font-weight: 900;font-size: 14px;color: #b9b7b7;">
        <b>&nbsp;{{ articleInfo.reading }}</b>
    </span> &nbsp;&nbsp;
    <span class="icon-comments" style="font-size: 12px;color: #b9b7b7;">
        <b style="font-size: 14px">&nbsp;{{ articleInfo.commentNum }}</b>
    </span> &nbsp;&nbsp;
    <span class="icon-favorite_border" style="font-weight: 900;font-size: 14px;color: #b9b7b7;">
        <b>&nbsp;{{ articleInfo.collection }}</b>
    </span>
  </el-footer>
</el-container>
</template>

<script>
export default {
  props: ['articleInfo']
}
</script>

<style>
.authorName {
  font-size: 14px;
  font-family: Microsoft YaHei;
}

.datetime {
  font-size: 14px;
  color: #9c9999;
}

.title {
  font-size: 20px;
  font-family: Microsoft YaHei;
  font-weight: 900;
}

p {
  position: relative;
  line-height: 20px;
  max-width: 620px;
  max-height: 60px;
  overflow: hidden;
}

p::after {
  content: "...";
  font-weight: 900;
  position: absolute;
  bottom: 0;
  right: 0;
  padding-left: 40px;
  background: -webkit-linear-gradient(left, transparent, #fff 55%);
  background: -o-linear-gradient(right, transparent, #fff 55%);
  background: -moz-linear-gradient(right, transparent, #fff 55%);
  background: linear-gradient(to right, transparent, #fff 55%);
}

@font-face {
  font-family: 'icomoon';
  src: url('./../../../assets/fonts/icomoon.svg?q9qu96');
  src: url('./../../../assets/fonts/icomoon.eot?q9qu96#iefix') format('embedded-opentype'),
  url('./../../../assets/fonts/icomoon.ttf?q9qu96') format('truetype'),
  url('./../../../assets/fonts/icomoon.woff?q9qu96') format('woff'),
  url('./../../../assets/fonts/icomoon.svg?q9qu96#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
}

[class^="icon-"],
[class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-comments:before {
  content: "\e903";
}

.icon-eye:before {
  content: "\e902";
}

.icon-favorite_border:before {
  content: "\e901";
}
</style>

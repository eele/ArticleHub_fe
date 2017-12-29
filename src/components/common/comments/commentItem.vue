<template>
<el-container style="text-align: left;">
  <el-header style="height: 35px;padding: 0px;">
    <el-row>
      <el-col :span="2">
        <span>
          <img :src="commentInfo.portraitURL" width="32px" height="32px" style="border-radius: 16px;">
        </span>
      </el-col>
      <el-col :span="22" style="margin-top: 3px;">
        <span class="username">{{ commentInfo.username }}</span>&nbsp;&nbsp;
        <span class="article" v-if="mode!='reading'">评论了&nbsp;&nbsp;{{ commentInfo.article }}</span>
      </el-col>
    </el-row>
  </el-header>
  <el-main style="text-align: left;">
    <span class="content"><p>{{ commentInfo.content }}</p></span>
  </el-main>
  <el-footer style="padding: 0px; height:auto;">

    <el-button type="text">
      <span class="icon-favorite_border" style="font-weight: 900;font-size: 14px;color: #b9b7b7;">
        <b>&nbsp;{{ commentInfo.agree }}</b>
      </span>
    </el-button>
    &nbsp;&nbsp;&nbsp;
    <span class="datetime">{{ commentInfo.datetime }}</span>
  </el-footer>
</el-container>
</template>

<script>
export default {
  props: ['commentInfo', 'mode']
}
</script>

<style>
.username,
.article {
  font-size: 14px;
  font-family: Microsoft YaHei;
}

.datetime {
  font-size: 14px;
  color: #9c9999;
}

p {
  position: relative;
  line-height: 20px;
  max-width: 660px;
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

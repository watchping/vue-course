<template>
  <!--1:一条消息组件Message.vue-->
  <div class="rootstyle">
    <!--2:左侧图片标题子标题-->
    <div class="leftimgtxt">
      <img :src="imgurl" class="imgstyle" />
      <div class="lefttitle">
        <span class="title">{{ title }}</span>
        <span class="subtitle"> {{ subtitle }}</span>
      </div>
    </div>
    <!--3:右侧发表时间-->
    <span class="sendtime">
      {{ sendtime }}
    </span>
  </div>
</template>
<script>
export default {
  props: {
    //声明接收父组件传递数据
    imgurl: { default: "" }, //左侧图片
    title: { default: "" }, //左侧标题
    subtitle: { default: "" }, //子标题
    sendtime: { default: "" }, //发送时间
  },
};
</script>
<style scoped>

/*1:一条消息根元素 弹性布局*/
.rootstyle {
  display: flex; /*弹性布局*/
  justify-content: space-between;/*两端对齐  垂直居中*/
  align-items: center;
}
/*2:左侧图片与标题父元素*/
.leftimgtxt {
  display: flex; /*弹性布局，子元素水平排列*/
}
/*3:左侧图片*/
.imgstyle {
  width: 50px; /*图片宽度和高度*/
  height: 50px;
}
/*4:左侧标题[标题;子标题]*/
.lefttitle {
  display: flex; /*弹性布局*/
  flex-direction: column; /*子元素按列排*/
  justify-content: center;/*居中对齐 17*/
  margin-left: 7px;
}
/*5:左侧标题*/
.title {
  color: #000;
  font-size: 17px;
  text-align: left;
}
/*6:左侧子标题*/
.subtitle {
  color: gray;
  margin-top: 4px;
   text-align: left;
}
/*7:右侧发送时间 22*/
.sendtime {
  color: gray;
}
</style>

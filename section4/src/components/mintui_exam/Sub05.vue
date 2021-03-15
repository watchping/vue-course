<template>
  <div>
    Sub05.vue
    <!--子组件:功能显示msg数据-->
    <h1>{{ msg }}</h1>
    <!--子组件:显示一张图片-->
    <img :src="imgurl" />
  </div>
</template>
<script>
export default {
  props: {
    //声明接收父组件数据
    msg: { default: "" }, //消息数据
    imgurl: { default: "" }, //图片路径
  },
};
</script>

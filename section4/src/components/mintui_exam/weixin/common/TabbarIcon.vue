<template>
  <div>
    <!--focused选中状态true;false-->
    <!--selectedImage选中图片-->
    <!--normalImage  默认图片-->
    <img :src="focused?selectedImage:normalImage" class="imgstyle"/>
  </div>
</template>
<script>
export default {
  props:{
    //声明当前元素选中状态
    focused:false,
    //选中时显示图片
    selectedImage:{default:""},
    //默认显示图片
    normalImage:{default:""}
  }
}
</script>
<style scoped>
.imgstyle{
  width:30px;
  height:30px;
}
</style>


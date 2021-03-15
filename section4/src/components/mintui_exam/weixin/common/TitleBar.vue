<template>
  <!--h1>顶部导航条TitleBar.vue</h1-->
  <div class="page-head">
    <!--左侧文字-->
    <span>{{leftTitle}}</span>
    <!--二张图片-->
    <div class="right-head">
       <div class="searchdiv" @click="search">
          <img :src="rightFirstImg" style="width:25px;"/>
       </div>
       <div class="searchdiv" style="margin-left:20px" @click="add">
          <img :src="rightSecondImg" style="width:25px;margin-right:15px;"/>
       </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    //左侧标签  默认类型
    leftTitle:{default:""},
    //右侧二张图片
    rightFirstImg:{default:""},
    rightSecondImg:{default:""},
    //右侧二个函数 搜索 添加
    search:{type:Function},
    add:{type:Function}
  }
}
</script>
<style scoped>
/*1:外层元素弹性布局*/
.page-head{
  display: flex;/*指定布局方式弹性*/
  position: fixed;/*固定定位*/
  z-index: 999;/*显示在其它元素上方*/
  width:100%; /*填满父元素*/
  justify-content: space-between; /*子元素两端对齐*/
  align-items: center;  /*垂直居中*/

  background-color:#3E3A39;
  color:#fff;/*颜色大小*/
  padding-left:7px;/*内边距*/
  padding-right:7px;
  height:48px;/*元素高度*/
  font-size:18px;
  left:0px;
  top:0px;
}
/*2:右侧元素弹性布局45*/
.right-head{
  display: flex;
}
/*3:搜索和添加元素区域弹性布局*/
</style>

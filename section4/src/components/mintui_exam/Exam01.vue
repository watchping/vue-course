<template>
    <div>
      <h3>mintui练习组件 Exam01.vue</h3>
      <!--添加一个按钮,当用户点击按钮时显示消息提示框-->
      <button @click="openToast">显示消息框</button>
      <!--添加一个按钮,当用户点击按钮时显示确认框-->
      <button @click="openAlert">显示确认框</button>
    </div>
</template>
<script>
export default {
  //2:添加一组函数
  methods:{
    //2.2:添加显示确认消息函数
    openAlert(){
       //-确认消息       确定
       //this.$messagebox("消息","用户名格式不正确");
       //-确认按钮消息   确定  取消
       //this.$messagebox.confirm("是否删除指定数据")
       //.then(res=>{
       //  console.log("确认") //确认后回调函数
       //})
       //.catch(err=>{
       //  console.log("取消") //取消后回调函数
       //})
       //-输出框
       this.$messagebox.prompt("请输入东哥的年龄")
       .then((value)=>{
         console.log(value)
       })
       .catch(err=>{
         console.log(err)
       })
    },
     //2.1:添加显示消息提示框函数
     openToast(){
       //console.log(123);
       //2.2:显示短消息提示框:默认3s后结束
       //this 当前组件对象 Exam01.vue
       this.$toast({
           message:"添加成功", //显示文字
           position:"top",    //文字位置
           iconClass:"iconfont icon-diannao"//指定字体图标  电脑图标
       });
     }
  }
}
</script>
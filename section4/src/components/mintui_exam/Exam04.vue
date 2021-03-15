<template>
  <div>
    <h4>Exam04.vue</h4>
    <!--如何完成点击按钮切换面板-->
    <mt-button @click="handle5('tab1')">生鲜</mt-button>
    <mt-button @click="handle5('tab2')">酒</mt-button>
    <mt-button @click="handle5('tab3')">化妆品</mt-button>
    <!--创建面板组件;添加三块面板-->
    <!--父元素-->
    <mt-tab-container v-model="active">
      <!--三个面板-->
      <mt-tab-container-item id="tab1">
                                      生鲜
      </mt-tab-container-item>
      <mt-tab-container-item id="tab2">
             酒
      </mt-tab-container-item>
      <mt-tab-container-item id="tab3">
          化妆品
      </mt-tab-container-item>
    </mt-tab-container>
    <!--底部导航栏:完整切换面板按钮-->
    <!--父元素-->
    <mt-tabbar v-model="active">
     <!--三个按钮-->
     <!--一个按钮 图片 文字26-->
     <mt-tab-item id="tab1">
        <img src="../../assets/01.png" slot="icon"  />
        生鲜
     </mt-tab-item>
     <mt-tab-item id="tab2">
       <img src="../../assets/02.png" slot="icon" />
                       酒
     </mt-tab-item>
     <mt-tab-item id="tab3">
       <img src="../../assets/03.png"  slot="icon"  />
        化妆品
     </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data(){
    return {
      active:"tab1",//绑定显示面板id
    }
  },
  methods:{
    handle5(id){
      //功能:切换不同组件列表
      //1:添加参数id,接收字符串
      console.log("1:"+id);
      //2:将参数id赋值active 11:50
      this.active = id;
    }
  }
}
</script>

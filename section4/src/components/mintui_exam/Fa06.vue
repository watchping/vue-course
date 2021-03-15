<template>
  <div>
    <h4>父组件</h4>
    <!--(3)调用子组件-->
    <sub05 :msg="msg2" :imgurl="require('@/assets/01.png')"></sub05>
  </div>
</template>
<script>
//(1)引入子组件
import Sub05 from "./Sub05.vue";
export default {
  data() {
    return {
      msg2: "今天是2月10日",
    };
  },
  //(2)注册子组件
  components: {
    sub05: Sub05,
  },
};
</script>

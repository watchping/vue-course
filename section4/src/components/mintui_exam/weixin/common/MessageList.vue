<template>
  <div>
    <!--MessageList.vue-->
    <!--(3)调用子组件-->
    <message
      class="itemstyle"
      v-for="(item, i) of rows"
      :key="i"
      :imgurl="require('@/assets/a_7.png')"
      :title="item.title"
      :subtitle="item.subtitle"
      :sendtime="item.time"
    ></message>
  </div>
</template>
<script>
//(1)引入子组件
import Message from "./Message.vue";
//(1.1)引入json文件->js object
import list from "../json/messagelist.json";
export default {
  data() {
    return {
      //将js对象绑定rows
      rows: list.data,
    };
  },
  created() {
    console.log(list);
  },
  //(2)注册子组件
  components: {
    message: Message,
  },
};
</script>
<style scoped>
/*1:一条消息底部添加一条灰色下划线*/
.itemstyle {
  padding: 5px;
  border-bottom: 1px solid #d9d9d9;
}
</style>

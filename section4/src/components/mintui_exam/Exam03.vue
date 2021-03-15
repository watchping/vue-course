<template>
  <div>
    <h3>Exam03_switch.vue</h3>
    <h4>开关组件</h4>
    <!--开关 v-model="" bool-->
    <!--change 修改事件-->
    <!--当此事件触发,修改程序行为-->
    <mt-switch v-model="val2" @change="handle3">
      开组组件
    </mt-switch>
    <!--添加按钮获取开关组件值-->
    <mt-button @click="handle2">获取状态值</mt-button>
    <hr />
    <!--单选列表组件-->
    <mt-radio title="东哥今年多大了" :options="options" v-model="val4">
    </mt-radio>
    <mt-button @click="handle5">
      获取单选列表选中值
    </mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      val2: true, //打开状态
      val4: "", //选中值
      options: [
        //单选列表项目
        { label: "去年", value: "20" },
        { label: "今年", value: "21" },
        { label: "明年", value: "22" },
      ],
    };
  },
  methods: {
    handle5() {
      //功能:获取选中单选列表中值
      this.$toast(this.val4);
    },
    handle3() {
      //功能:当开关组件状态发生修改
      //     立即获取值,再做相应操作
      console.log(this.val2);
      //后续发送ajax请求修改服务器功能
    },
    handle2() {
      //功能:获取开关组件值
      console.log(this.val2);
    },
  },
};
</script>

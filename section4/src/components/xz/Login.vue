<template>
  <div>
    <h3>Login.vue</h3>
    <!--添加二个输入框-->
    <mt-field placeholder="请输入用户名" v-model="uname"></mt-field>
    <mt-field placeholder="请输入密码" v-model="upwd"></mt-field>
    <!--添加一个登录按钮-->
    <mt-button size="large" @click="login">登陆</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uname: "dingding", //双向绑定
      upwd: "123456", //用户名和密码
    };
  },
  methods: {
    login() {
      //功能:完成用户登录验证方法
      //*1:创建正则表达式 字母数字3~12
      var reg = /^[a-z0-9]{3,12}$/i;
      //*2:获取用户名和密码
      var u = this.uname;
      var p = this.upwd;
      console.log(u + "|" + p);
      // *3:验证用户名如果格式不正确
      //     提示格式错误
      if (!reg.test(u)) {
        this.$messagebox("消息", "用户名格式不正确");
        return;
      }
      //  *4:验证密码如果格式不正确
      //    提示格式错误
      if (!reg.test(p)) {
        this.$messagebox("消息", "密码格式不正确");
        return;
      }
      //5:创建url请求服务器程序地址
      //var url = "login";
      let url= "/user/login"   //watchping
      //6:创建obj请求时数据
      var obj = { uname: u, upwd: p };
      //7:发送ajax请求
      //this.axios.get(url, { params: obj }).then((res) => {
      this.axios.post(url, obj).then((res) => {   //watchping
        //服务器返回信息
        //console.log(res);
        //8:获取服务器返回信息
        //9:如果服务器返回-1 提示32
        //if (res.data.code == -1) {
        if (res.data.code != 200) {
          this.$messagebox("消息", "用户名或密码有误");
        } else {
          this.$toast("登录成功");
          //10:跳转商品列表组件 /Product
          this.$router.push("/Product");
        }
      });
    },
  },
};
</script>

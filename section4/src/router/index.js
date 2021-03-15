import Vue from "vue"; //引入Vue对象
import VueRouter from "vue-router"; //引入路由
//引入自定义组件
//1:引入组件Exam01.vue
import Exam01 from "../components/mintui_exam/Exam01.vue";
import Exam02 from "../components/mintui_exam/Exam02.vue";
import Exam03 from "../components/mintui_exam/Exam03.vue";
import Exam04 from "../components/mintui_exam/Exam04.vue";

import Fa06 from "../components/mintui_exam/Fa06.vue";

import Home from "../components/mintui_exam/weixin/Home.vue";
import MessageList from "../components/mintui_exam/weixin/common/MessageList.vue";

import Login from "@/components/xz/Login.vue";
import Product from "@/components/xz/Product.vue";
import Cart from "@/components/xz/Cart.vue";


Vue.use(VueRouter);   //将路由对象注册V
//配置组件-:访问路径
const routes = [
  { path: "/Exam01", component: Exam01 },
  { path: "/Exam02", component: Exam02 },
  { path: "/Exam03", component: Exam03 },
  { path: "/Exam04", component: Exam04 },
  { path: "/Fa06", component: Fa06 },

  { path: "/", component: Home },
  { path: "/MessageList", component: MessageList },

  //以下是学子商城
  { path: "/Login", component: Login },
  { path: "/Product", component: Product },
  { path: "/Cart", component: Cart },


];

const router = new VueRouter({
 // mode:'history',
  routes,
});

export default router;

//打浏览器地址 http://127.0.0.1:8080/#/Exam02 回车

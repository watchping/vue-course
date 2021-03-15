import Vue from 'vue'     //vue实例对象
import App from './App.vue'    //根组件
import router from './router'   //路由模块
import store from './store'

Vue.config.productionTip = false

//1:引入mint-ui所有组件
import MintUI from "mint-ui"
//2:单独引入mint-ui样式文件
import "mint-ui/lib/style.css"
//3:将mint-ui对象注册Vue实例 34
Vue.use(MintUI);

//引入图标字体中样式文件，使所有自定义组件均可使用
import "./font/iconfont.css"
//使用axios模块
//1引入axios库
import axios from "axios"
//2配置访问服务器的基础路径
//axios.defaults.baseURL = "http://127.0.0.1:5050"
axios.defaults.baseURL = "http://115.159.160.93:8080"
//3配置保存session数据
axios.defaults.withCredentials = true;
//4注册 withCredentials
Vue.prototype.axios = axios;


//以下代码一定在main.js最后
new Vue({
  router,         //路由对象
  store,
  render: h => h(App),
}).$mount('#app')
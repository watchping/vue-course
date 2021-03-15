import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//1. 引入全局组件.vue文件
import MyHeader from "./components/MyHeader"
//2. 将MyHeader组件对象变成了全局组件
Vue.component("my-header",MyHeader);
//结果: 在当前项目中任何位置都可使用<my-header>引用页头

// import axios from "axios"
// axios.defaults.baseURL = "http://115.159.160.93:8080";//="http://xzserver.applinzi.com"
// Vue.prototype.axios=axios;


Vue.config.productionTip = false

var vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

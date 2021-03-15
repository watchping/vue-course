var Index={
  template:`<div style="background-color:#C8BFE7">
    <h1>这里是首页</h1>
    <button @click="goToDetails">查看1号商品的详情</button><br/>
    <router-link to="/details/2">查看2号商品的详情</router-link>
  </div>`,
  methods:{
    goToDetails(){
      this.$router.push("/details/1")
    }
  }
}
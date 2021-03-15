var Details={
  template:`<div style="background-color:#FF7F27">
    <h1>这里是详情页</h1>
    <h2>显示{{lid}}号商品的详细信息...</h2>
    <button @click="back">返回首页</button>
  </div>`,
  props:[ "lid" ],
  methods:{
    back(){
      this.$router.push("/")
    }
  }
}
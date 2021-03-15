Vue.component("my-counter",{
  //大多数属性同new Vue()
  //1. 定义可反复使用的组件的HTML片段模板
  template:`<div>
    <button @click="change(-1)">-</button>
    <span>{{count}}</span>
    <button @click="change(+1)">+</button>
  </div>`,
  //2. 定义data()函数，可返回一个新的数据对象
  data(){
    return {//相当于以前new Vue()中的data{}
      //因为组件模板中需要一个变量count
      count:0,
      names:["亮亮", "然然", "东东"]
    }
  },
  //3. 之后的内容和new Vue()中就完全一样了
  methods:{
    change(i){
      this.count+=i;
      this.count<0&&(this.count=0)
    }
  }
})
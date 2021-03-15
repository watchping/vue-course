//对象的变量名，必须使用驼峰命名
//且，对象的变量名，将来会被自动翻译为子组件的标签名。
var todoItem={//{}内保持组件的内容格式不变。
  template:`<li>
    <!--从爹给的口袋里获得的数据，可在孩子里用于绑定语法中，就像用自己data中的数据一样方便-->
    {{i+1}} - {{task}} <button @click="del_item">x</button>
  </li>`,
  //孩子todoItem组件，可从爹给的两个口袋task和i中取出爹给的两个值:任务名和任务序号。
  props:[ "task", "i" ],
  methods:{
    del_item(){
      this.$emit("del_item", this.i);
    }
  }
}
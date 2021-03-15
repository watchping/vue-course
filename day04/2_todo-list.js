var todoList={
  template:`<ul>
    <!--比如: 名为tasks兜里的爹的tasks数组照样可用于当前子组件中v-for遍历-->
    <!--如果当前todoList的子组件todoItem中继续需要todoList中的数据，也可通过:绑定语法，由当前组件放入子组件上的自定义属性中。可以放进多个自定义属性中，像多个口袋一样-->
    <!--比如：todo-item子组件主要当前组件遍历出的任务名task和任务序号i，所以在todo-item上添加两个自定义属性，绑定task和i变量的值-->
    <todo-item v-for="(task,i) of tasks" :task="task" :i="i" :key="i" @del_item="del_item"></todo-item>
  </ul>`,
  //孩子todoList组件，从爹给的名为tasks的兜里掏出爹给的tasks数组，就像使用自己的tasks数组一样使用。
  data(){
    return {
      tasks:["吃饭","睡觉","打亮亮","学习"]
    }
  },
  //props:["tasks"],
  components:{
    todoItem
  },
  methods:{
    del_item : function(i){
      this.tasks.splice(i,1);
    },
    add_item(str){
      this.tasks.push(str);
    }
  },
  created(){
    this.bus.$on("add_item",this.add_item.bind(this));
  }


}
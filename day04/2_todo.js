Vue.component("todo",{
  template:`<div>
    <h1>待办事项列表</h1>
    <!--定义自定义事件（在子组件todoAdd中触发调用），并关联处理函数-->
    <todo-add @add_item="add_item"></todo-add>

    <!--
    爹todo，通过:绑定语法，将自己data中的变量tasks，赋值给子组件todo-list的自定义属性tasks中
    定义自定义事件del_item(在子组件todoItem中触发调用)，并关联处理函数
    -->
    <todo-list :tasks="tasks" @del_item="del_item"></todo-list>
  </div>`,
  data(){
    return {
      tasks:["吃饭","睡觉","打亮亮","学习"]
    }
  },
  methods:{
    del_item : function(i){
      this.tasks.splice(i,1);
    },
    add_item(str){
      this.tasks.push(str);
    }
  },
  components:{
    todoAdd, todoList
//vue会自动将驼峰命名的组件对象名，翻译为-分割
//     ↓         ↓
//<todo-add> <todo-list>
  }//表示今后todoAdd和todoList只能在todo内使用
})
Vue.component("todo",{
  template:`<div>
    <h1>待办事项列表</h1>
    <todo-add></todo-add>
    <!--爹todo，通过:绑定语法，将自己data中的变量tasks，赋值给子组件todo-list的自定义属性tasks中-->
    <todo-list></todo-list>
  </div>`,

  components:{
    todoAdd, todoList
//vue会自动将驼峰命名的组件对象名，翻译为-分割
//     ↓         ↓
//<todo-add> <todo-list>
  }//表示今后todoAdd和todoList只能在todo内使用
})
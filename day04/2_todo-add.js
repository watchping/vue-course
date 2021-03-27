var todoAdd={
  template:`<div>
    <input type="text" v-model="item"/>
    <button @click="add_item">+</button>
  </div>`,
  data(){
    return {item:""}
  },
  props:["tasks"],//接受父组件的传值
  methods:{
    add_item(){
      this.$emit("add_item", this.item);//触发父组件自定义事件add_item。并传参
      this.item = "";
    }
  }
}

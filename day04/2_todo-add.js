var todoAdd={
  template:`<div>
    <input type="text" v-model="item"/>
    <button @click="add_item">+</button>
  </div>`,
  data(){
    return {item:""}
  },
  props:["tasks"],
  methods:{
    add_item(){
      this.bus.$emit("add_item", this.item);
    }
  }
}

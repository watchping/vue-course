<template>
  <div>
    <!--Cart.vue 购物车组件-->
    <!--(1)顶部全选复选框-->
    <div class="selectall">
      全选 <input type="checkbox" v-model="checkAll" @change="selectAll" />
    </div>
    <!--(2)购物车列表-->
    <div class="cartitem" v-for="(item, i) of list" :key="i">
      <div class="leftimgtxt">
        <input type="checkbox" v-model="item.cb" @change="changeCheckItem" />
        <!-- <div>{{ item.lname }}</div> -->
        <div>{{ item.title }}</div>
        <div style="padding-left: 12px">￥{{ item.price }}</div>
      </div>
      <mt-button @click="delItem(item.iid)">删</mt-button>
    </div>
    <!--(3)一组按钮-->
    <!--删除选中商品 清空购物车-->
    <!--商品数量-->
    <div>
      购物车商品数量<span style="color:red;">
        <!-- {{ $store.getters.getCart }} -->
        {{ count }}
      </span>
      <mt-button @click="delCheckedItems">
        删除选中商品
      </mt-button>
      <mt-button>清空购物车</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [], //购物车列表
      checkAll: false, //全选状态
    };
  },

  computed: {
    // 获取state值
    count() {
      return this.$store.state.count;
    },
  },
  created() {
    //组件创建成功后调用加载购物车函数
    this.loadMore();
  },
  methods: {
    set_count(count) {
      //分发action中的add方法
      this.$store.dispatch("set_count", count);
    },

    delCheckedItems() {
      //功能:删除选中商品
      //1:当前商品列表中长度0
      //2:提示:没有可以删除商品
      if (this.list.length == 0) {
        this.$messagebox("消息", "当前没有可删除商品");
        return;
      }
      //3:拼接商品id字符串
      //4:创建变量str
      var str = "";
      //5:创建循环遍历商品,如果当前状态等于true 将id拼接str
      for (var item of this.list) {
        if (item.cb) {
          //选中
          str += item.iid + ",";
        }
      }
      //6:提示:请选择要删除商品
      if (str.length == 0) {
        this.$messagebox("消息", "请选择需要删除商品");
        return;
      }
      //7:截取字符串 ,
      str = str.substring(0, str.length - 1);
      //8:显示确认交互框
      this.$messagebox
        .confirm("是否删除数据?"+str)
        .then((res) => {
          //9:创建变量url保存服务器程序地址
          // var url = "delm";
          let url = "/cart/delete";  //watchping  根据接口文档写调用API接口
          //10:创建变量obj多个id
          var obj = { iid: str };
          //11:发送ajax请求并且获取返回结果
          this.axios.get(url, { params: obj }).then((res) => {
            //12:重新加载商品列表
            this.loadMore();
            //13:显示提示信息
            this.$toast("删除成功");
          });
        })
        .catch((err) => {});
    },
    changeCheckItem() {
      //功能:商品前复选状修改函数
      //1:获取商品列表数组长度
      var size = this.list.length;
      //2:计算选中状态商品几个
      var sum = 0;
      for (var item of this.list) {
        //item.cb==true商品选中
        if (item.cb) sum++;
      }
      //3:如果商品选中数量与数组长度
      //  相同 全选 选中
      //  不相同 全选 清空
      if (size == sum) {
        this.checkAll = true;
      } else {
        this.checkAll = false;
      }
    },
    selectAll() {
      //功能:全选复选框
      //1:获取全选状态
      var cb = this.checkAll;
      //2:创建循环遍历商品列表
      //  将全选状态赋值商品列表项状态
      for (var item of this.list) {
        item.cb = cb;
      }
    },
    delItem(iid) {
      //功能:发送请求完成删除商品任务
      //1:获取购物车商品id
      console.log(1);
      console.log(iid);
      //2:显示交互对话框
      //防止用户误操作
      this.$messagebox
        .confirm("是否删除指定商品?")
        .then((res) => {
          //3:如果用户选择 确认
          //4:创建变量url
          // var url = "del";
          let url = "/cart/delete";
          //5:创建变量obj
          var obj = { iid };
          //6:发送请求
          this.axios.get(url, { params: obj }).then((res) => {
            //7:接收服务器返回数据
            // if (res.data.code == 1) {
            if (res.data.code == 200) {
              //8:提示删除成功
              this.$toast("删除成功");
              //9:重新加载购物车商品列表
              this.loadMore();
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    loadMore() {
      //加载购物车列表函数
      //1:创建变量url请求服务器地址
      //var url = "findcart";
      let url = "/cart/list"; //根据学子商城的API接口规范
      //2:发送ajax请求并且获取服务器
      //  返回结果
      this.axios.get(url).then((res) => {
        //console.log(1);
        console.log(res.data);

        //3:code == -2 请登录45
        if (res.data.code == 300) {
          //根据学子商城的API接口规范
          this.$toast("请登录");
          this.$router.push("/Login");
          return;
        } else {
          //4:code == 1  返回正确数据
          //获数据保存list
          //this.list = res.data.data;
          //4.1:获取服务器返回数据
          var rows = res.data.data;
          //4.2:创建循环变量数组中值
          //并且添加属性cb商品选中状态
          for (var item of rows) {
            item.cb = false;
          }
          //4.3:将新数组赋值list
          this.list = rows;
          //4.4:在模板中添加cb属性
          //4.5:在加载购物车之前清空
          //4.6:修改购物车数量vuex
          //this.$store.commit("addmCart", this.list.length);
          this.set_count(this.list.length);
        }
      });
    },
  },
};
</script>
<style scoped>
/*1:商品项目元素*/
.cartitem {
  display: flex; /*弹性布局*/
  /*子元素两端对齐*/
  justify-content: space-between;
  /*子元素垂直居中*/
  align-items: center;
  /*底部灰色边线*/
  border-bottom: 1px solid #ccc;
  /*商品之间间距*/
  margin-top: 25px;
}
/*2:左侧文字[商品名称与价格]*/
.leftimgtxt {
  display: flex; /*弹性布局*/
  align-items: center; /*垂直居中*/
  font-size: 12px;
}
/*将list显示模板... 35*/
.mint-button {
  font-size: 12px;
}
</style>

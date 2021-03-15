<template>
  <!--1:弹性布局-->
  <div class="product_app" >
    <!--2:一个商品-->
    <div class="goods-item" v-for="(item, i) of list" :key="i">
      <!--3:商品图片-->
      <!-- <img :src="'http://127.0.0.1:5050/' + item.img_url" /> -->
       <img :src="`${axios.defaults.baseURL}/${item.pic}`" />
      <!--4:商品名称-->
      <!-- <h4>{{ item.lname }}</h4> -->
      <h4>{{ item.title }}</h4>
      <!--5:商品价格-->
      <h5 class="price">￥{{ item.price }}</h5>
      <!--6:加入购物车按钮-->
      <mt-button @click="addcart(item.lid, item.title, item.price)">
        加入购物车
      </mt-button>
    </div>
    <!--7:查看购物车按钮-->
    <mt-button size="large" @click="jumpcart">
      查看购物车
    </mt-button>
    <!--8:加载更多按钮-->
    <mt-button size="large" @click="loadMore">加载更多</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [], //保存服务器返回数据
      pno: 0, //表示当前页码
      pageSize:2
    };
  },
  created() {
    //生命周期:组件创建成功
    this.loadMore();
  },
  methods: {
    jumpcart() {
      //功能:跳转购物车组件
      this.$router.push("/Cart");
    },
    // addcart(lid, lname, price) {
    addcart(lid, title, price) {
      //console.log(1);
      // console.log(lid + "_" + lname + "_" + price);
      console.log(lid + "_" + title + "_" + price);
      //1:创建变量url请求服务器程序
      // var url = "addcart";
      let url = "/cart/add";     //根据学子商城的API接口规范
      //2:创建变量obj请求服务器程序参数
      // var obj = { lid, lname, price };
      let buyCount = 1;  //添加购物车 默认数量是1
      let obj = { lid, buyCount };  //根据学子商城的API接口规范
      //3:发送ajax请求
      //this.axios.get(url, { params: obj }).then((res) => {
      this.axios.post(url, obj ).then((res) => {  //根据学子商城的API接口规范
        console.log(res.data)
        // 4:接收服务器返回结果
        // 5:-2 提示请登录 跳转登录组件
        // if (res.data.code == -2) {
        if (res.data.code == 300) {  //根据学子商城的API接口规范
          this.$toast("请登录");
          this.$router.push("/Login");
        } else {
          this.$toast("添加成功");
        }
        // 6:1  添加成
      });
    },
    loadMore() {
      //加载商品列表
      //console.log(123);
      //1:创建变量url请求服务器程序
      //var url = "product";
      let url = "/product/list";   //watchping  根据接口文档写调用API接口
      //2:创建变量obj请示服务器参数
      this.pno++;
      //var obj = { pno: this.pno };
      let obj = { pno: this.pno ,pageSize:this.pageSize};
      //3:发送请求
      this.axios.get(url, { params: obj }).then((res) => {
        console.log(res)
        //4:获取服务器返回结果
        //5:在data添加属性list
        //6:将返回数据保存list
        //问题:保存多页数据
        //解决:concat 数组拼接
        //this.list = res.data.data;
        //6.1:拼接多页数据
        var rows = this.list.concat(res.data.data);
        //6.2:赋值
        this.list = rows;
      });
    },
  },
};
</script>
<style scoped>
/*外层父元素:弹性布局*/
.product_app {
  display: flex;
  flex-wrap: wrap; /*子元素换行*/
  /*子元素两端对齐*/
  justify-content: space-between;
  padding: 4px;
}
/*一个商品*/
.goods-item {
  width: 48%; /*占用屏幕一半*/
  border: 1px solid #ccc;
  border-radius: 5px; /*圆角*/
  margin: 2px 0; /*外边距*/
  padding: 2px;
  display: flex; /*子元素弹性*/
  flex-direction: column; /*列*/
  min-height: 257px;
}
/*商品里图片*/
.goods-item img {
  width: 100%;
}
</style>

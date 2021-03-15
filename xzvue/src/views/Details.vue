<template>
    <main id="main" class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb small bg-transparent">
          <li class="breadcrumb-item"><a class="text-dark font-weight-bold small" href="#">首页</a></li>
          <li class="breadcrumb-item"><a class="text-dark font-weight-bold small" href="#">学习用品</a></li>
          <li class="breadcrumb-item text-dark font-weight-bold small active" aria-current="page">笔记本电脑</li>
        </ol>
      </nav>
      <div class="container mb-5">
        <div class="row pr-3">
          <div id="preview" class="col pr-0">
            <div class="card bg-transparent mr-5 position-absolute">
              <img class="card-img-top" :src="`${pics[i].md}`" alt="Card image cap">
              <div id="mask" class="position-absolute" :class="{'d-none':hide}"></div>
              <div id="super-mask" class="position-absolute"></div>
              <div id="div-lg" class="position-absolute d-none" :style="{'background-image':`url(/${pics[i].lg})`}"></div>

            </div>
            <div class="card-body p-0 text-center">
                <img src="/img/product_detail/hover-prev.png" class="btn float-left btn-light border-0 p-1 pt-4 pb-4 disabled">
                <div class="d-inline-block pt-2 mx-0 m-auto">
                  <!-- <ul class="list-unstyled mb-0"> -->
                  <ul class="list-unstyled mb-0" style="width: 434px; margin-left:-62px">
                    <li v-for="(p,i) of pics" :key="i" class="float-left p-1">
                      <img :src="`/${p.sm}`" data-i="i">
                    </li>
                  </ul>
                </div>
                <img src="/img/product_detail/hover-next.png" class="btn float-right btn-light border-0 p-1 pt-4 pb-4">
            </div>
          </div>
          <div id="details" class="col pl-0">
            <h6 class="font-weight-bold">{{product.title}}
            </h6>
            <h6>
              <a class="small text-dark font-weight-bold" href="javascript:;">{{product.subtitle}}</a>
            </h6>
            <div class="alert alert-secondary small" role="alert">
              <div>
                <span>学员售价：</span>
                <h2 class="d-inline text-primary font-weight-bold">¥{{product.price.toFixed(2)}}</h2>
              </div>
              <div>
                <span>服务承诺：</span>
                <span>{{product.promise}}</span>
              </div>
            </div>
            <!-- 客服 -->
            <p class="mb-1">
              <span class="small">客服：</span>
              <span class="small">联系客服</span>
              <img class="mb-3" src="/img/product_detail/kefuf.gif">
            </p>
            <!-- 规格 -->
            <div>
              <div class="float-left small">规格：</div>
              <div class="float-left w-75">
                <router-link v-for="(sp,i) of specs" :key="i" class="btn btn-sm btn-outline-secondary" :class="{activate:sp.lid==lid}" :to="`/product/detail/${sp.lid}`">{{sp.spec}}</router-link>
              </div>
              <div class="clearfix"></div>
            </div>
            <!-- 数量 -->
            <div class="mt-2">
              <div class="float-left small">数量：</div>
              <div class="input-group mb-3 w-25">
                <div class="input-group-prepend">
                  <button class="btn btn-outline-secondary p-1" type="button">-</button>
                </div>
                <input type="text" value="1" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"/>
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary p-1" type="button">+</button>
                </div>
              </div>
              <div class="clearfix"></div>
            </div>
            <!-- 购买部分 -->
            <div>
              <a class="btn pt-3 pb-2 pl-5 pr-5" href="javascript:;"><h5>立即购买</h5></a>
              <a class="btn btn-primary pt-3" href="javascript:;">
                <h5><img src="/img/product_detail/product_detail_img7.png" alt=""> 加入购物车</h5>
              </a>
              <a class="btn btn-primary pt-1 pb-1 collection" href="javascript:;">
                <img src="/img/product_detail/product_detail_img6.png">
                <br>
                收藏
              </a>
            </div>
          </div>
        </div>
      </div>
      <h3>==============</h3>

    </main>
</template>
<script>
import {getDetails} from "../assets/js/apis/details.js"
export default {
  props:["lid"],//自动获地址栏传来的lid参数值
  data(){
    return {
      product:{price:0},//防止ajax请求还未返回时，toFixed()报错
      specs:[],

      //因为页面上需要加载一组图片，所以data中需要有一个保存所有图片的数组
      pics:[
        {md:"",lg:""}
      ],

      //因为小图片列表左右移动核心是点击的次数，所以data中需要用times变量记录点击了几次
      times:0,

      //因为中图片和大图片具体使用哪一张图片和选中的第几张的下标有直接关系
      //比如: 鼠标进入ul下第2张小图片[1]
      // 则中图片采用pics中[1]位置的图片的md版本
      // 大图片采用pics中[1]位置的图片的lg版本
      //比如: 鼠标进入ul下第2张小图片[2]
      // 则中图片采用pics中[2]位置的图片的md版本
      // 大图片采用pics中[2]位置的图片的lg版本
      //所以只需要一个变量i，就可控制中图片和大图片
      i:0,

      //因为需要同时动态控制小遮罩层和大图片的显示隐藏，所以需要一个变量
      hide:true,

      //因为要修改mask的位置，所以为mask绑定style对象
      maskStyle:{
        left:"0",
        top:"0"
      }
    }
  },
  methods:{
    move(e){
      var left=e.offsetX-88;
      var top=e.offsetY-88;
      if(left<0) left=0; else if(left>216) left=216;
      if(top<0) top=0; else if(top>216) top=216;
      this.maskStyle={
        left:left+"px",
        top:top+"px"
      }
    },
    toggle(){
      this.hide=!this.hide;
    },
    changei(e){
      //e.target代替this
      //只允许img元素触发事件
      if(e.target.nodeName=="IMG"){
        this.i=e.target.dataset.i;
      }
    },
    moveLeft(){
      if(this.times<this.pics.length-4){
        this.times++;
      }
    },
    moveRight(){
      if(this.times!=0){
        this.times--;
      }
    },
    myload(){//因为这个请求要反复调用，所以封装为一个方法。
    //   this.axios.get("/details",{
    //     params:{ lid: this.lid }
    //   })
      getDetails(this.lid).then(result=>{
        console.log(result);
        let {product, specs, pics}=result;
        this.product=product;
        this.specs=specs;
        this.pics=pics;//当前商品的图片列表！
      })
    }
  },
  created(){
    this.myload();
  },
  watch:{
    lid(){
      this.myload();
    }
  }
}
</script>
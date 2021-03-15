<template>
  <div class="page-tabbar">
    <!--(3)调用导航条 图片-->
    <titlebar
      leftTitle="微信(100)"
      :rightFirstImg="require('@/assets/ic_search.png')"
      :rightSecondImg="require('@/assets/ic_add.png')"
      :add="myadd"
      :search="mysearch"
    ></titlebar>

    <!-- <div class="page-wrap"> -->
    <!-- 调整布局
      <div style="margin-top: 48px;"></div> -->
    <!--切换面板-->
    <mt-tab-container v-model="selected" class="page-wrap">
      <mt-tab-container-item id="message">
        <messagelist> </messagelist>
      </mt-tab-container-item>
      <mt-tab-container-item id="contact">
        <mt-cell v-for="n in 21" :key="n" :title="`tab-container contact ${n}`"></mt-cell>
      </mt-tab-container-item>

      <mt-tab-container-item id="find">
        <mt-cell title="开关状态">

        <mt-switch v-model="openValue" @change="changeSwitch"></mt-switch>

        </mt-cell>
        find find find find find find find find find
      </mt-tab-container-item>

      <mt-tab-container-item id="me">
        me me me me  me me me me  me me me me  me me me me  me me me me  me me me me  me me me me  me me me me
      </mt-tab-container-item>
    </mt-tab-container>
    <!-- </div> -->
    <!--底部导航条 fixed 固定底部-->
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="message" @click.native="changeState(0)">
        <tabbaricon
          :focused="currentIndex[0].iSelect"
          :selectedImage="require('@/assets/ic_weixin_selected.png')"
          :normalImage="require('@/assets/ic_weixin_normal.png')"
        ></tabbaricon>
        微信
      </mt-tab-item>
      <mt-tab-item id="contact" @click.native="changeState(1)">
        <tabbaricon
          :focused="currentIndex[1].iSelect"
          :selectedImage="require('@/assets/ic_contacts_selected.png')"
          :normalImage="require('@/assets/ic_contacts_normal.png')"
        ></tabbaricon>
        通讯录
      </mt-tab-item>
      <mt-tab-item id="find" @click.native="changeState(2)">
        <tabbaricon
          :focused="currentIndex[2].iSelect"
          :selectedImage="require('@/assets/ic_find_selected.png')"
          :normalImage="require('@/assets/ic_find_normal.png')"
        ></tabbaricon>
        发现
      </mt-tab-item>
      <mt-tab-item id="me" @click.native="changeState(3)">
        <tabbaricon
          :focused="currentIndex[3].iSelect"
          :selectedImage="require('@/assets/ic_me_selected.png')"
          :normalImage="require('@/assets/ic_me_normal.png')"
        ></tabbaricon>
        我
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
//(1)引入顶部导航条
import TitleBar from "./common/TitleBar.vue";
//(1.1)引入消息列表组件
import MessageList from "./common/MessageList.vue";
//(1.2)引入底部图片组件
import TabBarIcon from "./common/TabbarIcon.vue";

export default {
  data() {
    return {
      selected: "message", //面板id
      //创建数组保存tabbar
      //图片状态
      currentIndex: [
        { iSelect: true }, //第一个按钮状态
        { iSelect: false }, //第二个
        { iSelect: false }, //第三个
        { iSelect: false }, //第四个
      ],

      openValue:true,
    };
  },
  //(2)注册顶部导航条
  //(2.1)注册多条消息组件
  //(2.2)注册底部按钮图片
  components: {
    titlebar: TitleBar,
    messagelist: MessageList,
    tabbaricon: TabBarIcon,
  },
  methods: {
    //父组件 声明两个函数
    mysearch() {
      console.log("搜索");
    },
    myadd() {
      console.log("添加");
    },
    changeState(idx) {
      //功能:为底部tabbar按钮绑定事件
      //    点击
      //功能:修改对应按钮状态
      //1:创建循环遍历所有按钮
      var size = this.currentIndex.length;
      for (var i = 0; i < size; i++) {
        //2:判断如果当前下标与idx相等
        if (i == idx) {
          //3:当前按钮状态true
          this.currentIndex[i].iSelect = true;
        } else {
          //4:其它按钮状态false
          this.currentIndex[i].iSelect = false;
        }
      }
    },

    changeSwitch(){
      console.log(`changeSwitch ${this.openValue}`)
    },
  },
};
</script>
<style scoped>
/*1:覆盖tabbar默认文字颜色29*/
.mint-tabbar > .mint-tab-item {
  color: #999999;
}
/*2:覆盖tabbar选中文字颜色*/
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: transparent;
  color: #45c018;
}
/*最外层的父元素*/
.page-tabbar {
  overflow: hidden; /*溢出就隐藏*/
}
/*内层元素 */
.page-wrap {
  overflow: auto; /**数据多出现滚动条 */
  padding-bottom: 60px; /**底部导航空间 */
  padding-top: 48px; /**底部导航空间 */
}
</style>

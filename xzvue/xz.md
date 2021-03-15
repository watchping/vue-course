练习2：创建2个页面（Index、Details)和一个页头文件(MyHeader)

1在src文件夹/views文件夹中
-删除现有2个文件：Home.vue.About.vue
-创建2个文件：Index.vue ，Details.vue

2.在Index.vue ，Details.vue中分别象征性的写入一个标题，标记当前是哪个页面
    <h1>这里是XXXX页面</h1>

3.在src文件夹中/router文件夹/index.js中配置Index.vue和Details.vue路由
- Index.vue默认加载
- Detials.vue异步延迟加载，且必须传入参数lid

4页头文件(MyHeader)做成全局组件

5.修改src文件夹中/App.vue中<router-view>上放的导航菜单中的路径

6.测试


练习3：把旧版学子商场的JQuery版的首页移植到vue脚手架中（用到public.zip,
1、将不是我们自己编写的文件（代码、图片)复制到public文件夹下对应位置
   将来编译项目时，放在public下的内容都不会被编译而原样输出

2、在唯一完成的index.html页面顶部和旧项目一样引入这些不变的css和js

3、首页内容移植
（1）复制页面中主要内容部分的HTML到src/view/index.vue中的template中
(2 复制就的index.css 到Index.vue的<style
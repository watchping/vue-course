第四阶段课程 ElementUI_v1


视频1-移动端组件库概述-HTML5的新特性-轻应用混编
```
-vue移动端UI组件库和一个项目（学子商城) 6day
1.1移动端的组件库
为什么要学UI组件库  比如日历、打分组件  自己写比较耗时
组件库的作用：提高开发效率
组件库种类
(1)PC端组件库
饿了么团队 elementUI  打开官网演示概要 https://element.eleme.cn/#/zh-CN
(2)移动端组件库（这个课程主要介绍）
-饿了么团队mintui 打开官网演示概要 http://mint-ui.github.io/#!/zh-cn(课程用这个示例的)
-有赞团队 vant[vue移动端项目/小程序项目] https://youzan.github.io/vant-weapp/#/intro（微信小程序用这个示例，适合商城类的项目）
-滴滴团队 cube-ui 官网 https://didi.github.io/cube-ui/#/zh-CN/

1.2 HTML5的新特性(网页绘图/视频/webstocket) 7day
#特效(弹幕;图标;飘雪花;优惠;大转盘)
#网页游戏

1.3微信公众平台（小程序(vant);订阅号-机器人聊天） 6day
1.4轻应用混编
混编：你开发一套vue项目 -> 混编工具 -> 打包8个项目[android app;ios app;小程序;]
```

视频2 项目脚手架配置和使用
```
2.1 vue UI组件库-下载安装配置UI组件库
-下载脚手架vue_app_00_null.zip压缩包
#自己写项目的时候，自己创建一个新的脚手架-(创建 | 打包)  link文件中有下载地址
- 启动脚手架
(1)启动位置 vue_app_00_null/npm run serve
(2)打开浏览器
```

视频3 mint-ui组件库安装和配置
```
2.2mintUI组件库下载和配置
-下载组件库
在脚手架根目录下执行安装命令  npm i mint-ui --save
#i install 安装组件
#--save 保存组件名称与版本至package.json文件中
-配置组件库  main.js #配置第三方组件库
(1)将mint-ui组件库中的所有组件引入到当前项目中
import MintUI from "mint-ui"
(2)单独引入mint-ui组件中样式文件
import "mint-ui/lib/style.css"
(3)将mint-ui组件库注册Vue对象
Vue.use(MintUI)
```

视频4 mint-ui组件库的使用-短消息提示框
```
2.3 使用mint-ui组件库中组件-短消息提示框
功能：显示消息框，其中有一段文字，默认3秒后隐藏
作用：提示用户消息（删除成功；添加成功；添加失败
简洁语法：this.$toast("消息框中要显示文字")
标准语法：this.$toast({})

参数	说明	类型	可选值	默认值
message	文本内容	String
position	Toast 的位置	String	'top'  'bottom'   'middle'	'middle'
duration	持续时间（毫秒），若为 -1 则不会自动关闭	Number		3000
iconClass   指定图标样式名
任务:创建空组件
(1)创建空组件src/components/web1910/exam/Exam01.vue
(2)为空组件指定访问路径 router.js   path:"/Exam01"
(3)通过浏览器地址栏 http://127.0.0.1:8080/#/Exam01

完善Exam01.vue
<button @click="openToast">测试提示框</button>
openToast(){
    this.$toast({
        message:"添加成功",  //显示文字
        position:"top",//文字位置
        //iconClass："iconfont icon-diannao" //指定字体图标 电脑图标  后面会实现的
    })
}
```

视频5 mint-ui组件库-图标字体的使用
```
问题：如何在消息框中显示图标呢？mint-ui组件库提供的图标外观不精美，不满足用户需求，怎么办呢
解决：专业图标网站 www.iconfont.cn  下载图标
下载图标方式
方式一：直接下载图标对应的图片（建议：使用少量图标）
方式二：将多个图标保存为字体图标文件 ttf（建议：使用大量图标）
点击图标对应购物车按钮（选择图标） #纯色图标
下载代码，生成download.zip (css;ttf)  #ttf字体图标文件

(1)在脚手架src目录中新建文件夹font   #保存图标字体
将下载的download.zip内容复制到font文件夹中
(2)在main.js中引入图标字体样式文件iconfont.css
全局引入图标字体，可以在任何组件中使用
(3)在指定组件中调用图标
toast中的参数 iconClass:"字体class  指定图标class名"
比如  iconClass:"iconfont icon-diannao"
# 如何修改图标大小，在iconfont.css文件第12行fontsize:12px，修改对应的值即可。
```

视频6 mint-ui组件库-确认框的使用
```
功能：显示一个确认框，只有用户操作后隐藏
#重要性高一些
作用：是否删除指定数据；用户名格式有误
(1)this.$messagebox("标题","内容");
(2)this.$messagebox.confirm("确认消息")
        .then(res=>{})   当用户选择了确认按钮回调函数
        .catch(err=>{})   当用户选择取消按钮回调函数

(3)this.$messagebox.prompt("输入消息文件")
    .then(value=>{})   #当用户输入成功回调函数
    .catch(err=>{})  #输入失败

使用时：
<button @click="openAlter">显示确认框</button>

openAlter(){
    this.$messagebox("消息","用户名格式不正确");
}
或者：
//-确认框
this.$messagebox.confirm("是否删除指定数据")
        .then(res=>{    //当用户选择了确认按钮回调函数
            console.log("确认")
        })
        .catch(err=>{
            console.log("取消")
        })
//-输出框
this.$messagebox.prompt("")
    .then(value=>{
        console.log(value);
    })
    .catch(err=>{
        console.log(err);
    })
```

视频7 mint-ui组件库-表单
```
(1)	输入框:样式有兼容性问题
<mt-field></mt-field>
label:左侧标签
type:text password ...
attr:原生属性
任务:
#创建组件 src/components/web1910/exam/Exam02.vue
#为组件指定访问路径 router.js  /Exam02
# http://127.0.0.1:8080/#/Exam02
(2)开关组件:

(3)单选列表
```

作业:
预习
1:mint-ui 面板mt-tab-container;底部导航条Tabbar
2:仿微信消息列表


视频8 MintUI-08-mint-ui组件库-输入框-课后总结


视频9 MintUI-09-mint-ui课前总结-安装-消息框-表单

视频10 MintUI-10-mint-ui组件库-表单开关组件-单选列表  35分钟
2.1 mint-ui组件库-表单
- 表单开关组件--（原生html不提供）
<mt-switch v-model="val2">标题内容</mt-switch>
val2:值为boolean
        true打开
        false关闭状态
change:修改事件

- 表单中的单选列表
标准语法：
<mt-radio></mt-radio>
属性：
title:标题
:options=""  列表选项[{label,value},{}]
v-model=""   绑定变量（选中值）
任务：
- 创建组件  src/components/mintui_exam/Exam03.vue
- 为组件配置路由  /Exam03

视频12 MintUI-12-mint-ui课后总结-表单开关-单选列表-面板导航

视频13 MintUI-13-mint-ui组件库-底部面板导航  35分钟
2.2 mint-ui组件库-面板底部导航条   70分钟
- 面板  几个面板切换显示内容（面板）  底部有个导航条
(1)面板语法
#多个面板显示不同内容，同一时刻只能显示一个面板的内容
<mt-tab-container v-model="active">      #面板父元素
    <mt-tab-container-item id="tab1"> #面板1
        面板一：(生鲜)
    </mt-tab-container-item>
    <mt-tab-container-item id="tab2"> #面板2
        面板二：(酒)
    </mt-tab-container-item>
    <mt-tab-container-item id="tab3"> #面板3
        面板三：(化妆品)
    </mt-tab-container-item>
    ...
</mt-tab-container>
注意事项：
- 面板中的id与原生标签id不同，值需要保证在当前组件中id不重复即可
- 变量active保存某个面板id，则显示某个面板
比如：active="tab3" 则显示化妆品面板3
任务：
创建组件Exam04
配置组件路由
(2)底部导航条
(1)下载指定图片 81*81  01.png   02.png   03.png
(2)创建tabbar底部导航条
<mt-tabbar v-model="active">  #父元素
    <mt-tab-item id="tab1">           #按钮
        <img src=""  />     #按钮中的图片
            文字            #按钮中的文字
    </mt-tab-item>
</mt-tabbar>
说明：
#当用户点击某个按钮时，将当前按钮id赋值给active变量
#img元素添加属性slot="icon" #将图片元素添加上方div元素


视频13 MintUI-13-mint-ui组件库-微信消息列表-功能分析-父组件传数据给子组件   35分钟
2.3 mint-ui组件库-完成微信消息列表（重点）
界面内容构成如下，详见微信打开后的首页
消息列表标题
消息列表
底部导航
3.2组件间数据传递（父组件传子组件）
父组件：负责创建数据并传递子组件  #需要路径
子组件：负责显示   #不需要指定路径
比如：
- Sub05.vue子组件负责显示数据
<template>
    <div>{{msg}}</div>

</template>
<script>
export default{
    props:{
        msg:{default:""}    #声明接收父组件数据msg
    }
}
</script>

- Fa06.vue父组件创建数据并传递子组件
(1)引入子组件 import Sub05 from "./Sub05.vue"
(2)注册子组件
    components:{Sub05}
(3)在模板中调用子组件
<template>
    <div>
        <sub05 :msg="测试数据"></sub05>
    </div>
</template>

完成这2个组件的代码


视频14 MintUI-14-mint-ui组件库-微信消息列表-详细功能分析-Home组件-顶部组件概要   36分钟
3.3微信消息列表的功能详细分析
-第一部分：顶部标题（子组件)
- 第二部分：消息列表（一条+多条+面板）
- 第三部分:底部导航条（tabbar）图片切换 + 文字颜色

3.4目录结构
mintui_exam/weixin/
                    common  文件夹：所有字组件
                    json    文件夹：模拟数据
                    Home.vue  父组件  /Home

3.5顶部标题子组件
左侧标题（微信) 右侧2图片（放大镜+加号）
-分析功能：子组件TitleBar.vue
- 分析
    - 左侧文字  leftTitle
    - 右侧2图片  rightFirstImg  rightSecondImg
- 创建子组件 weixin/common/TitleBar.vue
- 此组件显示数据
- Home.vue 负责创建数据并调用子组件

完成Hone组件、顶部组件TitleBar的代码....

视频15 MintUI-15-mint-ui组件库-微信消息列表-Home组件-顶部组件的实现  62分钟
移动端页面布局
(1)弹性布局：移动端常用布局方法
(2)rem:移动端常用布局设计方式

子组件负责：显示数据（输出;样式)
父组件负责：创建数据并传递给子组件

3.6 清空项目页中空白区域

视频16 MintUI-15-mint-ui组件库-微信消息列表-作业(消息列表)-课后总结
作业：
(1)创建消息列表组件
(2)创建一条消息 Message.vue
- 左侧图片 imgurl
- 左侧标题 title subtitle
- 右侧时间 sendtime
(3)多条消息列表组件 MessageList.vue
- 负责创建数据
- 将数据传递子组件



# 消息列表组件-功能分析-组件概要
==========================================================
组件库-微信消息列表-消息列表组件
1.复习昨天的重点
2.今天的目标
2.1微信消息列表-消息列表与底部导航条
(1)创建一条消息子组件
(2)创建子组件 common/Message.vue
(3)接收消息
    左侧图片    imgurl
    左侧标题    titlesubtitle
    右侧时间    sendtime
完成子组件Message.vue的概要

2.2多条消息组件 common/MessageList.vue消息列表
-负责加载模拟数据 json/messagelist.json
-创建循环遍历数据并且传递给Message.vue
#临时将消息列表组件转全局组件

完成组件MessageList.vue框架
引入Message.vue

=============================
# 消息列表组件-消息子组件的实现
完善Message.vue的设计
    内容布局、样式设计
    接收数据:图片、标题、子标题、发送时间

=================================
# 消息列表组件-消息列表组件的实现及装配
完善组件MessageList.vue
-负责加载模拟数据 json/messagelist.json
    查看模拟数据
        {"data":[{},{}]}
    加载json模拟数据
    import messagejson from "../json/messagelist.json"
    #import将json数据直接转换为js对象

    定义组件数据对象
    data(){
    retun {
        rows:messagejson.data
    }
}

-创建循环遍历数据并且传递值给Message.vue

组件MessageList的样式设计
组件MessageList与Home组件的装配
    Home组件添加mint-ui的面板组件


# Home组件的样式和底部导航按钮
Home组件的样式
2.4 微信消息列表-底部导航条
导航按钮与标准组件库中的导航按钮效果是不一样的，所以需要定制导航按钮
(1)Mint-ui导航条功能有局限，图片时不能切换的
解决：创建一个子组件，显示按钮上方的图片，并且实现图片的切换(绿色/灰色)
- common/TabbarIcon.vue
- 核心代码
    <img src="focused?selectedImg:normalImg"/>
    接收3个数据
    - 当前按钮是否被选中 focused:true
    - 选中的图片 selectedImg #绿色图片
    - 默认的图片 normalImg  # 灰色图片
实现TabbarIcon.vue
    内容显示样式  接收的数据对象
Home组件中使用TabbarIcon组件-添加底部导航条
引入子组件、注册子组件

# 导航按钮文字颜色及图片切换

(2)Mint-ui导航条-按钮中文字蓝色-实际是绿色文字的
解决办法：覆盖原组件中的样式
- 查找原先组件中
.mint-tabbar > .mint-tab-item.is-selected{color：#45c018}
- 默认蓝色文字选中器
.mint-tabbar > .mint-tab-item{color：#999999}

2.5 为按钮绑定点击事件，完成图片切换
#当点击选中图片，图片显示绿色，其他按钮图片灰色
-为按钮元素绑定点击事件<mt-tab-item>
- 任务：完成为按钮绑定点击事件
问题：为按钮绑定点击事件失效
解决：
    问题原因是<mt-tab-item>按钮组件不支持点击事件
    但可以添加事件属性 native使用原生组件的点击事件
    用法：<mt-tab-item #click.native="changeState(0)">


# 微信消息列表-总结




3.X学子商城-用户登录（重点）

# 学子商城-用户登录-分析
vue ui组件库学子商城完成功能：
- 用户登录
- 商品列表
- 将商品添加到购物车
- 购物车
3.1学子商城用户登录功能
(1)流程分析
前端 - 后端 （ node.js - MySQL ）
(2)功能分析
- 用户打开网页访问登录组件输入用户名和密码
- 用户名和密码格式错误：3-12位
    提示：  用户名格式错误
            密码格式错误
- 用户名和密码不正确：
    提示：用户名和密码不正确
- 用户名和密码正确  跳转商品列表组件
(3)分析代码实现-核心内容
- 创建一个用户登录表，保存合法用户名和密码
    有一张用户表：xz_user
    -用户登录表 xz_login 表名
    -id 记录编号 INT PRIMARY KEY AUTO_INCREMENT
    -uname  用户名  VARCHAR(50)
    -upwd  用户密码 VARCHAR(30)
    #密码数据特殊，此数据需要加密后才能保存数据库中
    #加密密码原因是防止内部工作人员泄密
    #mysql有一个加密函数md5()函数
- 创建服务器程序 app.js中间件
- 脚手架 Login.vue

作业：
1.学子商城脚手架添加组件 Login.vue
2.加载axiOS
3.实现用户登录


# 学子商城-用户登录-课前复习-数据库表-加密  22分26
2.2参与完成此功能的所有程序
- 数据库表 xz_login
- node.js 服务器程序 app.js
- Login.vue 脚手架创建组件

2.3 创建数据库表（保存合法的用户账户信息）
数据库有三个特点：所以将合法账户信息保存在此处
- 海量存储数据：mysql单张表最佳状态500w条记录
- 告诉查询：0.2s
- 安全性比较高

2.4分析表结构 xz_login
- id 行编号 INT 主键
- uname 用户名  VARCHAR(50)
- upwd   用户密码    VARCHAR(32)
#密码特殊数据:必须加密后保存为了防止工作人员泄密

2.5加密
- md5单向加密算法
- 使用方法：md5("123456")
- 高级别安全建议
(1)多次循环加密  如md5(md5("123456"))
(2)加密密码规则（最有效） 8位以上，包含小写、大写、数字、字母、特殊字符
例如：1_bc_-!00A

# 学子商城-项目运行环境介绍(目录结构-XAMPP-NODE安装-第三方模块)

2.6服务器端目录结构
vue_app_00_null     脚手架
vue_server_00   服务器程序
    public  静态资源(图片;视频;音频;...)
    app.js  服务器程序
    db.sql  建数据库及表结构用的所有sql语句
    node_modules    #第三方模块，此目录和脚手架node_modules完全不同，不要混合放

2.7 安装xampp软件
xampp软件包(mysql;php;apache;...)
- 去官网
    https://www.apachefriends.org/index.html
- windows

- mac(!!!)
    https://sourceforge.net/projects/xampp/files/
    5.6.3   5.02   2015低

2.8安装nodejs软件
- node.js淘宝镜像
    https://npm.taobao.org/mirrors/node/
    http://nodejs.org/dist/v9.10.0/
- windows
    node-v9.10.0-x64.msi    #64系统
    node-v9.10.0-x86.msi    #32系统
- mac
    node-v9.10.0.pkg    #mac系统
- 注意版本 #8.10最低要求
    >node -v
    v8.11.4

2.9创建服务器目录-下载安装第三方模块
- express   web服务器
- express-session   session对象
- mysql     mysql驱动程序
- cors      跨域模块

- express-session  忽略..后续讲..
- mysql     配置连接池
    let pool=mysql.createPool({
        host:"127.0.0.1",
        user:"root",
        password:"",
        database:"xz",
        port:3306
    })
- cors      跨域
    脚手架8080      node服务器(安装跨域模块) 4000
    #以上脚手架发送请求给node服务器出错（跨域）
    #解决办法：跨域模块
    #跨域模块在服务器端运行：(允许跨域访问-脚手架)列表
    cors({
        origin:["http://127.0.0.1:8080","http://localhost:8080"]
    })

# 学子商城-项目运行环境演示实操  35分47
实际操作完成以上步骤....


# 学子商城-用户登录-node服务端实现分析  17分31
2.10分析第一个功能-用户登录服务器  36:17
- 回忆用户登录时的流程
- node描述功能
(1)获取脚手架提供用户名和密码
(2)将用户名和密码拼接sql语句查询是否匹配合法记录
(3)将结果返回脚手架 登录成功 登录失败

- 获取脚手架提供用户名和密码
GET /login?uname=tom&upwd=123
req.query.uname //接收脚手架用户名
req.query.upwd  //接收脚手架用户密码

- 将用户名和密码拼接sql语句查询是否匹配合法记录
#通用套路  查询;查找;搜索;获取...SELECT
SELECT id FROM xz_login WHERE uname =? AND upwd=md5(?)

- 将结果返回脚手架 登录成功 登录失败
pool.query(sql,[uname,upwd]),(err,result)=>{
    if(err) throw err;//程序出现严重错误，停止执行跑出错误对象
    result 查询sql结果数组
    result.length==0 查询失败 用户名或密码错误
    result.length!=0查询成功  登录成功
})
res.send({code:1,msg:"登录成功"})
res.send({code:-1,msg:"用户名或密码错误"})


# 学子商城1-2-用户登录-node服务端实现及调试  23分
00:00复习回顾
03:22代码实现  在app.js中 API接口 /login
    功能一：用户登录验证

11:00 Node服务器的启动、服务程序运行时常见错误分析

# 学子商城1-2-用户登录-脚手架项目-Login组件-输入格式验证
00:00 回顾
00:02 脚手架
- 脚手架工具 vue-cli 只需要全局安装一次即可
- vue-cli生成一个脚手架项目vue_app_00_null #本机有node即可使用
- vue_app_00_null使用项目

2.11脚手架Login.vue
- 创建组件 components/xz/Login.vue 指定路径 /login
- 添加二个输入框
- 添加一个登录按钮
完成脚手架组件Login.vue 界面设计  界面测试

- 组件Login.vue中login方法的实现
    输入格式验证
    测试
    //功能:完成用户登录验证方法
    //*1:创建正则表达式 字母数字3~12
    //*2:获取用户名和密码
    //*3:验证用户名如果格式不正确
    //*4:验证密码如果格式不正确
    //*5:创建url请求服务器程序地址
    //*6:创建obj请求时数据
    //*7:发送ajax请求
    //*8:获取服务器返回信息
    //*9:如果服务器返回-1 提示32
    //10:跳转商品列表组件 /Product







# 学子商城1-2-用户登录-Login组件-Axios异步调用
00:00 知识讲解
2.12发送ajax请求 [脚手架8080 -> 服务器 4000]
- 解决问题使用ajax模块
- ajax解决方式
#原生 [原生ajax流程]
#jquery
#axios ajax模块
#request

使用axiso
- 下载第三方ajax模块  npm i axios  --save
- 在main.js全局配置  [在所有组件中均可以使用Axios]
    (1)将模块引入当前项目中  import axios from "axios"
    (2)配置访问服务器基础地质  axios.defaults.baseURL="http://127.0.0.1:4000/"
    (3)发送请求保存session信息  30分钟后面会讲到session的
        axios.defaults.withCredentials=true
    (4)将Axios对象注册vue   Vue.prototype.axios = axios
- 使用
    示例：请求用户登录
    this.axios.get("login")
14:19代码编写演示，在main.js中...
22:44代码编写演示，在Login.vue中...


# 学子商城1-2-用户登录-课后总结
00:42 思维导图总结
11:30 作业
- 用户登录自己完成实现
    app.js Login.Vue
- 商品列表
    分页显示
    app.js  Product.Vue
14:00 Session知识介绍
    Session生活中的示例
    Session和Login

# 学子商城2-1-1用户登录-课前复习-session
00:00回顾
05:10用户登录流程及功能
06:20Session对象
(1)Session对象保存在服务器端的，保存数据
    用户登录凭证
    用户权限
(2)Session对象生命周期
    创建用户打开浏览器访问服务器时：Session创建
    中间用户可以通过浏览器访问服务器多个程序：Session工作
    当用户关闭浏览器Session对象销毁或服务器的程序停止工作：Session对象销毁

(3)Session对象下载配置和使用
-Session对象下载 第三方模块
在服务端程序下载模块 express-session # npm i express-session --save
-app.js 配置session对象
server.use(session({}))
    --secret：安全字符串session对象加密数据
    --resave:true   每次请求更新服务器数据
    --saveUninitialized 保存初始化数据

24:20如何在服务器端使用
(1)用户登录成功后将登录凭证保存在Session对象中
req.session.uid=1;//将用户id作为凭证保存在session对象中
(2)当用户访问商品列表时获取session对象中uid
var uid= req.session.uid
if(!uid){res.send({code:-2,msg:"请求登录"});return;}

28:40实现代码编写演示，服务器端 app.js




# 学子商城2-1-2商品列表-分析-服务端实现-客户端组件概要
00:38
2.2学子商城-商品列表
商城网站图片保存在哪里
网站图片特殊要求
-版权   服务器端    public
-数量巨大   服务器端    public

服务器程序

数据库
-(1)商品表 xz_laptop  添加一列pic保存商品指定图片
-(2)更新xz_laptop
lid = 1 01.jpg
lid >1 02.jpg
-(3)截取2张图片 01.jpg 02.jpg 将图片保存在public目录

16：50 数据库sql实现代码演示

23:52
中间人node
-请求方式 请求地址 GET /product
-参数 页码2 pno 一页几行20  pageSize
-sql    SELECT lid,lname,price,pic FROM xz_laptop LIMIT ?,?
    ?起始行 var offset =(pno-1)*pageSize;
    ?一页显示几行  pageSize
-将数据组装什么样格式返回脚手架？
    res.send({code:1,msg:"查询成功",data:result})

29:30 功能实现代码演示，在app.js中...

45:48
脚手架
-创建组件  xz/Product.vue   分配路径 /Product
-设计组件布局和样式
-组件创建成功显示第一页数据
-点击按钮显示下一页数据

51:00演示创建组件Product.vue 分配路径
55:00演示创建组件标签，在Product.vue中




# 学子商城2-2-1商品列表-加载首页
00:00回顾
04:30演示创建组件样式，在Product.vue中
17:00组件创建成功显示第一页数据
    created(){} 当组件创建成功后立即调用此函数
    loadMore(){}发送ajax请求获取商品列表

19:52演示实现代码，在Product.vue中
    要记住API接口返回的数据及格式


# 学子商城2-2-2商品列表-加载更多
01:40实现加载更多功能
-点击按钮显示下一页数据
(1)点击加载更多按钮完成此操作-vue ui
<mt-button @click="loadMore">加载更多</mt-button>
(2)向上滑动完成下一页加载-小程序

08:00演示实现代码，在Product.vue中...
    页码++
    商品列表数据拼接

21:00总结回顾



# 学子商城2-2-3将商品添加至购物车-功能分析
00:00回顾
02:00知识讲解-将商品添加到购物车
08:30#node.js程序（异步执行)
-同步运行
    java;php;.net;c++
    优点：有序
    缺点：效率低
    电话
-异步运行
    node.js
    优点:高效
    缺点：无序（难控制)
    微信
16:50功能分析-将商品添加到购物车
(1)功能分析
#用户比较喜欢某个商品打算购买，将商品添加到购物车
#购物车数据可以保存在哪里？
-客户端浏览器cookie  京东
-服务器端数据库 xz_cart
-服务器端文件 cart.txt

(2)#node.js程序（异步执行)

(3)完成添加购物车功能
-数据库
xz_cart [id;lid;price;lname;count;uid]
id  数据编号
lid 产品编号
price   价格
lname  商品名称
count   购买此商品的数量
uid 用户编号，谁买的uid

-中间人程序
GET /addcart  lid,price,lname
xz_cart [id;lid;price;lname;count;uid]
sql 语法：
#查询用户是否购买过此商品
SELECT id FROM xz_cart WHERE uid=? AND lid=?
#将用户喜欢商品添加到购物车表
INSERT INTO xz_cart VALUES(null,?,?,?,1,?);
#更新购物车中某件商品数量
UPDATE xz_cart SET count = count + 1 WHERE id=? AND uid=?
#----------------------------------------------------
#遇到问题
#以上操作会触发node异步工作方法（无序）
#由于无序结果一定会错
#解决办法
(1)回调函数then[钩子函数] --简单
(2)Promise对象

41:00演示sql实现 创建表xz_cart
45:26演示node端实现 app.js  功能三：将商品添加到购物车
    GET /addcart
60:00 测试    /addcart

# 学子商城3-1-1课前复习
00:00回顾复习-思维导图
Session对象  商品列表 将商品添加到购物车 数据表 添加记录 更改记录 查询记录

# 学子商城3-1-1将商品添加至购物车-功能实现和常见错误
00:00
    添加购物车API接口 浏览器测试 方法说明 首先要登录成功的
    数据库查看有没有表xz_cart 、表有没有数据
05:00知识讲解-将商品添加到购物车-脚手架调用API接口
脚手架操作流程
- 为（加入购物车)按钮绑定点击事件
<mt-button @click="addcart">加入购物车</mt-button>
-获取当前商品3个数据lname;lid;price
<mt-button @click="addcart(item.lname,item.lid,item.price)">加入购物车</mt-button>
-发送ajax请求完成添加购物车操作
addcart(lname,lid,price){
    var url="addcart"
    var obj ={lname,lid,price}
    this.axios.get(url,{params:obj}).then(res=>{

    })
}

-服务器返回信息 {code:-2,msg:"未登录"} 跳转至登录组件
    this.$router.push("/Login");
-服务器返回信息 {code:1,msg:"添加成功"} 显示提示短消息
    this.$toast("添加成功")

17:21演示实现代码，在Product.vue中...

37:30常见错误分析
1:登录不成功  Login.vue  tom/123
    正则表达式
    脚手架没写完：登录成功跳转商品列表
2：Network error
    -数据库没有启动
    -表不存在
    -sql语句写错了
    -参数中数据不正确  undefined
如何解决
    -仔细查看app.js服务器端控制台出错信息
    比如
    -数据库没启动  Error：connect ECONNREFUSED 127.0.0.1:3306 （mysql没启动)
    -参数中数据不正确  undefined
        ER_BAD_FILED_ERROR:Unknown column 'undefined' in 'field list'



# 学子商城3-1-2购物车-功能分析
00:00知识讲解-购物车-功能分析
09:00
3.1代码实现
数据库
-表xz_cart(id,lid,price,lname,count,uid)

中间人 app.js
-前置条件：用户必须登录成功后才可以
-判断登录凭证 req.session.uid
-创建sql语句
SELECT id,lid,lname,price,count FORM xz_cart WHERE uid=?
-将查询结果返回脚手架
res.send({code:1,msg:"查询成功",data:result})
脚手架组件 Cart.vue

14:30演示实现代码，在app.js中... 功能四-查询指定用户购物车列表
GET /findcart

20:00浏览器测试API接口
26:10经典网站购物车浏览
30:00创建脚手架组件Cart.vue-配置好路由

# 学子商城3-2-1-购物车-布局和样式
00:00回顾脚手架组件的功能 将商品添加到购物车 发送ajax请求
02:15知识讲解-查询用户购物车列表
03:30演示实现购物车组件-标签
12:30演示实现购物车组件-样式


# 学子商城3-2-2-购物车-查询列表
00:00知识讲解-功能分析-实现查询购物车列表组件
-查询当前登录用户购物车列表
服务器：GET  /findcart
脚手架组件Cart.vue
-当组件成功创建后立即发送ajax请求   GET /findcart
-服务器返回信息
{code:-2,msg:"请求登录"}    this.$router.push("/Login")
{code:1,msg:"查询成功",data:[]}    result.data

05:30演示实现代码，在Cart.vue中....
    data(){}
    loadMore(){}

18:00查看购物车
在Produce.vue中...完善该功能，使得点击后跳转购物车
findCart(){
    this.$router.push("/Cart")
}
测试演示跳转购物车功能

23:00购物车数据Axios调用，在Cart,vue中....
循环渲染购物车列表数据
测试演示运行结果
26:30
3.3常见错误
-登录成功后查询购物车，又跳转登录页面请求登录
-问题的根源：Session对象的使用不当，失效
    脚手架main.js配置
    服务器app.js配置
    组件使用Session时



# 学子商城3-2-3-购物车-删除记录
00:00知识讲解-购物车的第二功能-删除指定的商品
#注意事项
(1)删除商品为什么id  原因：id INT 主键  #删除速度极快
                lname   VARCHAR #速度慢
#查询某个商品;更新一个商品;删除一个商品
#id作为首选条件
(2)删除数据是一种有危险性操作
#删除后不能恢复了
17:00
3.5实现功能
-数据库
表 xz_cart(id;lid;lname;price;count;uid)

中间人
-接受脚手架组件传递数据 id
-sql语句 DELETE FROM xz_cart WHERE id = ? AND uid=?
-json  {code:1,msg:"删除成功"}

20:00演示实现代码，在app.js中... 功能四-购物车中的一条商品信息
GET /del
    获取用户登录凭证
    如果没有登录凭证，请登录
    获取脚手架传递数据id
    创建SQL
    执行SQL
    返回结果处理

36:00知识讲解-脚手架组件-实现删除
<mt-button @click="del(item.id)">删除</mt-button>
del(){
    -显示确认框：是否删除指定商品 确认  取消
    -url  obj  get
    -重新加载数据
}

41:20演示实现删除功能代码，在Cart.vue中...
<mt-button @click="del(item.id)">删除</mt-button>
del(id){
    ...
}

# 学子商城3-2-3-课后总结
00:00总结-思维导图
购物车的实现
08:45全选按钮及功能的实现思路
全选 <input type="checkbox">
-当选中全选按钮 所有商品前复选框 选中
-当清空全选按钮 所有商品当前复选框 清空
-如果手工选中所有商品  全选选中
-如果清除某个商品选中状态  全选清空

16:20演示全选功能代码要点，在Cart.vue中...
data(){
    return {
        isAgree:false,//全选按钮状态
    }
}

-全选功能代码要点
<input type="checkbox" v-model="allcb"/>
-list:[{cb:false,id:1,lname:"aa"},{...}]
-<input type="checkbox" v-model="item.cb" @change="itemChange">

作业：
1完成学子商城-全选/清空
2删除多个商品[清空购物车]


//4-v1
# 学子商城4-1-1-购物车课前复习回顾

# 学子商城4-1-1-购物车-全选/清空-删除选中商品-Node-API实现
00:00全选/清空功能实现分析
全选 <input type="checkbox">
-当选中全选按钮 所有商品前复选框 选中
-当清空全选按钮 所有商品当前复选框 清空
-如果手工选中所有商品  全选选中
-如果清除某个商品选中状态  全选清空
-全选功能代码要点
<input type="checkbox" v-model="allcb"/>
-list:[{cb:false,id:1,lname:"aa"},{...}]
-<input type="checkbox" v-model="item.cb"/>

00:03全选/清空功能实现编码
全选控件
    <input type="checkbox" v-model="allcb" @change="selectAll"/>
    数据初始值
每行选中控件
    数据获取时初始值item.cb = false
    v-for :  <input type="checkbox" v-model="item.cb" @change="changeCheckItem" />
    方法selectAll编程实现其功能
        选中状态与列表中选中状态同步
    方法changeCheckItem编程实现其功能
        列表全选中与全选状态同步

00:30
2.2删除选中的商品实现分析
-分析组件
    删除编号为2 编号为3的商品  "2,3"
-分析中间人app.js
参数：id="2,3"
sql:"DELETE FROM xz_cart WHERE id in (2,3)

00:39
删除选中的商品接口代码实现演示
功能六：
    1:接收请求 /delm
    2:获取用户登录凭证
    3:如果没有，则请登录
    4:接收参数 id="2,3"
    5:创建sql语句执行删除多行记录功能
    6:判断是否成功，并返回值

00:45
测试接口


# 学子商城4-1-2-购物车-全选/清空-删除选中商品-组件实现
00:01设置按钮标签
    删除选中商品   @click="delm"
    清空购物车
00:03
编程实现方法delm()
    1：判断购物车列表中选中的记录数是否0；
    2：如果为0，显示当前没有可删除的商品，确认返回。
    3：创建变量str,拼接字符串"2,3,4"
    4:创建循环变量数组 this.list
    5:判断是否被选中 cb==true
        获取id拼接字符串 str +","
    6:判断如果用户没有选中商品 str.length==0
    7:确认是否真的要删除
    8:创建参数变量
    9：ajax调用


# 学子商城4-1-3-购物车-购物总数-Vuex介绍

2.3学子商城-购物车中的商品数量-Vuex
#作用：vuex脚手架全局变量保存多个组件共享数据

Vuex特点
(1)集合式存储多个组件共享的数据（全局共享）
(2)如果vuex中保存数据发生更新vuex通知所有使用此数据组件修改数据

vuex下载
-vue_app_00_null已经包含有了
-npm i vuex

vuex配置，在main.js中
-引入vuex组件
import Vuex from "vuex"
-注册
Vue.use(Vuex)
-创建存储对象
var store= new Vuex.store({})
-将存储对象添加到vue实例
new Vue({
    store
})

-创建存储对象详解
var store= new Vuex.store({
    store:{//保存全局数据
        fa:12 //亮哥头发根数
    },
    //如何获取全局数据或者修改此数据需要通过函数调用
    mutations:{  //保存修改全局数据的函数
        subFa(state){
            state.fa--;
        }
    },

    getters:{
        getFa(state){  //获取全局数据的函数
            getFa(state){
                return state.fa;
            }
        }
    }

})

vuex的使用
-在模板中使用
<template><div>亮哥有几根头发 {{$store.getters.getFa}}</div></template>







# 学子商城4-1-3-购物车-Vuex的应用实现
演示购物车应用Vuex的代码实现
00:00在main.js引入全局对象vuex存储数据
1：引入vuex
2：注册vuex
3：创建存储对象
4：将存储对象添加到vuex实例中

00：10组件模板中使用vuex
    显示：亮哥头发的根数
    按钮: 掉一根 @click="sub"
    sub方法的实现
        通过this.$store.commit("subFa")

    购物车中数量的显示及增加功能类似实现  cartCount
        购物车组件初始化数据时，置购物车全局数据cartCount
        this.$store.commit("addCart",this.list.length)

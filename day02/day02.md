## 课程内容
1. 指令
2. 双向绑定
3. 绑定样式
4. 自定义指令
5. 计算属性
6. 过滤器

### 一. 指令v-for
反复生成多个相同结构的HTML元素

用法：
` <要反复生成的元素 v-for="(value, i) of 数组">`

原理:
- a. 当new Vue()扫描到这里时，自动遍历of后的数组中每个元素
- b. 每遍历一个元素，就创建一个当前HTML 元素的副本
- c. of前的两个变量:
--1). value会自动获得当前正在遍历的数组元素值
--2). i会自动获得当前正在遍历的下标位置
- d. 如果当前元素或子元素中，需要使用当前正在遍历的元素值或下标，可用绑定语法来绑定value和i的值。

强调:
- v-for一定要放在那个要反复生成的元素上，而不是放在父元素上！
- value和i的使用范围仅限于当前元素及其子元素范围内，不能在当前元素外使用！
#### v-for遍历数组元素
示例:遍历数组元素，反复生成多个相同结构的元素
```javascript
<div id="app">
<ul>
	<!--本例中: 因为要反复生成多个li，所以v-for要写在li上，而不是li的父元素ul上-->
	<li v-for="(value,i) of teachers":key ="i">第{{i+1}}阶段: {{value}}
	</li>
</ul>
</div>
<script>
var vm=new Vue({
  el:"#app",
  data:{
    teachers:["亮亮","然然","东东","涛涛"]
  }
})
</script>
```
#### v-for遍历对象中每个属性
v-for还可:
- a. 可遍历数字下标的一切: 比如字符串
- b. 可遍历对象中每个属性

示例: 遍历对象中每个属性，反复生成多个html元素
```javascript
<di vid="app">
    <!--希望遍历data中一个对象的每个属性，反复生成多个相同结构的HTML元素-->
    <ul>
        <liv-for="(value,key) of ym":key ="key">{{key}} : {{value}}</li>
    </ul>
</div>
<script>
    var vm=new Vue({
    el:"#app",
    data:{
        ym:{
        math:89,
        chs:69,
        eng:91
        }
    }
    })
</script>
```
#### v-for还可以数数
v-for还会数数: 给v-for一个数字，他可以生成从1开始依次递增的一个序列！
- 1).<要反复生成的元素v-for="i of 数字">
- 2).原理:v-for会像人一样，自动从1开始数数，每数一个数，就自动创建当前元素的一个副本。直到数到给定数字结束。
- 3).其中: i会接住每次数的一个数字，可用于当前元素及子元素的绑定中。
示例: 根据页数，生成指定个数的分页按钮
```javascript
<head>
<metacharset="UTF-8">
<metaname="viewport"content="width=device-width, initial-scale=1.0">
<metahttp-equiv="X-UA-Compatible"content="ie=edge">
<title>Document</title>
<style>
ul{ list-style:none }
ul>li{
float:left;
border:1pxsolid#555;
width:36px;
height:36px;
line-height:36px;
text-align:center;
  }
ul>li+li{
border-left:0
  }
</style>
<scriptsrc="js/vue.js"></script>
</head>
<body>
<divid="app">
<ul>
<liv-for="i of pageCount">{{i}}</li>
</ul>
</div>
<script>
var vm=new Vue({
  el:"#app",
  data:{
    pageCount:3
  }
})
</script>
</body>
```

#### 指令v-for的使用-不能用下标直接更改数组值
使用v-for时，这里有个坑坑: 如果v-for遍历的是数组，在程序中通过下标修改数组元素的值，页面上的HTML元素不会自动更改！
比如: `this.teachers[0]="燕儿" `
页面上是不会变的！因为数组中的数字类型的下标012...无法添加访问器属性，也就不受监控！
解决:
今后，vue中修改数组中的元素值！必须用数组家函数！才能自动更新页面。因为函数都是受监控的。
比如: `this.teachers.splice(0,1,"燕儿")`
    删除0位置的1个元素，再在0位置放入"燕儿"
结果: 页面会自动变化！

#### 指令v-for的使用-加key属性
其实每次使用v-for时，都要同时绑定:key="i"
- a. 鄙视: 为什么v-for必须加:key
- b. 答: 因为v-for反复生成的多个元素，除了内容不同之外，从元素属性上来看多个元素毫无差别！每个反复生成的元素都是一样的。所以，如果将来修改了数组中一个元素时，v-for因为无法识别每个HTML元素，所以只能把所有的HTML元素重新生成一遍——效率低！
    如果给每个元素都绑定:key="i"属性，则每个HTML元素上都有一个唯一的标识key="0"  key="1"  ... 。当将来修改了数组中每个位置的元素时，只需要修改对应key的HTML元素即可，其他HTML元素保持不变！——效率高！
- c. 总结: 避免修改数组元素时，重新生成所有HTML元素，而是只更新其中一个HTML元素即可！提高修改效率！
- d. 如何:
-1). 当遍历数组时: <元素 v-for="(val,i) of 数组" :key="i"
	Key的值依次是0 1 2 3..
-2). 当遍历对象时: <元素 v-for="(val,key) of 对象" :key="key"
	Key的值依次是: 属性名1  属性名2 ...
	因为一个对象内的属性名肯定不会重复，所以，属性名也可以当做:key唯一标识一个HTML元素

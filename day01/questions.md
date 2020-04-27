1. Error compiling template:
答: HTML模板中语法写错了
2. Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div id="{{ val }}">, use <div :id="val">.
答: Interpolation inside attributes
	插值语法←中的←属性
	has been removed
    已经被移除  (可能以前可以这样写，但是现在不行了！)
	Use v-bind or the colon shorthand instead
    用v-bind或冒号简写代替
	For example
	比如:
	instead of <div id="{{ val }}">, use <div :id="val">.
    代替div id="{{ val }}">←用<div :id="val">

3. vm.pm25，为什么不是 vm.data.pm25？
答: data中的变量，一旦进入new Vue()，就立刻被改名换姓保护起来。new Vue()会自动为每个变量添加一对儿访问器属性。获取变量值，和修改变量值，只能通过访问器属性操作。
	所有自动添加的访问器属性，都直接隶属于new Vue()对象。
    所以, vm.pm25，我们以为访问的是data中的pm25变量。但是实际上访问的是vm自动创建的访问器属性pm25。

4. Property or method "uname" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option
答: html中绑定的属性或函数，在new Vue()中未定义。
	Property or method "uname" is not defined on the instance
    属性或方法xxx是未定义的在(new Vue)实例中
    but referenced during render.
	但是（却）引入了←在加载过程中，
	Make sure that this property is reactive, either in the data option
	请确认这个属性是响应式的而且在data参数中

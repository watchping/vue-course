
let contexts = require.context('./routers', false, /\.js$/)
contexts.keys().forEach(component => {
    // debugger;
    let componentEntity = contexts(component).default
    // 使用内置的组件名称 进行全局组件注册
    console.log(componentEntity);
})
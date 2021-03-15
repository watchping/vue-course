import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "../views/Index.vue"
import NotFound from "../views/NotFound.vue"
import Products from "../views/Products.vue"

Vue.use(VueRouter)

//   const routes = [
//   {
//     path: '/IND',
//     name: 'Index',
//     component: Index
//   },
//   {
//     path: '/details',
//     component:Details
//     //props: true,
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     //component: () => import(/* webpackChunkName: "details" */ '../views/Details.vue')
//   }
// ]

const router = new VueRouter({
  //mode:'history',
  routes:[
      {path:"/",  name: 'Index',     component:  Index},
      {path:"/product/detail/:lid", props: true, component:() => import(/* webpackChunkName: "details" */ '../views/Details.vue')},
      {path:"/product/list/:kw",props: true, component:Products},
      {path:"/*",component:NotFound},
  ]
})

export default router

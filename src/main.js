// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
// import VueAMap from 'vue-amap'

import signUp from './components/signUp.vue'
import signIn from './components/signIn.vue'
import map from './components/map.vue'

import axios from 'axios'
Vue.prototype.$axios = axios
Vue.use(VueRouter)

const routes = [// 定义路由
  {path: '/', redirect: '/signUp'},
  {path: '/signUp', component: signUp},
  {path: '/signIn', component: signIn},
  {path: '/map', component: map}
]
const router = new VueRouter({routes})// 创建VueRouter实例
Vue.config.productionTip = false

// Vue.use(VueAMap)
// VueAMap.initAMapApiLoader({
//   key: '\t10063073a1f0a9635585acdaef8e2a90',
//   plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
//   // 默认高德 sdk 版本为 1.4.4
//   v: '1.4.4'
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import AMap from 'vue-amap'
import 'iview/dist/styles/iview.css'  //iview默认样式
import '@/styles/iview-ui.css'  //用于覆盖ivie样式
import '@/styles/index.css'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { sync } from 'vuex-router-sync'

Vue.use(iView)
Vue.use(AMap)
Vue.config.productionTip = false

//Effortlessly keep vue-router and vuex store in sync.
sync(store, router)
// 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德的key
  key: 'YOUR_KEY',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

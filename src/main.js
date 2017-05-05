// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import iView from 'iview';
import AMap from 'vue-amap';
import 'iview/dist/styles/iview.css';
import '@/styles/index.scss';

Vue.use(iView);
Vue.use(AMap);
Vue.config.productionTip = false

// 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德的key
  key: 'YOUR_KEY',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

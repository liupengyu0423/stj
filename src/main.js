// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './style/base.css'
import './style/common.css'
import 'swiper/dist/css/swiper.css';
import zoomifyJs from './config/zoomify.min.js'
Vue.config.productionTip = false
window.zoomifyJs = zoomifyJs
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

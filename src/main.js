// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './vuex/index'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
Vue.use(Mint)

Vue.config.productionTip = false

// 添加事件总线对象
Vue.prototype.$bus = new Vue()
// 使用fastclickj解决移动端300ms延迟
FastClick.attach(document.body)
Vue.use(VueLazyLoad, {
  preLoad: 1,
  loading: require('./assets/img/common/images.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

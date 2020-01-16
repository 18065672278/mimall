import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
//导入轮播图插件
import 'swiper/dist/css/swiper.css'
//使用轮播图插件
Vue.use(VueAwesomeSwiper)
//使用图片懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://suo.im/5ukeFb',
  loading: 'http://suo.im/5BQrBu',
  attempt: 1
})

Vue.prototype.$goRouter = function(index){
  this.$router.push(index);
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

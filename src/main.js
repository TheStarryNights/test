import Vue from 'vue'
import App from '@/App'
import store from '@/store'
Vue.prototype.$store = store //挂载到vue原型上
Vue.config.productionTip = false

const app = new Vue({
  mpType: 'app',
  store,
  ...App
})
app.$mount()

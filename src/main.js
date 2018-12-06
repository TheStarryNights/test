import Vue from 'vue'
import App from '@/App'
import store from '@/store'
const Fly = require("flyio/dist/npm/wx")//引入
const fly = new Fly
Vue.prototype.$fly = fly //挂载到vue原型上
Vue.prototype.$store = store //挂载到vue原型上
Vue.config.productionTip = false
const app = new Vue({
  mpType: 'app',
  store,
  ...App
})
app.$mount()

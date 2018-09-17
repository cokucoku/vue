import Vue from 'vue'
import App from './App.vue'
import Toast from './myp/taost.js'
import Loading from './myp/loading.js'
import Pay from './myp/pay.js'
Vue.use(Toast)
Vue.use(Loading)
Vue.use(Pay)
Vue.config.productionTip = false

var myapp=new Vue({
  render: h => h(App)
}).$mount('#app')



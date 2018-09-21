import Vue from 'vue'
import App from './App.vue'
import Toast from './myp/taost.js'
import Loading from './myp/loading.js'
import switchs from './myp/switch.js'
import Pay from './myp/pay.js'
import City from './myp/city.js'
import gongge from './myp/gongge.js'
Vue.use(Toast)
Vue.use(Loading)
Vue.use(Pay,{"mysss":true})
Vue.use(switchs)
Vue.use(City)
Vue.use(gongge)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')



import Vue from 'vue'
import fetch from './fetch.vue'
Vue.config.productionTip = false

var ft=new Vue({
  render: h => h(fetch)
}).$mount('#app')
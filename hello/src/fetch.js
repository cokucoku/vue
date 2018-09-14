import Vue from 'vue'
import fetch from './fetch.vue'
Vue.config.productionTip = false

new Vue({
  render: h => h(fetch)
}).$mount('#app')
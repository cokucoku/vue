import Vue from 'vue'
import route from './route.vue'
Vue.config.productionTip = false

new Vue({
  render: h => h(route)
}).$mount('#app')
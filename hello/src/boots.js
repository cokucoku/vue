import Vue from 'vue'
import boots from './boots.vue'
Vue.config.productionTip = false

new Vue({
  render: h => h(boots)
}).$mount('#app')


import Vue from 'vue'
import othertodo from './othertodo.vue'
Vue.config.productionTip = false

new Vue({
  render: h => h(othertodo)
}).$mount('#app')
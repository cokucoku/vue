import Vue from 'vue'
import aboutApp from './aboutApp.vue'
Vue.config.productionTip = false

new Vue({
  render: h => h(aboutApp)
}).$mount('#app')
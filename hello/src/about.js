import Vue from 'vue'
import aboutApp from './aboutApp.vue'
import leeapi from './plugins/leeapi.js'
Vue.config.productionTip = false
Vue.use(leeapi)
new Vue({
  render: h => h(aboutApp)
}).$mount('#app')
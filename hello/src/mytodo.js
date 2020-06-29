import Vue from 'vue'
import todo from './mytodo.vue'
Vue.config.productionTip = false

new Vue({
  render: h => h(todo)
}).$mount('#app')
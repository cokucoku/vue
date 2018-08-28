import Vue from 'vue'
import topmovie from './topmovie.vue'
Vue.config.productionTip = false

new Vue({
  render: h => h(topmovie)
}).$mount('#app')
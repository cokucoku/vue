import Vue from 'vue'
import App from './App.vue'
import myApp from './myApp.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

new Vue({
  render: h => h(myApp)
}).$mount('#myapp')


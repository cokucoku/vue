import Vue from 'vue'
import App from './App.vue'
import {passwordInput,inputNumber,button,pay,city} from 'leevueplugin'//NPM下来插件了
//import {passwordInput,inputNumber,button,pay,city} from './index.js'//本地先测试插件可以用么？
Vue.use(passwordInput)
Vue.use(inputNumber)
Vue.use(button)
Vue.use(pay)
Vue.use(city)
Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
//import {passwordInput,inputNumber,button,pay,city,badge,collapse,collapseItem,alert,pagination} from 'leevueplugin'//NPM下来插件了
import {input,passwordInput,inputNumber,button,pay,city,badge,collapse,collapseItem,alert,pagination} from './index.js'//本地先测试插件可以用么？
Vue.use(input)
Vue.use(passwordInput)
Vue.use(inputNumber)
Vue.use(button)
Vue.use(pay)
Vue.use(city)
Vue.use(badge)
Vue.use(collapse)
Vue.use(collapseItem)
Vue.use(alert)
Vue.use(pagination)
Vue.config.productionTip = true
new Vue({
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './components/App'
import store from './store/index'
//import LeeVue from './index_global.js'
import LeeVue from 'leevueplugin'
Vue.config.productionTip = false
Vue.use(LeeVue)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import {LeePasswordInput,LeeInputNumber,LeeButton,LeePay,LeeBadge,LeeAlert,LeePagination} from 'leevueplugin'
import fetch from './fetch.vue'
Vue.config.productionTip = false
Vue.use(LeePasswordInput)
Vue.use(LeeInputNumber)
Vue.use(LeeButton)
Vue.use(LeePay)
Vue.use(LeeBadge)
Vue.use(LeeAlert)
Vue.use(LeePagination)
var ft=new Vue({
  render: h => h(fetch)
}).$mount('#app')
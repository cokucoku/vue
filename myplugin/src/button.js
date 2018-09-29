import Vue from 'vue'
import button from './button.vue'
import pluginButton from './myp/button/pluginButton.js'
import pluginInputNumber from './myp/button/pluginInputNumber.js'
import pluginpasswordInput from './myp/button/pluginpasswordInput.js'
Vue.use(pluginButton)
Vue.use(pluginInputNumber)
Vue.use(pluginpasswordInput)
Vue.config.productionTip = false
new Vue({
  render: h => h(button)
}).$mount('#app')



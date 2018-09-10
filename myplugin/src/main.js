import Vue from 'vue'
import App from './App.vue'
import Toast from './myp/taost.js'
import Loading from './myp/loading.js'
Vue.use(Toast)
Vue.use(Loading)
Vue.config.productionTip = false

var myapp=new Vue({
  render: h => h(App)
}).$mount('#app')
var a=myapp.$children;

setTimeout(function () {
	a[0].show=false;
},2000)


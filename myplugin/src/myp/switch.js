import switchComponent  from './switch.vue'
var switchs = {};

switchs.install=function (Vue) {
	Vue.component('switchs', switchComponent)
	
	
}
export default switchs;
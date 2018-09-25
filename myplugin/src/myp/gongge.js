import gonggeComponent  from './gongge.vue'
var gongge = {};

gongge.install=function (Vue,opt) {
	Vue.component('el-select', gonggeComponent)	
	Vue.component('el-ip', gonggeComponent)	
	Vue.component('el-option', gonggeComponent)	
	
}
export default gongge;
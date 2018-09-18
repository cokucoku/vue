import LoadingComponent  from './loading.vue'
var myLoading = {};

myLoading.install=function (Vue,opt) {
	Vue.component('loading', LoadingComponent)	
	
	
}
export default myLoading;
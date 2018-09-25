import InputNumberComponent  from './pluginInputNumber.vue'
var InputNumber = {};

InputNumber.install=function (Vue,opt) {
	Vue.component('lee-input-number', InputNumberComponent)
}
export default InputNumber;
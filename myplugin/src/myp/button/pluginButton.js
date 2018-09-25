import buttonComponent  from './pluginButton.vue'
var button = {};

button.install=function (Vue,opt) {
	Vue.component('lee-button', buttonComponent)
}
export default button;
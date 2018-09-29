import passwordInputComponent from './pluginpasswordInput.vue'
var passwordInput = {};

passwordInput.install = function(Vue, opt) {
    Vue.component('lee-password-input', passwordInputComponent)
    
}
export default passwordInput;
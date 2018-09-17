import taostComponent from './taost.vue'
var mytaost = {};

mytaost.install = function(Vue, opt) {
    const ToastConstructor = Vue.extend(taostComponent)
    // 生成一个该子类的实例
    const instance = new ToastConstructor();
    instance.$mount(document.createElement('div'))
    document.body.appendChild(instance.$el)
    Vue.prototype.$toast = function(msg, myopt) {
        instance.message = msg;
        instance.show = true;
        setTimeout(function(){
            instance.show = false;
        },myopt.duration);
    }
}
export default mytaost;
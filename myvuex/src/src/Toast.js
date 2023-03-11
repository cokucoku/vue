import toastView from './Toast.vue'
var Toast = {};

Toast.install = function(Vue, opt) {
    //console.log(opt) //这边也可以从MAIN.JS USE传递参数
    const toastConstructor = Vue.extend(toastView)
    // 生成一个该子类的实例
    const instance = new toastConstructor();
    instance.$mount(document.createElement('div'))
    document.body.appendChild(instance.$el)
    Vue.prototype.$showToast = function(opt) {
        instance.show = true
        instance.type = opt.type
        instance.title = opt.title
        setTimeout(() => {
            instance.show = false
            if (opt.success) {
                opt.success.call(instance, { status: 'ok' })
            }
        }, opt.duration)
    }
    Vue.prototype.$hideToast = function() {
        instance.show = false
    }
}

export default Toast;
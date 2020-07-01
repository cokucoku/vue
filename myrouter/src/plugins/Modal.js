import modalView from './Modal.vue'
var Modal = {};

Modal.install = function(Vue, oopt) {
    //console.log(opt) //这边也可以从MAIN.JS USE传递参数
    const ModalConstructor = Vue.extend(modalView)
    // 生成一个该子类的实例
    const instance = new ModalConstructor();
    instance.$mount(document.createElement('div'))
    document.body.appendChild(instance.$el)
    Vue.prototype.$showModal = function(opt) {
        instance.show = true
        instance.content = opt.content
        instance.title = opt.title
        Vue.prototype.$hideModal = function() {
            if (instance.which == 'cancel'&&opt.success) {
                opt.success.call(instance, { cancel: true, confirm: false })
            } else if (instance.which == 'confirm'&&opt.success) {
                opt.success.call(instance, { cancel: false, confirm: true })
            } else {
                return
            }
        }
    }


}

export default Modal;
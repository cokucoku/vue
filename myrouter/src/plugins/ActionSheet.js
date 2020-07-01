import modalView from './ActionSheet.vue'
var Modal = {};

Modal.install = function(Vue, oopt) {
    //console.log(opt) //这边也可以从MAIN.JS USE传递参数
    const ModalConstructor = Vue.extend(modalView)
    // 生成一个该子类的实例
    const instance = new ModalConstructor();
    instance.$mount(document.createElement('div'))
    document.body.appendChild(instance.$el)
    Vue.prototype.$showActionSheet = function(opt) {
        instance.show = true
        instance.list = opt.item
        Vue.prototype.$chooseActionSheet = function(copt) {
            if(copt.choose!=''){
                opt.success.call(instance,{choose:copt.choose})
            }else{
                opt.success.call(instance,{mgs:'你取消了选择'})
            }
        }

    }
}

export default Modal;
import LeeAlert from './src/LeeAlert.vue'
import LeeBadge from './src/LeeBadge.vue'
import LeeButton from './src/LeeButton.vue'
import LeeToast from './src/LeeToast.vue'
import LeeDialog from './src/LeeDialog.vue'

const LeeVue = {}
LeeVue.install = function (Vue) {
    Vue.component(LeeAlert.name, LeeAlert)
    Vue.component(LeeBadge.name, LeeBadge)
    Vue.component(LeeButton.name, LeeButton)
    Vue.component(LeeToast.name, LeeToast)
    Vue.component(LeeDialog.name, LeeDialog)
    const toastConstructor = Vue.extend(LeeToast)
    const toastInstance = new toastConstructor();
    toastInstance.$mount(document.createElement('div'))
    document.body.appendChild(toastInstance.$el)
    Vue.prototype.$Toast = function (option) {
        //默认参数
        let setOption = {
            title: toastInstance.title,
            type: toastInstance.type,
            after: toastInstance.after,
            afterTitle: toastInstance.afterTitle,
            duration: toastInstance.duration,
            close: () => {}
        }
        const myOption = Object.assign(setOption, option)
        toastInstance.value = true
        toastInstance.useStyle = false
        toastInstance.type = myOption.type
        toastInstance.title = myOption.title
        toastInstance.duration = myOption.duration
        setTimeout(() => {
            toastInstance.value = false
            myOption.close()
        }, myOption.duration)
    }
    const dialogConstructor = Vue.extend(LeeDialog)
    const dialogInstance = new dialogConstructor();
    dialogInstance.$mount(document.createElement('div'))
    document.body.appendChild(dialogInstance.$el)
    Vue.prototype.$Dialog = function (opt) {
        dialogInstance.value = true
        dialogInstance.useStyle = false
        dialogInstance.content = opt.content
        dialogInstance.title = opt.title
        dialogInstance.effect = opt.effect
        dialogInstance.cancel = () => {
            dialogInstance.value = false
            opt.cancel.call(dialogInstance, {flag: false, text: '取消'})
        }
        dialogInstance.certain = () => {
            dialogInstance.value = false
            opt.cancel.call(dialogInstance, {flag: true, text: '确定'})
        }
    }


}
export default LeeVue


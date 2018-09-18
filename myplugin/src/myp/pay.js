import payview from './pay.vue'
var mypay = {};

mypay.install = function(Vue, opt) {
    console.log(opt) //这边也可以从MAIN.JS USE传递参数
    const payConstructor = Vue.extend(payview)
    // 生成一个该子类的实例
    const instance = new payConstructor();
    instance.$mount(document.createElement('div'))
    document.body.appendChild(instance.$el)
    Vue.prototype.$pay = function(myopt) {
        instance.tempay='';//支付方式清空
        instance.show = true;
        instance.choose = myopt.choose;
        instance.bg = myopt.bg;
    }
    Vue.prototype.$mychoose = function() {
        return instance.pay
    }
}
export default mypay;
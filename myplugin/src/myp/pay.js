import payview from './pay.vue'
var mypay = {};

mypay.install = function(Vue, opt) {
    const payConstructor = Vue.extend(payview)
    // 生成一个该子类的实例
    const instance = new payConstructor();
    instance.$mount(document.createElement('div'))
    document.body.appendChild(instance.$el)
    Vue.prototype.$pay = function(myopt) {
        instance.show = true;
        instance.choose = myopt.choose;
        instance.bg = myopt.bg;
        myopt.clickback.call(this, instance.pay);
    }
}
export default mypay;
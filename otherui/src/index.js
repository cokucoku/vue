import passwordInputvue from './src/passwordInput.vue'
import inputNumbervue from './src/inputNumber.vue'
import buttonvue from './src/button.vue'
import payvue from './src/pay.vue'
import cityvue from './src/city.vue'
import allcity from './src/allcity.js'
var passwordInput = {};
var inputNumber = {};
var button = {};
var pay = {};
var city = {};
passwordInput.install = function(Vue) {
    Vue.component('password-input', passwordInputvue)
}
inputNumber.install = function(Vue) {
    Vue.component('input-number', inputNumbervue)
}
button.install = function(Vue) {
    Vue.component('lee-button', buttonvue)
}
pay.install = function(Vue) {
    const payConstructor = Vue.extend(payvue)
    const instance = new payConstructor();
    instance.$mount(document.createElement('div'))
    document.body.appendChild(instance.$el)
    Vue.prototype.$pay = function(myopt) {
        instance.tempay='';//支付方式清空
        instance.show = true;
        instance.choose = myopt.choose;
        instance.bg = myopt.bg;
    }
    Vue.prototype.$paychoose = function() {//返回选择的支付方式
        return instance.pay
    }
}
city.install = function(Vue) {
    const cityConstructor = Vue.extend(cityvue)
    // 生成一个该子类的实例
    const instance = new cityConstructor();
    instance.$mount(document.createElement('div'))
    document.body.appendChild(instance.$el)
    Vue.prototype.$city = function() {
        instance.alldata = allcity;
        var poneid = allcity.province[0].id //默认省份代码
        var ponename = allcity.province[0].name //默认省份名称
        var coneid = allcity.city[poneid][0].id //默认城市代码
        var conename = allcity.city[poneid][0].name //默认城市名称
        var doneid = allcity.district[coneid][0].id //默认区县代码
        var donename = allcity.district[coneid][0].name //默认区县名称
        instance.province = allcity.province;
        instance.city = allcity.city[poneid]
        instance.district = allcity.district[coneid]
        instance.num.push(instance.province.length, instance.city.length, instance.district.length)
        instance.temsel = { 'province': ponename, 'city': conename, 'district': donename } //认零时选择的省市区
        instance.show = true;
        return instance.address
    }
    Vue.prototype.$citysel = function() {
        instance.curpos = [0, 0, 0]
        return instance.address
    }
}
export {passwordInput,inputNumber,button,pay,city}
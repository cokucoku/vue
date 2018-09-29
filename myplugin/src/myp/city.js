import cityview from './city.vue'
import allcity from './allcity.js'
import $ from 'jquery'
var city = {};
//console.log(allcity)
city.install = function(Vue) {
    const cityConstructor = Vue.extend(cityview)
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
export default city;
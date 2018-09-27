import cityview from './city.vue'
import $ from 'jquery'
var city = {};

city.install = function(Vue) {
    const cityConstructor = Vue.extend(cityview)
    // 生成一个该子类的实例
    const instance = new cityConstructor();
    instance.$mount(document.createElement('div'))
    document.body.appendChild(instance.$el)
    Vue.prototype.$city = function() {
        $.ajax({
            url: "./allcity.js",
            dataType: "jsonp",
            jsonpCallback: "callback",
            success: function(ds) {
                instance.alldata = ds;
                var poneid = ds.province[0].id //默认省份代码
                var ponename = ds.province[0].name //默认省份名称
                var coneid = ds.city[poneid][0].id //默认城市代码
                var conename = ds.city[poneid][0].name //默认城市名称
                var doneid = ds.district[coneid][0].id //默认区县代码
                var donename = ds.district[coneid][0].name //默认区县名称
                instance.province = ds.province;
                instance.city = ds.city[poneid]
                instance.district = ds.district[coneid]
                instance.num.push(instance.province.length,instance.city.length,instance.district.length)
                instance.temsel = { 'province': ponename, 'city': conename, 'district': donename } //认零时选择的省市区

            }
        });
        instance.show = true;
        return instance.address
    }
    Vue.prototype.$citysel = function() {
        instance.curpos=[0,0,0]
        return instance.address
    }
}
export default city;
<template>
    <div id="topmovie">
        <ul>
            <li v-for="item in fang">{{item.title}}</li>
        </ul>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    data() {
        return {
            fang: ''
        }
    },
    beforeCreate() {
        var _self = this;
        var query = '34832462'
        var obj = { 'city': '北京' }
        var fang = { 'area': 'baoshan' }
        fetch('/201306/ajax.php?area=baoshan', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            //body:'area=baoshan'
        }).then(function(response) {
            return response.json();
        }).then(function(a) {
            console.log(a)
        })

        // $.ajax({
        //     url: '/api/qqmusic/'+query,//qq音乐
        //     //url:'/api/beian/chanye.com',//域名ICP备案信息查询
        //     //url:'/api/gongan/sina.com.cn',//公安网备API接口
        //     //url:'/open/api/weather/json.shtml',//天气API接口
        //     //url:'/open/api1/lunar/json.shtml',//农历查询API接口
        //     //url:'/api',//农历查询API接口
        //     //url:'/top250?count=3',//豆瓣电影
        //      url:'/201306/ajax.php',//豆瓣电影
        //     dataType: 'json',
        //     data:fang,
        //     success: function(ds) {
        //         console.log(ds)
        //         //_self.fang=ds.subjects
        //     }

        // })
    }
}
</script>
<style>
#topmovie li {
    display: block;
    line-height: 24px;
    border-bottom: solid 1px #eee
}
</style>
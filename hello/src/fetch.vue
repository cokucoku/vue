<template>
    <div class="all">
        <div id="fang">
            <dl>
                <dt>楼盘名</dt>
                <dt>价格</dt>
                <dt>项目地址</dt>
            </dl>
            <ul>
                <li v-for="item in fang">
                    <div>{{item.name}}</div>
                    <div>{{item.price}}</div>
                    <div>{{item.address}}</div>
                </li>
            </ul>
        </div>
        <div id="music">
            <dl>
                <dt>歌手</dt>
                <dt>歌名</dt>
                <dt>歌曲地址</dt>
            </dl>
            <ul>
                <li v-for="item in music">
                    <div>{{item.xsinger_name}}</div>
                    <div>{{item.xsong_name}}</div>
                    <div>{{item.xsong_url}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    data() {
        return {
            fang: '',
            music: '',
        }
    },
    beforeCreate() {
        var _self = this;
        var query = '34832462'
        var obj = { 'city': '北京' }
        var fang = { 'area': 'baoshan' }
        fetch('/201306/ajax.php?area=pudong', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            //body:'area=baoshan'
        }).then(function(response) {
            return response.json();
        }).then(function(a) {
            _self.fang = a
        })
        $.ajax({
            url: '/api/qqmusic/' + query,
            type: 'get',
            dataType: 'json',
            // data: {param1: 'value1'},
            success: function(ds) {
                _self.music = ds.data.playlist
            }
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
* {
    margin: 0px;
    padding: 0px;
}

#fang,
#music {
    border: solid 1px #ddd;
    padding: 20px;
    margin: 20px;
}

#fang li,
#music li {
    display: block;
    line-height: 34px;
    border-bottom: solid 1px #eaeaea;
    padding: 0 15px;
    display: flex;
    color: #666
}

#fang dl,
#music dl {
    display: flex;
    background: #efefef;
    line-height: 36px;
    padding: 0 15px;
    font-weight: bold;
}

#fang dt:nth-child(1),
#fang li div:nth-child(1),#music dt:nth-child(1),
#music li div:nth-child(1) {
    width: 20%
}

#fang dt:nth-child(2),
#fang li div:nth-child(2),#music dt:nth-child(2),
#music li div:nth-child(2) {
    width: 20%
}

#fang dt:nth-child(3),
#fang li div:nth-child(3),#music dt:nth-child(3),
#music li div:nth-child(3) {
    width: 60%
}
</style>
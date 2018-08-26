<template>
    <div id="myapp">
        <ul>
            <li v-for="i in data">
                <span>{{i.ntype}}</span>
                <a v-bind:href="i.url">{{i.title}}</a>
                <span>{{timetrans(i.datetime)}}</span>
                <i>点击：{{i.hit}}</i>
            </li>
        </ul>
        <div id="mypage" class="pageTest"></div>
    </div>
</template>
<script>
var mydata;
var Mock = require('mockjs');
var $ = require('jquery');
import { mypage } from './assets/mypage.js' //引入自己写的插件
Mock.mock(/leeao82.com/, 'get', {
    'list|10': [{
        'title': '@cparagraph(1)',
        'datetime|': '@date(T)',
        'url|': /http:\/\/[a-z0-9A-Z]+\.(com|cn|org|net)/,
        'hit|1-10000': 1,
        'ntype': /(国内新闻|国际新闻|财经新闻|娱乐新闻|图片新闻|本地新闻|社会新闻)/
    }],
    'msg': 'ok',
    'totalpage': 15

});
export default {
    data() {
        return {
            data: ''
        }
    },
    beforeCreate: function() {
        var _self = this;
        $.ajax({
            url: 'leeao82.com',
            type: 'get',
            dataType: 'json',
            success: function(mockdata) {
                _self.data = mockdata.list;
                var pp = new mypage('#mypage', {
                    len: mockdata.totalpage, //总页数
                    sizes: 'l', //大小 s m l
                    themes: 'green',
                    clickback: function(pno) {
                        $.ajax({
                            url: 'leeao82.com',
                            type: 'get',
                            dataType: 'json',
                            data: { pno: pno },
                            success: function(mockdata) {
                                _self.data = mockdata.list;
                            }

                        })

                    }
                });
                //pp.go(2)
            }

        })

    },
    methods: {
        timetrans: function(date) {
            var date = new Date(date * 1); //如果date为10位不需要乘1000
            var Y = date.getFullYear() + '-';
            var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
            var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
            var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
            var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
            return Y + M + D + h + m + s;
        }
    },
    name: 'myapp'

}
</script>
<style scoped>
@import url(./assets/mypage.css)
</style>
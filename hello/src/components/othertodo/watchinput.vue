<template>
    <div class="searchform">
        <input type="text" name="keyword" v-model="keyword"  @focus="show" @click.stop="show" placeholder="watch实验">
        <div :style="{display:open?'block':'none'}">
            <transition-group name="list" tag="ul">
                <li v-for="(item,inx) in searchlist" :key="item" @click="go(item)">{{item}}<i @click.stop="del(inx)">x</i></li>
            </transition-group>
        </div>
    </div>
</template>
<script>
var _self;
import $ from 'jquery'
export default {
    name: "bdsearch",
    data() {
        return {
            searchlist: '',
            keyword: '',
            open: false
        }
    },
    beforeCreate() { //很重要这样一开始就把_self变成这个VUE实例了，为了配合后面的document点击关闭
        _self = this;
    },
    watch: {
        keyword:{
            handler:'search',
            immediate:true
        }
    },
    methods: {
        del: function(i) {
            this.searchlist.splice(i, 1)
        },
        go(item) {
            window.open("https://www.baidu.com/s?wd=" + item)
        },
        hide() {
            this.open = false
        },
        show() {
            if (this.keyword) {
                this.open = true
            }
        },
        search() {
            if (this.keyword) {
                this.open = true
            } else {
                this.open = false
            }
            $.ajax({
                url: "http://suggestion.baidu.com/su",
                data: { "wd": _self.keyword, "cb": "callback" },
                dataType: "jsonp",
                jsonpCallback: "callback",
                success: function(data) {
                    _self.searchlist = data.s
                }
            });
        }
    }
}

$(document).click(function(event) {
    _self.open = false;
});
</script>
<style scoped>
* {
    margin: 0;
    list-style: none;
    padding: 0;
    box-sizing: border-box;
}

.searchform {   
    position: relative;
    margin:15px 0;
}

.searchform input {
    width: 100%;
    height: 34px;
    border: solid 1px #ddd;
    text-indent: 10px;
}

.searchform input:focus {
    outline: none;
    border: solid 1px #3385ff;
}

.searchform ul {
    background: #FFF;
    z-index: 33;
    border: solid 1px #ddd;
    position: absolute;
    width: 100%;
    top: 33px;
    box-shadow: 0 1px 2px #ddd;
    line-height: 26px;
    font-size: 14px;
    overflow: hidden;
}

.searchform ul li {
    padding: 0 10px;
    transition: all 1s;
    width: 100%
}

.searchform ul li i {
    float: right;
    cursor: pointer;
    color: #f00
}

.searchform ul li:hover {
    background: #ddd
}

.list-enter-active,
.list-leave-active {
    transition: all 1s;
}

.list-leave-active {
    position: absolute;
}

.list-enter,
.list-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}
</style>
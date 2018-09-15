<template>
    <div class="searchform">
        <input type="text" name="keyword" autocomplete="off" v-model="keyword" @keyup="search" @focus="show" @click.stop="show">
        <ul :style="{display:open?'block':'none'}">
            <li v-for="item in searchlist" :key="item" @click="go(item)">{{item}}</li>
        </ul>
    </div>
</template>
<script>
var _self;
import $ from 'jquery'
export default {
    name:"bdsearch",
    data() {
        return {
            searchlist: '',
            keyword: '',
            open: false
        }
    },
    methods: {
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
            _self = this;
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
  _self.open=false;
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
    border: solid 1px #ddd;
    position: absolute;
    width: 100%;
    top: 33px;
    box-shadow: 0 1px 2px #ddd;
    line-height: 26px;
    font-size: 14px
}

.searchform ul li {
    padding: 0 10px;
}

.searchform ul li:hover {
    background: #ddd
}
</style>
<template>
    <div id="app" class="cal">
        <div class="cal-header" style="height: 22px;">
            <div class="todaydate" style="text-align: right;"><a href="javascript:(0)" @click="go">{{today}}</a></div>
        </div>
        <div class="cal-header">
            <div class="arrow l" @click="prev"></div>
            <div class="todaydate">{{tomon}}</div>
            <div class="arrow r" @click="next"></div>
        </div>
        <div class="cal-body">
            <div class="week">
                <ul>
                    <li>日</li>
                    <li>一</li>
                    <li>二</li>
                    <li>三</li>
                    <li>四</li>
                    <li>五</li>
                    <li>六</li>
                </ul>
            </div>
            <div class="dates">
                <ul>
                    <li v-for="(item,inx) in myarr" :class="{cur:day===(inx-firstday+1) && month===new Date().getMonth()}"><span v-if="myarr[inx]>0 && myarr[inx]<=totalday " @click="setthis(inx)">{{item | chuli}}</span></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
var _self;
export default {
    data() {
        return {
            num: 42,
            month: new Date().getMonth(),
            day: new Date().getDate(),
            myarr: []
        }
    },
    beforeCreate() { //很重要这样一开始就把_self变成这个VUE实例了
        _self = this;
    },
    mounted() {
        this.changearray()
    },
    methods: {
        changearray() {
            for (var i = 0; i < this.num; i++) {
                this.myarr.push(i - this.firstday + 1)
            }
        },
        prev() {
            this.month--;
            this.myarr = [];
            this.changearray()

        },
        next() {
            this.month++;
            this.myarr = [];
            this.changearray();

        },
        go() {
            this.month = new Date().getMonth()
            this.myarr = [];
            this.changearray()
        },
        setthis(inx) {
            var selday = inx - this.firstday + 1;
            var selmon = this.month;
            var n = new Date();
            n.setMonth(selmon)
            console.log(n.getFullYear() + "/" + (n.getMonth() + 1) + "/" + selday)


        }

    },
    filters: {
        chuli: function(value) {
            if (value <= 0) {
                return ''
            } else if (value > _self.totalday) {
                return ''
            } else {
                return value
            }
        },
        zh: function(value) {
            var n = new Date();
            n.setDate(value)
            return n.getDate()
        }
    },
    computed: {
        tomon() {
            var n = new Date();
            n.setMonth(this.month)
            var y = n.getFullYear();
            var m = n.getMonth() + 1;
            return y + "年" + m + "月"
        },
        today() {
            var n = new Date();
            var y = n.getFullYear();
            var m = n.getMonth() + 1;
            var d = n.getDate();
            return y + "年" + m + "月" + d + "日"
        },
        firstday() {
            var n = new Date();
            n.setMonth(this.month)
            var firstday = new Date(n.getFullYear(), (n.getMonth()), 1).getDay()
            return firstday
        },
        totalday() {
            var n = new Date();
            n.setMonth(this.month)
            var totalday = new Date(n.getFullYear(), (n.getMonth() + 1), 0).getDate();
            return totalday
        }
    }
}
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
}

body {
    font-family: "微软雅黑";
    font-size: 16px;
    color: #2c3e50
}

#app {
    width: 700px;
    margin: 10px auto;
    background: #eee;
    padding: 20px 0;
}

.cal-header {
    height: 50px;
    margin-bottom: 10px;
    line-height: 50px;
    padding: 0 35px;
    display: flex;
    align-items: center
}

.cal-header a {
    color: #f29543
}

.cal-header .arrow {
    width: 12px;
    height: 12px;
    cursor: pointer;
}

.cal-header .arrow.l {
    border-left: solid 1px currentcolor;
    border-bottom: solid 1px currentcolor;
    transform: rotate(45deg);
}

.cal-header .arrow.r {
    border-right: solid 1px currentcolor;
    border-top: solid 1px currentcolor;
    transform: rotate(45deg);
}

.cal-header .todaydate {
    flex-grow: 1;
    text-align: center
}

.cal .week ul {
    display: flex;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border: solid 1px #ddd;
    border-left: none;
    border-right: none
}

.cal .dates:before,
.cal .dates:after {
    display: table;
    clear: both;
    content: ""
}

.cal .dates li {
    display: flex;
    float: left;
    height: 50px;
    width: 100px;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: #aaa
}

.cal .dates li.now {
    color: #2c3e50
}

.cal .dates li span {
    display: inline-block;
    width: 22px;
    height: 22px;
    cursor: pointer;
}

.cal .dates li:hover span {
    border-bottom: solid 2px #f29543
}

.cal .dates li.cur {
    position: relative;
    color: #fff
}

.cal .dates li.cur:after {
    content: "";
    width: 36px;
    height: 36px;
    position: absolute;
    left: 50%;
    margin-left: -18px;
    top: 50%;
    margin-top: -18px;
    border: solid 1px #f29543;
    background: #f29543;
    border-radius: 100%
}

.cal .dates li.cur span {
    z-index: 44;
    position: relative;
}

.cal .week ul li {
    width: 100px
}
</style>
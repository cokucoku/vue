<template>
    <div>
        <transition name="slideUp">
            <div class="cityChose" v-if="show">
                <div class="btns">
                    <span class="qx" @click="show=!show">取消</span>
                    <span class="sel">{{temsel.province}}/{{temsel.city}}/{{temsel.district}}</span>
                    <span class="qd" @click="close">确定</span>
                </div>
                <div class="content">
                    <div class="curline"></div>
                    <div class="ggt gg"></div>
                    <div class="ggb gg"></div>
                    <ul class="province">
                        <li></li>
                        <li></li>
                        <li :tid="item.id" @click.stop="sel($event)" v-for="item in province" :class="{cur:temsel.province===item.name}" @touchstart="ts($event)" @touchmove="tm($event)" @touchend="te($event)">{{item.name}}</li>
                    </ul>
                    <ul class="city">
                        <li></li>
                        <li></li>
                        <li :tid="item.id" @click.stop="sel($event)" v-for="item in city" :class="{cur:temsel.city===item.name}" @touchstart="ts($event)" @touchmove="tm($event)" @touchend="te($event)">{{item.name}}</li>
                    </ul>
                    <ul class="district">
                        <li></li>
                        <li></li>
                        <li :tid="item.id" @click.stop="sel($event)" v-for="item in district" :class="{cur:temsel.district===item.name}" @touchstart="ts($event)" @touchmove="tm($event)" @touchend="te($event)">{{item.name}}</li>
                    </ul>
                </div>
            </div>
        </transition>
        <transition name="fade">
            <div class="mark" @click="close" v-if="show"></div>
        </transition>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    data() {
        return {
            show: false,
            alldata: '',
            province: '',
            city: '',
            district: '',
            temsel: '',
            address: '',
            curpos: [0, 0, 0],
            movepos: [0, 0, 0],
            maxh: [0, 0, 0],
            ox: [0, 0, 0],
            num: [],

        };
    },
    methods: {
        ts(e) {
            var index = $(e.target.parentElement).index('ul');
            this.movepos[index] = 0; //很重要，movepos要重置为0
            this.ox[index] = e.touches[0].clientY;
        },
        tm(e) {
            var index = $(e.target.parentElement).index('ul');
            var nx = e.touches[0].clientY;
            this.movepos[index] = (nx - this.ox[index]);
            var $ul = e.target.parentElement;
            $($ul).css({
                'transform': 'translateY(' + (this.curpos[index] + this.movepos[index]) + 'px)',
                'transition': 'all .0s'
            });
        },
        te(e) {
            var lastxh;
            var index = $(e.target.parentElement).index('ul');
            this.curpos[index] += this.movepos[index];
            //console.log(this.curpos[index] / 34)
            this.maxh[index] = -(this.num[index] * 34 - 34);
            if (this.curpos[index] > 0) {
                this.curpos[index] = 0
            } else if (this.curpos[index] < this.maxh[index]) {
                this.curpos[index] = this.maxh[index]
            } else {

            }
            //根据curpos获取数据变更
            if ((Math.abs(this.curpos[index]) % 34) > 12) {
                lastxh = (parseInt(this.curpos[index] / 34)) - 1;
                this.curpos[index] = lastxh * 34
            } else {
                lastxh = (parseInt(this.curpos[index] / 34));
                this.curpos[index] = lastxh * 34
            }
            lastxh = Math.abs(lastxh)
            this.chuli(index,lastxh)
        },
        sel(e) {
            var lastxh;
            var index = $(e.target.parentElement).index('ul');
            var ind = $(e.target).index();
            var mpos = 34 * (ind - 2);
            this.curpos[index] = -mpos;
            lastxh =Math.abs (parseInt(this.curpos[index] / 34));
            this.chuli(index,lastxh)


        },
        chuli(index,lastxh) {
            var nid;
            var allli = $('ul').eq(index).find('li');
            if (index == 0) { //变化选择省
                this.temsel.province = allli.eq(lastxh + 2).text()
                nid = allli.eq(lastxh + 2).attr('tid')
                this.city = this.alldata.city[nid] //选项市改变
                this.temsel.city = this.city[0].name //选项市改变
                var cid = this.city[0].id
                this.district = this.alldata.district[cid] //选项区县改变
                this.temsel.district = this.district[0].name //选项区县改变
                $('ul').eq(index).siblings().css({ 'transform': 'translateY(0)', 'transition': 'all .1s' });
                this.curpos[1] = 0;
                this.curpos[2] = 0;
                this.num[1] = this.city.length;
                this.num[2] = this.district.length;
            } else if (index == 1) { //变化选择市
                this.temsel.city = allli.eq(lastxh + 2).text()
                nid = allli.eq(lastxh + 2).attr('tid')
                this.district = this.alldata.district[nid]
                this.temsel.district = this.district[0].name
                $('ul').eq(index).siblings('.district').css({ 'transform': 'translateY(0)', 'transition': 'all .1s' });
                this.curpos[2] = 0;
                this.num[2] = this.district.length;
            } else { //变化选择区
                this.temsel.district = allli.eq(lastxh + 2).text()
            }
            $('ul').eq(index).css({
                'transform': 'translateY(' + (this.curpos[index]) + 'px)',
                'transition': 'all .1s'
            });
        },
        close() {
            this.show = !this.show;
            this.address = this.temsel
        }
    },
    mounted() {


    }
};
</script>
<style scoped>
* {
    margin: 0px;
    padding: 0px;
    list-style: none;
    box-sizing: border-box;
}

.cityChose {
    position: fixed;
    width: 100%;
    height: 204px;
    bottom: 0;
    left: 0;
    z-index: 6;
    background: #fff;
}

.cityChose .btns {
    height: 34px;
    border-bottom: solid 1px #eee;
    line-height: 34px;
    padding: 0 10px;
    display: flex;
}

.cityChose .btns span {
    color: #73D661;
    cursor: pointer;
}

.cityChose .btns span.sel {
    flex-grow: 1;
    text-align: center;
    color: #666;
    font-size: 14px
}

.cityChose .content {
    display: flex;
    position: relative;
    height: 170px;
    overflow: hidden;
}

.cityChose .content .gg {
    display: none;
    position: absolute;
    width: 100%;
    height: 34px;
    z-index: 6;
}

.cityChose .content .ggt {
    top: 0;
    background: linear-gradient(#fff 20%, transparent);
}

.cityChose .content .ggb {
    bottom: 0;
    background: linear-gradient(transparent 10%, #fff);
}

.cityChose .content .curline {
    border-bottom: solid 1px #eee;
    width: 100%;
    height: 34px;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -17px;
    border-top: solid 1px #eee;
    z-index: 3
}

.cityChose ul {
    width: 33.33%;
    /*height: 170px;*/
    z-index: 5;
    position: relative;
    transform: translateY(0px);
}

.cityChose li {
    line-height: 34px;
    height: 34px;
    user-select: none;
    text-align: center;
    cursor: pointer;
    outline: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.cityChose li.cur {
    color: #73D661
}

.mark {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, .8);
    z-index: 3;
}










































/*遮罩動畫*/

.fade-enter-active,
.fade-leave-active {
    transition: all .3s;
    visibility: visible;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
    visibility: hidden;
}








































/*支付選擇動畫*/

.slideUp-enter-active,
.slideUp-leave-active {
    transition: transform .3s;
    transform: translate3d(0, 0, 0);
}

.slideUp-enter,
.slideUp-leave-to {
    transform: translate3d(0, 100%, 0);
}
</style>
<template>
    <div>
        <transition name="slideUp">
            <div class="cityChose" v-if="show">
                <div class="btns">
                    <span class="qx" @click="show=!show">取消</span>
                    <span class="sel">{{temsel.province}}/{{temsel.city}}/{{temsel.district}}</span>
                    <span class="qd" @click="chuli">确定</span>
                </div>
                <div class="content">
                    <div class="curline"></div>
                    <div class="ggt gg"></div>
                    <div class="ggb gg"></div>
                    <ul class="province">
                        <li></li>
                        <li></li>
                        <li :tid="item.id" @click.stop="selp($event,item.name,item.id)" v-for="item in province" :class="{cur:temsel.province===item.name}" @touchstart="ts($event,0)" @touchmove="tm($event,0)" @touchend="te($event,0)">{{item.name}}</li>
                    </ul>
                    <ul class="city">
                        <li></li>
                        <li></li>
                        <li :tid="item.id" @click.stop="selc($event,item.name,item.id)" v-for="item in city" :class="{cur:temsel.city===item.name}" @touchstart="ts($event,1)" @touchmove="tm($event,1)" @touchend="te($event,1)">{{item.name}}</li>
                    </ul>
                    <ul class="district">
                        <li></li>
                        <li></li>
                        <li :tid="item.id" @click.stop="seld($event,item.name)" v-for="item in district" :class="{cur:temsel.district===item.name}" @touchstart="ts($event,2)" @touchmove="tm($event,2)" @touchend="te($event,2)">{{item.name}}</li>
                    </ul>
                </div>
            </div>
        </transition>
        <transition name="fade">
            <div class="mark" @click="chuli" v-if="show"></div>
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
        };
    },
    methods: {
        ts(e, index) {
            this.ox[index] = e.touches[0].clientY;
        },
        tm(e, index) {
            var nx = e.touches[0].clientY;
            this.movepos[index] = (nx - this.ox[index]);
            var $ul = e.target.parentElement;
            $($ul).css({
                'transform': 'translateY(' + (this.curpos[index] + this.movepos[index]) + 'px)',
                'transition': 'all .0s'
            });
        },
        te(e, index) {
            var nid;
            var $ul = e.target.parentElement;
            var allli = $($ul).find('li');
            var lastxh;
            this.curpos[index] += this.movepos[index];
            var num = $($ul).find('li').length;
            this.maxh[index] = -(num * 34 - 102);
            if (this.curpos[index] > 0) {
                this.curpos[index] = 0
                if (index == 0) {
                    this.temsel.province = allli.eq(2).text()
                } else if (index == 1) {
                    this.temsel.city = allli.eq(2).text()
                } else {
                    this.temsel.district = allli.eq(2).text()
                }
            } else if (this.curpos[index] < this.maxh[index]) {
                this.curpos[index] = this.maxh[index]
                lastxh = (parseInt(this.curpos[index] / 34));
                lastxh = Math.abs(lastxh)
                if (index == 0) {
                    this.temsel.province = allli.eq(lastxh + 2).text()
                } else if (index == 1) {
                    this.temsel.city = allli.eq(lastxh + 2).text()
                } else {
                    this.temsel.district = allli.eq(lastxh + 2).text()
                }
            } else {
                //功能为拖动自动耦合

                if (this.curpos[index] % 34 == 0) {
                    this.curpos[index] = this.curpos[index];
                } else {
                    if ((Math.abs(this.curpos[index]) % 34) > 12) {
                        lastxh = (parseInt(this.curpos[index] / 34)) - 1;
                        this.curpos[index] = lastxh * 34
                    } else {
                        lastxh = (parseInt(this.curpos[index] / 34));
                        this.curpos[index] = lastxh * 34
                    }
                    lastxh = Math.abs(lastxh)

                    if (index == 0) {
                        this.temsel.province = allli.eq(lastxh + 2).text()
                        nid = allli.eq(lastxh + 2).attr('tid')
                        this.city = this.alldata.city[nid] //选项市改变
                        this.temsel.city = this.city[0].name //选项市改变
                        var cid = this.city[0].id
                        this.district = this.alldata.district[cid] //选项区县改变
                        this.temsel.district = this.district[0].name //选项区县改变
                        $($ul).siblings().css({
                            'transform': 'translateY(0)',
                            'transition': 'all .1s'
                        });
                        this.curpos[1] = 0;
                        this.curpos[2] = 0;

                    } else if (index == 1) {
                        this.temsel.city = allli.eq(lastxh + 2).text()
                        nid = allli.eq(lastxh + 2).attr('tid')
                        this.district = this.alldata.district[nid]
                        this.temsel.district = this.district[0].name
                        console.log(this.district[0].name)
                        $($ul).siblings('.district').css({
                            'transform': 'translateY(0)',
                            'transition': 'all .1s'
                        });
                        this.curpos[2] = 0;
                    } else {
                        this.temsel.district = allli.eq(lastxh + 2).text()
                    }

                }
            }
            $($ul).css({
                'transform': 'translateY(' + (this.curpos[index]) + 'px)',
                'transition': 'all .1s'
            });
        },
        selp($event, el, id) {
            var ind = $($event.target).index();
            var $ul = $event.target.parentElement;
            var mpos = 34 * (ind - 2);
            this.curpos[0] = -mpos;
            $($ul).css({
                'transform': 'translateY(' + (this.curpos[0]) + 'px)',
                'transition': 'all .1s'
            });
            var cid;
            this.temsel.province = el //选项省改变
            this.city = this.alldata.city[id] //选项市改变
            this.temsel.city = this.city[0].name //选项市改变
            cid = this.city[0].id
            this.district = this.alldata.district[cid] //选项区县改变
            this.temsel.district = this.district[0].name //选项区县改变
            $($ul).siblings().css({
                'transform': 'translateY(0)',
                'transition': 'all .1s'
            });
            this.curpos[1] = 0;
            this.curpos[2] = 0;
        },
        selc($event, el, id) {
            var ind = $($event.target).index();
            var $ul = $event.target.parentElement;
            var mpos = 34 * (ind - 2);
            this.curpos[0] = -mpos;
            $($ul).css({
                'transform': 'translateY(' + (this.curpos[0]) + 'px)',
                'transition': 'all .1s'
            });
            this.temsel.city = el //选项市改变
            this.district = this.alldata.district[id]
            this.temsel.district = this.district[0].name //选项区县改变
            $($ul).siblings('.district').css({
                'transform': 'translateY(0)',
                'transition': 'all .1s'
            });
            this.curpos[2] = 0;
        },
        seld($event, el) {
            var ind = $($event.target).index();
            var $ul = $event.target.parentElement;
            var mpos = 34 * (ind - 2);
            this.curpos[0] = -mpos;
            $($ul).css({
                'transform': 'translateY(' + (this.curpos[0]) + 'px)',
                'transition': 'all .1s'
            });
            this.temsel.district = el //选项区县改变
        },
        chuli() {
            this.show = !this.show;
            this.address = this.temsel
            
        }
    },
    mounted() {}
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
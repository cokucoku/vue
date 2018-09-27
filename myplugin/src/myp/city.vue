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
                        <li :tid="item.id" @click.stop="sel($event,0)" v-for="item in province" :class="{cur:temsel.province===item.name}" @touchstart="ts($event,0)" @touchmove="tm($event,0)" @touchend="te($event,0)">{{item.name}}</li>
                    </ul>
                    <ul class="city">
                        <li></li>
                        <li></li>
                        <li :tid="item.id" @click.stop="sel($event,1)" v-for="item in city" :class="{cur:temsel.city===item.name}" @touchstart="ts($event,1)" @touchmove="tm($event,1)" @touchend="te($event,1)">{{item.name}}</li>
                    </ul>
                    <ul class="district">
                        <li></li>
                        <li></li>
                        <li :tid="item.id" @click.stop="sel($event,2)" v-for="item in district" :class="{cur:temsel.district===item.name}" @touchstart="ts($event,2)" @touchmove="tm($event,2)" @touchend="te($event,2)">{{item.name}}</li>
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
            num:[]
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
            var nid,lastxh;
            var $ul = e.target.parentElement;
            var allli = $($ul).find('li');
            this.curpos[index] += this.movepos[index];
            // $($ul).css({
            //     'transform': 'translateY(' + (this.curpos[index]) + 'px)',
            //     'transition': 'all .1s'
            // });

            //chuli(curpos,index)
        },
        sel(e, index) {
            //chuli(curpos,index)
        },
        chuli(curpos,index) {
            
        },
        close() {
            console.log(this.num)
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
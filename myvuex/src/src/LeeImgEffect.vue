<template>
    <div class="lee-img-effect" :class="theeffect" :style="'height:'+height">
        <div class="control" v-if="effect=='change'||effect=='slideleft'">
            <div class="arrow arrowleft" @click="prev"></div>
            <div class="arrow arrowright" @click="next"></div>
        </div>
        <div v-if="effect=='change'" class="fade">
            <div class="text" :class="whichclasst">{{bg[cur].tit}}</div>
            <img :src="bg[cur].imgurl" alt="" :class="whichclass">
        </div>
        <ul v-else-if="effect=='ninegrid'">
            <li v-for="item in config">
                <h2>{{item.tit}}</h2>
                <img :src="item.imgurl">
            </li>
        </ul>
        <ul v-else-if="effect=='slideleft'" :style="'width:'+totalw+'px;transform:translateX(-'+(cur*sw)+'px)'">
            <li v-for="item in config" :style="'background-image:url('+item.imgurl+')'">
                <div class="text">{{item.tit}}</div>
            </li>
        </ul>
        <ul v-else>
            <li v-for="item in config" :style="'background-image:url('+item.imgurl+')'">
                <h2>{{item.tit}}</h2>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'LeeImgEffect',
    data() {
        return {
            bg: this.config,
            cur: 0,
            whichclass: 'my-enter-active',
            whichclasst: 'change-enter-active',
            sw: 0,
            totalw: 0,
            setint: '',
            theeffect:''
        }
    },
    methods: {
        prev() {
            var _this=this
            clearInterval(this.setint)
            if (this.effect == 'slideleft') {
                this.cur -= 1
                this.setint = setInterval(this.add, 5000);
            } else {
                this.whichclasst = 'change-leave-active'
                this.whichclass = 'my-leave-active'
                setTimeout(function() {
                    _this.whichclasst = 'change-enter-active'
                    _this.whichclass = 'my-enter-active'
                    _this.cur -= 1
                }, 700)
                this.setint = setInterval(this.addf, 5000);
            }

        },
        next() {
            var _this=this
            clearInterval(this.setint)
            if (this.effect == 'slideleft') {
                this.cur += 1
                this.setint = setInterval(this.add, 5000);
            } else {
                this.whichclasst = 'change-leave-active'
                this.whichclass = 'my-leave-active'
                setTimeout(function() {
                    _this.whichclasst = 'change-enter-active'
                    _this.whichclass = 'my-enter-active'
                    _this.cur += 1
                }, 200)
                this.setint = setInterval(this.addf, 5000);
            }
        },
        add() {
            this.cur += 1
        },
        addf() {
            var _this = this
            this.whichclasst = 'change-leave-active'
            this.whichclass = 'my-leave-active'
            setTimeout(function() {
                _this.whichclasst = 'change-enter-active'
                _this.whichclass = 'my-enter-active'
                _this.cur += 1
            }, 200)
        },
    },
    mounted() {
        var _this = this
        if (this.effect === 'change') {
            var img = document.querySelector('.fade').children
            this.setint = setInterval(this.addf, 5000)
        } else if (this.effect === 'slideleft') {
            var slideleft = document.querySelector('.slideleft')
            var ul = slideleft.children
            var sw = slideleft.scrollWidth
            var totalw = sw * _this.bg.length
            this.sw = sw
            this.totalw = totalw
            ul[1].style.cssText = "width:" + totalw + "px"
            this.setint = setInterval(this.add, 5000)

        }
    },
    props: {
        config: {
            type: Array,
            default () {
                return []
            }
        },
        effect: {
            type: String,
            default: 'accordion'
        },
        height: {
            type: String,
            default: '300px'
        }
    },
    watch: {
        cur: {
            immediate: true,
            handler(value) {
                if (value > this.bg.length - 1) {
                    this.cur = 0
                } else if (value < 0) {
                    this.cur = this.bg.length - 1
                }
            }
        },
        effect: {
            immediate: true,
            handler(value) {
                var types=['accordion','change','slideleft','ninegrid']
                var fi=types.filter(function(el) {
                    return el.indexOf(value)>-1;
                })
                if(fi.length<1){
                    this.theeffect="accordion"
                }else{
                    this.theeffect=value
                }
            }
        },
    }
};
</script>
<style scoped>
.lee-img-effect ul {
    display: flex;
    list-style: none;
    margin: 0px;
    padding: 0px;background: #000
}
.lee-img-effect.ninegrid ul {
    flex-wrap: wrap;overflow: hidden;height: 100%
}
.lee-img-effect.ninegrid ul li{width: 33.33%;position: relative;border: solid 1px rgba(255, 255, 255, 1);border-right: none;border-bottom: none;cursor: pointer;overflow: hidden;box-sizing: border-box;}
.lee-img-effect.ninegrid ul li h2{position: absolute;border-bottom: none;width: 100%;text-align: center;top: 100%;white-space: nowrap;color: #fff;transform: translateY(-50%);padding:0px;margin:0px;z-index: 3;opacity: 0;transition: all .5s}
.lee-img-effect.ninegrid ul li img{position: absolute;z-index: 1;width: 100%;height: 100%;object-fit: cover;transition: all .5s}

.lee-img-effect.ninegrid ul li:after{content: '';width: 100%;height: 100%;position: absolute;z-index: 2;background: rgba(0,0,0,.5);transition: all .5s}
.lee-img-effect.ninegrid ul li:hover:after{background: rgba(0,0,0,.9);}
.lee-img-effect.ninegrid ul li:hover h2{opacity: 1;top: 50%;}
.lee-img-effect.ninegrid ul li:hover img{transform: scale(1.8);}

.lee-img-effect.slideleft {
    overflow: hidden;
    position: relative;
}

.lee-img-effect .control {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 3
}

.lee-img-effect.slideleft ul {
    height: 100%;
    transition: all .6s
}

.lee-img-effect.slideleft ul li {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    position: relative;
}

.lee-img-effect.slideleft .text {
    position: absolute;
    height: 44px;
    width: calc(100% - 30px);
    background: rgba(0, 0, 0, .6);
    color: #fff;
    font-size: 16px;
    line-height: 44px;
    bottom: 0;
    padding: 0 15px;
}

.lee-img-effect .arrow {
    cursor: pointer;
    position: absolute;
    width: 60px;
    height: 60px;
    background: rgba(0, 0, 0, .6);
    border-radius: 100%;
    transform: translateY(-50%);
    top: 50%;
    display: flex;
    align-items: center;
    justify-content: center;transition: all .5s
}

.lee-img-effect .arrow:hover {
    background: rgba(70, 189, 135, .9)
}

.lee-img-effect .arrowleft {
    left: 15px;
}

.lee-img-effect .arrowleft:before {
    width: 16px;
    height: 16px;
    content: '';
    border-left: solid 3px #fff;
    border-bottom: solid 3px #fff;
    transform: rotate(45deg);
}

.lee-img-effect .arrowright {
    right: 15px;
}

.lee-img-effect .arrowright:before {
    width: 16px;
    height: 16px;
    content: '';
    border-left: solid 3px #fff;
    border-bottom: solid 3px #fff;
    transform: rotate(-135deg);
}

.lee-img-effect.accordion ul {
    height: 100%
}

.lee-img-effect.accordion ul li {
    list-style: none;
    flex-grow: 1;
    height: 100%;
    background-size: cover;
    background-position: center center;
    transition: all .5s ease;
    cursor: pointer;
    width: 0%;
    position: relative;
    border: solid 1px rgba(255, 255, 255, 1);border-right: none;
    border-top: none;
    border-bottom: none;
    overflow: hidden;
}

.lee-img-effect.accordion ul li h2 {
    color: #fff;
    position: absolute;
    top: 100%;
    width: 100%;
    text-align: center;
    z-index: 2;
    transition: all .5s ease;
    opacity: 0;
    transform: translateY(-50%);
    margin: 0px;
    white-space: nowrap;border-bottom: none
}

.lee-img-effect.accordion ul li:hover {
    width: 30%;
}

.lee-img-effect.accordion ul li:before {
    content: "";
    position: absolute;
    background: rgba(0, 0, 0, 0);
    width: 100%;
    height: 0%;
    transition: all .5s ease;
    bottom: 0%;
    z-index: 1
}

.lee-img-effect.accordion ul li:hover:before {
    background: rgba(0, 0, 0, .6);
    height: 100%
}

.lee-img-effect.accordion ul li:hover h2 {
    top: 50%;
    opacity: 1;border-bottom: none
}

.lee-img-effect.change {
    overflow: hidden;
    position: relative;
}

.lee-img-effect.change .fade {
    width: 100%;
    height: 100%;
    position: relative;
    background: #000
}

.lee-img-effect.change .fade .text {
    position: absolute;
    height: 44px;
    width: calc(100% - 30px);
    background: rgba(0, 0, 0, .6);
    color: #fff;
    font-size: 16px;
    line-height: 44px;
    bottom: 0;
    padding: 0 15px;
}

.lee-img-effect.change .fade img {
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: 100%;
}

.my-enter-active {
    animation: my-in .3s ease-in-out;
}

.my-leave-active {
    animation: my-out .3s ease-in-out both;
}

.change-enter-active {
    animation: change-in .7s ease-in-out;
}

.change-leave-active {
    animation: change-out .7s ease-in-out both;
}

@keyframes my-in {
    0% {
        opacity: 0
    }

    100% {
        opacity: 1
    }
}

@keyframes my-out {
    0% {
        opacity: 1
    }

    100% {
        opacity: 0
    }
}

@keyframes change-in {
    0% {
        transform: translateY(100%);
    }

    100% {
        transform: translateY(0%);
    }
}

@keyframes change-out {
    0% {
        transform: translateY(0%);
    }

    100% {
        transform: translateY(100%);
    }
}
</style>
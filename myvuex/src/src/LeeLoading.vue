<template>
    <div class="lee-loading" :class="type" :style="'color:'+color" v-if="type=='ball-pulse'">
        <span></span><span></span><span></span>
    </div>
    <div class="lee-loading" :class="type" :style="'color:'+color" v-else-if="type=='ball-wave'">
        <span></span><span></span><span></span>
    </div>
    <div class="lee-loading" :class="type" :style="'color:'+color" v-else-if="type=='rectangle'">
        <span></span><span></span><span></span>
    </div>
    <div class="lee-loading" :class="type" :style="'color:'+color" v-else-if="type=='square-move'">
        <span></span><span></span><span></span>
    </div>
    <div class="lee-loading" :class="type" :style="'color:'+color" v-else-if="type=='take-turn'">
        <span></span><span></span>
    </div>
    <div class="lee-loading" :class="type" :style="'color:'+color" v-else-if="type=='google'">
        <span></span><span></span><span></span><span></span>
    </div>
    <div class="lee-loading" :class="type" :style="'color:'+color" v-else-if="type=='radar-2'">
        <span></span>
    </div>
    <div class="lee-loading" :class="type" :style="'color:'+color" v-else-if="type=='radar-1'">
        <span></span><span></span><span></span>
    </div>
    <div class="lee-loading" :class="type" :style="'color:'+color" v-else-if="type=='progress'">
        <span></span>
    </div>
    <div class="lee-loading" :class="type" :style="'color:'+color" v-else-if="type=='zebra-crossing'">
        <span></span>
    </div>
    <div class="lee-loading" :class="type" :style="'color:'+color" v-else-if="type=='spinner'">
        <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    </div>
    <div class="lee-loading" :class="type" :style="'color:'+color" v-else-if="type=='ball-circle'">
        <span></span><span></span>
    </div>
    <div class="lee-loading" :class="type" :style="'color:'+color" v-else-if="type=='circle'">
    </div>
    <div class="lee-loading" :class="type" :style="'color:'+color" v-else-if="type=='circle-side'">
    </div>
    <div class="lee-loading" :class="type" :style="'color:'+color" v-else-if="type=='circle-arrow'">
    </div>
    <div class="lee-loading" :class="type" :style="'color:'+color" v-else-if="type=='flip-block'">
    </div>
    <div class="lee-loading" :class="type" :style="'color:'+color" v-else-if="type=='box'">
        <div class="boxn">
            <span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
    </div>
    <div class="lee-loading" :class="type" :style="'color:'+color" v-else-if="type=='swim-block'">
        <span></span><span></span><span></span><span></span>
    </div>
    <div class="lee-loading" :class="type" :style="'color:'+color" v-else-if="type=='croll-block'">
        <span></span><span></span><span></span><span></span><span></span>
    </div>
    <div class="lee-loading" :class="type" :style="'color:'+color" v-else-if="type=='wave'">
        <span></span>
    </div>
</template>
<script>
export default {
    name: 'LeeLoading',
    inheritAttrs: false,
    data() {
        return {}
    },
    props: {
        type: {
            type: String,
            default: 'ball-pulse' //默认default
        },
        color: {
            type: String,
            default: '#46bd87' //默认default
        }
    }

};
</script>
<style scoped>
.lee-loading {
    display: inline-block;
}

.lee-loading.ball-pulse span {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background: currentColor;
    margin-right: 5px;
    animation: ball-pulse 1s infinite;
}

.lee-loading.ball-pulse span:nth-child(2) {
    animation-delay: .3s
}

.lee-loading.ball-pulse span:nth-child(3) {
    animation-delay: .6s
}

.lee-loading.ball-wave span {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background: currentColor;
    margin-right: 10px;
    animation: ball-wave 1s infinite linear;
}

.lee-loading.ball-wave span:nth-child(2) {
    animation-delay: .3s
}

.lee-loading.ball-wave span:nth-child(3) {
    animation-delay: .6s
}

.lee-loading.rectangle span {
    display: inline-block;
    width: 8px;
    height: 22px;
    border-radius: 3px;
    background: currentColor;
    margin-right: 5px;
    animation: rectangle 1s infinite linear;
}

.lee-loading.rectangle span:nth-child(2) {
    animation-delay: .3s
}

.lee-loading.rectangle span:nth-child(3) {
    animation-delay: .6s
}

.lee-loading.ball-circle {
    width: 40px;
    height: 40px;
    position: relative;
}

.lee-loading.ball-circle span {
    display: inline-block;
    position: absolute;
    border-radius: 100%;
    width: 12px;
    height: 12px;
    background: currentColor;
    left: 0;
    top: 0
}

.lee-loading.ball-circle span:nth-child(1) {
    animation: ball-circle-one 1s infinite linear;
    transform: translate(0, 0);
}

.lee-loading.ball-circle span:nth-child(2) {
    animation: ball-circle-two 1s infinite linear;
    transform: translate(28px, 28px);
}

.lee-loading.take-turn span {
    display: inline-block;
    width: 12px;
    height: 12px;
    background: currentColor;
}

.lee-loading.take-turn span:nth-child(1) {
    animation: take-turn-one 2s infinite;
    transform: translate(-12px, -0);
}

.lee-loading.take-turn span:nth-child(2) {
    animation: take-turn-two 2s infinite;
    transform: translate(12px, 0);
}

.lee-loading.radar-1 {
    position: relative;
    width: 40px;
    height: 40px;
}

.lee-loading.radar-1 span {
    display: inline-block;
    position: absolute;
    box-sizing: border-box;
    border-radius: 100%
}

.lee-loading.radar-1 span:nth-child(1) {
    width: 12px;
    height: 12px;
    background: currentColor;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

}

.lee-loading.radar-1 span:nth-child(2) {
    left: 0;
    top: 0;
    animation: circle 1s infinite linear;
    border-width: 2px;
    border-style: solid;
    border-color: #fff currentColor #fff currentColor;
    width: 100%;
    height: 100%
}

.lee-loading.radar-1 span:nth-child(3) {
    left: 20%;
    top: 20%;
    animation: circlerev 1s infinite linear;
    border-width: 2px;
    border-style: solid;
    border-color: transparent #ddd transparent #ddd;
    width: 60%;
    height: 60%
}

.lee-loading.radar-2 {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    overflow: hidden;
    background-image:
        -webkit-repeating-radial-gradient(transparent 0%, transparent 25%, currentColor 28%, currentColor 31%, transparent 35%),
        -webkit-linear-gradient(left, transparent 49%, currentColor 49%, currentColor 53%, transparent 53%),
        -webkit-linear-gradient(top, transparent 49%, currentColor 49%, currentColor 53%, transparent 53%)
}

.lee-loading.radar-2 span {
    position: absolute;
    width: 50%;
    height: 50%;
    border-radius: 100% 0% 0 0;
    background-image: -webkit-linear-gradient(-135deg, currentColor 0%, transparent 50%);
    transform: rotate(0deg);
    transform-origin: 100% 100%;
    animation: circle 2.6s linear infinite;
}



.lee-loading.spinner {
    position: relative;
    width: 50px;
    height: 50px;
}

.lee-loading.spinner span {
    width: 14px;
    height: 6px;
    position: absolute;
    border-radius: 3px;
    background: currentColor;
    animation: tm .7s infinite linear;
}

.lee-loading.spinner span:nth-child(1) {
    left: 0;
    top: 50%;
    margin-top: -3px;
}

.lee-loading.spinner span:nth-child(2) {
    animation-delay: .1s;
    left: 25%;
    top: 25%;
    transform: rotate(45deg);
    margin-top: -3px;
    margin-left: -7px;
}

.lee-loading.spinner span:nth-child(3) {
    animation-delay: .2s;
    left: 50%;
    top: 0%;
    transform: rotate(90deg);
    margin-left: -7px;
    margin-top: 3px
}

.lee-loading.spinner span:nth-child(4) {
    animation-delay: .3s;
    right: 25%;
    top: 25%;
    transform: rotate(135deg);
    margin-top: -3px;
    margin-right: -7px;
}

.lee-loading.spinner span:nth-child(5) {
    animation-delay: .4s;
    right: 0%;
    top: 50%;
    transform: rotate(180deg);
    margin-top: -3px;
}

.lee-loading.spinner span:nth-child(6) {
    animation-delay: .5s;
    right: 25%;
    bottom: 25%;
    transform: rotate(225deg);
    margin-bottom: -3px;
    margin-right: -7px;
}

.lee-loading.spinner span:nth-child(7) {
    animation-delay: .6s;
    left: 50%;
    bottom: 0%;
    transform: rotate(270deg);
    margin-left: -7px;
    margin-bottom: 3px
}

.lee-loading.spinner span:nth-child(8) {
    animation-delay: .7s;
    left: 25%;
    bottom: 25%;
    transform: rotate(315deg);
    margin-bottom: -3px;
    margin-left: -7px;
}

.lee-loading.square-move {
    width: 30px;
    height: 30px;
    position: relative;
}

.lee-loading.square-move span {
    display: inline-block;
    position: absolute;
    border-radius: 4px;
    width: 14px;
    height: 14px;
    background: currentColor;
    left: 0;
    top: 0
}

.lee-loading.square-move span:nth-child(1) {
    animation: square-move-one 2s infinite linear;
    transform: translate(0, 0);

}

.lee-loading.square-move span:nth-child(2) {
    animation: square-move-two 2s infinite linear;
    transform: translate(0, 16px);

}

.lee-loading.square-move span:nth-child(3) {
    animation: square-move-three 2s infinite linear;
    transform: translate(16px, 16px);
}

.lee-loading.google {
    width: 24px;
    height: 24px;
    position: relative;
}

.lee-loading.google span {
    position: absolute;
    border-radius: 100%;
    width: 37.5%;
    height: 37.5%;
    background: currentColor;
    left: 0;
    top: 0;
    animation: take-turn1 880ms infinite cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

@keyframes ball-pulse {
    0% {
        transform: scale(1)
    }

    50% {
        transform: scale(0)
    }

    100% {
        transform: scale(1)
    }
}

@keyframes rectangle {
    0% {
        transform: scaleY(1)
    }

    50% {
        transform: scaleY(2)
    }

    100% {
        transform: scaleY(1)
    }
}

@keyframes ball-circle-one {
    0% {
        transform: translate(0, 0)
    }

    25% {
        transform: translate(28px, 0)
    }

    50% {
        transform: translate(28px, 28px)
    }

    75% {
        transform: translate(0, 28px)
    }

    100% {
        transform: translate(0, 0)
    }
}

@keyframes ball-circle-two {
    0% {
        transform: translate(28px, 28px)
    }

    25% {
        transform: translate(0, 28px)
    }

    50% {
        transform: translate(0, 0)
    }

    75% {
        transform: translate(28px, 0)
    }

    100% {
        transform: translate(28px, 28px)
    }
}

@keyframes square-move-one {
    0% {
        transform: translate(0, 0)
    }

    8% {
        transform: translate(0, 0)
    }

    16% {
        transform: translate(0, 0)
    }

    24% {
        transform: translate(16px, 0)
    }

    32% {
        transform: translate(16px, 0)
    }

    40% {
        transform: translate(16px, 0)
    }

    48% {
        transform: translate(16px, 16px)
    }

    56% {
        transform: translate(16px, 16px)
    }

    64% {
        transform: translate(16px, 16px)
    }

    72% {
        transform: translate(0, 16px)
    }

    80% {
        transform: translate(0, 16px)
    }

    88% {
        transform: translate(0, 16px)
    }

    100% {
        transform: translate(0, 0)
    }
}

@keyframes square-move-two {
    0% {
        transform: translate(0, 16px);
    }

    8% {
        transform: translate(0, 16px);
    }

    16% {
        transform: translate(0, 16px);
    }

    24% {
        transform: translate(0, 0);
    }

    32% {
        transform: translate(0, 0);

    }

    40% {
        transform: translate(0, 0);

    }

    48% {
        transform: translate(16px, 0);

    }

    56% {
        transform: translate(16px, 0);

    }

    64% {
        transform: translate(16px, 0);

    }

    72% {
        transform: translate(16px, 16px);

    }

    80% {
        transform: translate(16px, 16px);

    }

    88% {
        transform: translate(16px, 16px);

    }

    100% {
        transform: translate(0, 16px);

    }
}

@keyframes square-move-three {
    0% {
        transform: translate(16px, 16px);
    }

    8% {
        transform: translate(16px, 16px);
    }

    16% {
        transform: translate(16px, 16px);
    }

    24% {
        transform: translate(0, 16px);
    }

    32% {
        transform: translate(0, 16px);
    }

    40% {
        transform: translate(0, 16px);
    }

    48% {
        transform: translate(0, 0);
    }

    56% {
        transform: translate(0, 0);
    }

    64% {
        transform: translate(0, 0);
    }

    72% {
        transform: translate(16px, 0);
    }

    80% {
        transform: translate(16px, 0);
    }

    88% {
        transform: translate(16px, 0);
    }

    100% {
        transform: translate(16px, 16px);
    }
}

@keyframes ball-wave {
    0% {
        transform: translateY(0%)
    }

    25% {
        transform: translateY(50%)
    }

    50% {
        transform: translateY(0%)
    }

    75% {
        transform: translateY(-50%)
    }

    100% {
        transform: translateY(0%)
    }
}

@keyframes take-turn {
    0% {}

    50% {
        transform: translate(100%, 0);
    }

    100% {}
}

@keyframes take-turn-one {
    0% {
        opacity: .4
    }

    50% {
        transform: translate(14px, 0) rotate(180deg);
        opacity: 1;
        border-radius: 100%;
    }

    100% {
        opacity: .4
    }
}

@keyframes take-turn-two {
    0% {
        opacity: 1;
    }

    50% {
        transform: translate(-14px, 0) rotate(-180deg);
        border-radius: 100%;
        opacity: .4;
    }

    100% {
        opacity: 1;
    }
}

.lee-loading.circle {
    border: solid 2px currentColor;
    border-radius: 100%;
    height: 25px;
    width: 25px;
    border-top-color: transparent;
    animation: circle .6s infinite linear;
}

.lee-loading.circle-side {
    border: solid 2px #ddd;
    border-radius: 100%;
    height: 25px;
    width: 25px;
    border-top-color: currentColor;
    animation: circle .6s infinite linear;
}

.lee-loading.circle-arrow {
    border: solid 2px currentColor;
    border-radius: 100%;
    height: 25px;
    width: 25px;
    border-top-color: transparent;
    border-bottom-color: transparent;
    animation: circle-arrow .6s infinite linear;
    position: relative;
}

.lee-loading.circle-arrow:before,
.lee-loading.circle-arrow:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-color: transparent;
    border-width: 5px;
    border-top-color: currentColor;
}

.lee-loading.circle-arrow:before {
    transform: rotate(120deg);
    right: 2px;
    top: -5px
}

.lee-loading.circle-arrow:after {
    transform: rotate(-30deg);
    left: -2px;
    bottom: -5px
}

@keyframes circle {
    0% {
        transform: rotate(0deg)
    }

    100% {
        transform: rotate(360deg)
    }
}

@keyframes circlerev {
    0% {
        transform: rotate(0deg)
    }

    100% {
        transform: rotate(-360deg)
    }
}

@keyframes circle-arrow {
    0% {
        transform: rotate(0deg)
    }

    100% {
        transform: rotate(-360deg)
    }
}

@keyframes tm {
    0% {
        opacity: 1;
    }

    50% {
        opacity: .2;
    }

    100% {
        opacity: 1
    }
}

.lee-loading.progress {
    width: 100px;
    height: 6px;
    border-radius: 3px;
    background: #ddd;
}

.lee-loading.progress span {
    width: 0px;
    height: 100%;
    display: block;
    background: currentColor;
    border-radius: 3px;
    animation: progress 1.6s infinite linear;
}

.lee-loading.zebra-crossing {
    width: 100px;
    height: 6px;
    border-radius: 3px;
    background: #ddd;
}

.lee-loading.zebra-crossing span {
    width: 0px;
    height: 100%;
    display: block;
    border-radius: 3px;
    animation: progress1 1.6s infinite linear;
    background-image: linear-gradient(-45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%);
    background-color: currentColor;
    background-size: 6px;

}

@keyframes progress {
    100% {
        width: 100%;
    }
}

@keyframes progress1 {
    100% {
        width: 100%;
        background-position: 54px 0
    }
}

.lee-loading.flip-block {
    width: 30px;
    height: 30px;
    perspective: 80px;
    position: relative;
}

.lee-loading.flip-block:before {
    transform-style: preserve-3d;
    animation: flip 2.6s infinite linear;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    z-index: 10;
    content: '';
    background: currentColor;
}

.lee-loading.flip-block:after {
    transform-style: preserve-3d;
    animation: flip 2.6s infinite linear;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 8;
    content: '';
    background: #fc0;
}

.lee-loading.box {
    width: 30px;
    height: 30px;
    perspective: 100px;
}

.lee-loading.box .boxn {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    position: relative;
    transform-origin: 50% 50%;animation: flip 2.6s infinite linear;
}

.lee-loading.box span {
    position: absolute;
    width: 100%;
    height: 100%;
}

.lee-loading.box span:nth-child(1) {
    background: rgba(70,189,135,.3);
   transform: translateZ(15px);
}
.lee-loading.box span:nth-child(2) {
      background: rgba(70,189,135,.3);
   transform: translateZ(-15px);
}
.lee-loading.box span:nth-child(3) {
      background: rgba(70,189,135,.8);
   transform: rotateX(90deg) translateZ(15px);
}
.lee-loading.box span:nth-child(4) {
     background: rgba(70,189,135,.8);
   transform: rotateX(90deg) translateZ(-15px);
}
.lee-loading.box span:nth-child(5) {
     background: rgba(70,189,135,.6);
   transform: rotateY(90deg) translateZ(-15px);
}
.lee-loading.box span:nth-child(6) {
     background: rgba(70,189,135,.6);
   transform: rotateY(90deg) translateZ(15px);
}
@keyframes flip {
    0% {
        transform: rotateX(0deg) rotateY(0deg);
    }

    25% {
        transform: rotateX(180deg) rotateY(0deg);
    }

    50% {
        transform: rotateX(180deg) rotateY(180deg);
    }

    75% {
        transform: rotateX(0deg) rotateY(180deg);
    }

    100% {
        transform: rotateX(0deg) rotateY(0deg);
    }
}

.lee-loading.swim-block {
    width: 30px;
    height: 30px;
    position: relative;
}

.lee-loading.swim-block span {
    position: absolute;
    display: block;
    background: currentColor;
    animation: circle 1.6s infinite linear;
}

.lee-loading.swim-block span:nth-child(1) {
    width: 2px;
    height: 100%;
    left: 0;
    top: 0;
}

.lee-loading.swim-block span:nth-child(2) {
    height: 2px;
    width: 100%;
    left: 0;
    top: 0;
}

.lee-loading.swim-block span:nth-child(3) {
    width: 2px;
    height: 100%;
    left: 100%;
    top: 0;
}

.lee-loading.swim-block span:nth-child(4) {
    height: 2px;
    width: 100%;
    left: 0;
    top: calc(100% - 2px);
}

.lee-loading.croll-block {
    width: 30px;
    height: 30px;
    position: relative;
    box-sizing: border-box;
    animation: circlerev 1s infinite linear;
}


.lee-loading.croll-block span {
    box-sizing: border-box;
    left: 50%;
    top: 50%;
    width: 0%;
    height: 0%;
    transform: translate(-50%, -50%);
    position: absolute;
    display: block;
    border: solid 1px currentColor;
    animation: scale 1s infinite linear;
}

.lee-loading.croll-block span:nth-child(2) {
    animation-delay: .2s
}

.lee-loading.croll-block span:nth-child(3) {
    animation-delay: .4s
}

.lee-loading.croll-block span:nth-child(4) {
    animation-delay: .6s
}

.lee-loading.croll-block span:nth-child(5) {
    animation-delay: .8s
}

@keyframes scale {
    100% {
        width: 100%;
        height: 100%;
        opacity: 0;
        transform: translate(-50%, -50%) rotate(180deg);

    }
}

.lee-loading.wave {
    width: 50px;
    height: 50px;
    position: relative;
    box-sizing: border-box;
    border:solid 2px currentColor;
    overflow: hidden;border-radius: 100%;
    background: #fff;
}
.lee-loading.wave span{display: block;width: 100%;height: 100%;transform: translateY(-12px); 
}
.lee-loading.wave span:before {
    animation: circle 2.6s infinite linear;
    height: 1000%;
    width: 1000%;
    position: absolute;
    border-radius: 42%;
    top: 49px;
    left: 50%;
    margin-left: -500%;
    z-index: 8;
    background: currentColor;
    content: '';opacity: .4
}

.lee-loading.wave span:after {
    animation: circle 2.6s infinite linear;
    height: 600%;
    width: 600%;
    position: absolute;
    border-radius: 42%;
    top: 48px;
    left: 50%;
    margin-left: -300%;
    z-index: 10;
    background: currentColor;
    content: '';
}

</style>
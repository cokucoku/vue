<template>
    <transition name="fade">
        <div class="toast" v-if="show">
            <div class="icon">
                <div class="success" v-if="type=='success'"></div>
                <div class="error" v-if="type=='error'"></div>
                <div class="loading" v-if="type=='loading'">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="text">{{title}}</div>
        </div>
    </transition>
</template>
<script>
export default {
    data() {
        return {
            show: false,
            type:'success',
            title:'提示文字',
            duration:1500
        };
    },
    methods: {

    },
    mounted() {

    }
};
</script>
<style scoped>
.toast {
    background: rgba(0, 0, 0, .6);
    width: 140px;
    height: 140px;
    border-radius: 14px;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -70px;
    margin-top: -70px;
}
.toast .icon{width: 80px;height:80px;margin:15px auto 4px;position: relative;
}
.icon .error{transform: rotate(45deg);width: 100%;height: 100%;}
.icon .success{transform:rotate(45deg) translate(15px,-11px);width: 100%;height: 100%;}
.icon .error:before{content: '';width: 100%;height: 16px;background:#fff;position: absolute;top: 50%;margin-top: -8px}
.icon .error:after{content: '';height: 100%;width: 16px;background:#fff;position: absolute;left: 50%;margin-left: -8px}

.icon .success:before{content: '';width: 50%;height: 16px;background:#fff;position: absolute;bottom: 0%;}
.icon .success:after{content: '';height: 100%;width: 16px;background:#fff;position: absolute;left: 50%;margin-left: -8px}

.icon .loading{width: 100%;height: 100%;position: relative;}
.icon .loading span{position: absolute;width: 8px;height: 23%;background: rgba(255,255,255,1);border-radius: 5px;left: 50%;margin-left: -4px;transform-origin: center 40px;
    animation: fade 1.1s both infinite
}
.icon .loading span:nth-child(2){
    transform:rotate(30deg);
    animation-delay: 0.1s
}
.icon .loading span:nth-child(3){
    transform:rotate(60deg);
    animation-delay: 0.2s
}
.icon .loading span:nth-child(4){
    transform:rotate(90deg);
    animation-delay: 0.3s
}
.icon .loading span:nth-child(5){
    transform:rotate(120deg);animation-delay: 0.4s
}
.icon .loading span:nth-child(6){
    transform:rotate(150deg);animation-delay: 0.5s
}
.icon .loading span:nth-child(7){
    transform:rotate(180deg);animation-delay: 0.6s
}
.icon .loading span:nth-child(8){
    transform:rotate(210deg);animation-delay: 0.7s
}
.icon .loading span:nth-child(9){
    transform:rotate(240deg);animation-delay: 0.8s
}
.icon .loading span:nth-child(10){
    transform:rotate(270deg);animation-delay: 0.9s
}
.icon .loading span:nth-child(11){
    transform:rotate(300deg);animation-delay: 1s
}
.icon .loading span:nth-child(12){
    transform:rotate(330deg);animation-delay: 1.1s
}

@keyframes fade{
    0%{
        opacity: 1
    }
    50%{
        opacity: 0
    }
    100%{
        opacity: 1
    }
}

.toast .text{font-size: 18px;text-align: center;color: #fff}


.fade-enter-active,
.fade-leave-active {
    transition: all .3s;
    
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
   
}
</style>
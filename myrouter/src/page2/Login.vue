<template>
    <div class="container">
        <transition name="my">
            <div class="loadding" v-if="err">您还未登录</div>
        <h1 v-else>登录页面</h1>
        </transition>
    </div>
</template>
<script>
export default {
    data() {
        return {
            err: true
        }
    },
    mounted() {
        var _this = this
        setTimeout(function() {
            _this.err = false
        }, 2000)
    }
}
</script>
<style scoped>
.my-enter-active,.my-leave-active{
	transition: all .5s;
}
.my-enter,.my-leave-to{
	opacity: 0
}
.my-enter-to,.my-leave{
	opacity: 1
}
.loadding {
    width: 200px;
    height: 200px;
    background: #eee;
    border-radius: 12px;
    text-align: center;
    line-height: 200px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
</style>
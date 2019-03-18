<template>
    <div id="rapp">
        <div class="nav">
            <router-link to="/home" tag="li" active-class="on"><a>Home</a></router-link>
            <router-link to="/about" active-class="on">About</router-link>
            <router-link :to="{ name: 'user', params: { username: '' }}" active-class="on">用户中心</router-link>
            <router-link :to="{ name: 'userto', params: { username: 'admin' }}" active-class="on">admin</router-link>
            <router-link :to="{ name: 'userto', params: { username: 'LEEAO' }}" active-class="on">LEEAO</router-link>
        </div>
        <transition :name="transitionName" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
export default {
    data() {
        return {
            transitionName: '',

        }
    },
    mounted() {

        //var a=[1,2,12,13,69,6,8,45]
        // var b=a.sort(function (x,y) {
        //     return x-y
        // })
        //转箭头函数
        //var b=a.sort((x,y)=>x-y)
        //console.log(b)


    },
    watch: {
        '$route'(to, from) {
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'

        }
    }
}
</script>
<style>
* {
    margin: 0px;
    padding: 0px;
    list-style: none;
}

html,
body {
    width: 100%;
    overflow-x: hidden;
}

#rapp .nav {
    position: fixed;
    left: 0;
    top: 0px;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff
}

#rapp .nav a {
    flex-grow: 1;
    text-align: center
}

.slide-left-enter-active {
    animation: my-in .4s;
}

.slide-left-leave-active {
    animation: my-ll .4s;
}

.slide-right-enter-active {
    animation: my-out .4s;
}

.slide-right-leave-active {
    animation: my-lr .4s;
}

@keyframes my-in {
    0% {

        transform: translateX(100%);
    }

    100% {
        transform: translateX(0);
    }
}

@keyframes my-out {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(0);

    }
}

@keyframes my-ll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-100%);

    }
}

@keyframes my-lr {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(100%);

    }
}
</style>
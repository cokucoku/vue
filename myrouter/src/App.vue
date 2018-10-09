<template>
    <div id="rapp">
        <div class="nav">
            <router-link to="/home">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link :to="{ name: 'user', params: { username: 'coku' }}">coku</router-link>
            <router-link :to="{ name: 'user', params: { username: 'admin' }}">admin</router-link>
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

#rapp .nav{position: fixed;left: 0;top: 0px;width: 100%;height: 40px;display: flex;align-items: center;justify-content: center;background: #fff}
#rapp .nav a {
  flex-grow: 1;
  text-align: center
}

.slide-left-enter-active {
    animation: my-in .4s;
}

.slide-left-leave-to {
    animation: my-ll .1s;
}

.slide-right-enter-active {
    animation: my-out .4s;
}

.slide-right-leave-to {
    animation: my-lr .1s;
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
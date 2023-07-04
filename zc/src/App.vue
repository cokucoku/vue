<template>
  <transition :name="transitionName">
    <router-view/>
  </transition>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: ''
    }
  },
  watch: {
    $route (to, from) {
      if (to.meta.index > from.meta.index) {
        this.transitionName = 'slide-left'
      } else {
        this.transitionName = 'slide-right'
      }
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0px;
  list-style: none;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

.page {
  width: 100vw;
  position: absolute;
}

.page.home {
  background: #42b983;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
}

.page.about {
  background: #b92519;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
}

.page.photo {
  background: #3d90b9;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
}


.btn {
  width: 60%;
  background: #fff;
  border-radius: 4px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0
}

.page.home a {
  color: #42b983;
}


/* 路由转场样式 */
.slide-right-enter-active,.slide-right-leave-active,.slide-left-enter-active,.slide-left-leave-active  {
    transition: all .5s ease-in-out;
}
.slide-right-enter {
    transform: translateX(-100%);
}
.slide-right-leave-active {
    transform: translateX(40%);
}
.slide-left-enter {
    transform: translateX(100%);
}
.slide-left-leave-active {
    transform: translateX(-40%);
}





</style>

<template>
    <div id="rapp">
        <nav>
            <ul>
                <myli href="/">Home</myli>
                <myli href="/about">About</myli>
            </ul>
        </nav>
        <slot>{{ViewComponent}}</slot>
    </div>
</template>
<script>

import Myli from './components/Myli.vue'
export default {
    components: {
        Myli
    },
    data() {
        return {
            cururl: location.pathname,
            router: {'/': './components/page/Home.vue','/about': './components/page/About.vue'
            }
        }
    },
    computed: {
        ViewComponent() {
            return this.router[this.cururl]
            //return "mypagessss"
        }
    },
    //render: h => h('h1',["h111111111"])
}
window.addEventListener('popstate', () => {
  //app.cururl = location.pathname
})
</script>
<style>
* {
    margin: 0px;
    padding: 0px;
    list-style: none;
}

#rapp {
    margin: 20px auto;
    background: #eee;
    width: 60%;
    padding: 20px;
}

nav li {
    display: inline-block;
    margin: 0 4px;
}

nav li a {
    color: #999;
    text-decoration: none
}

nav li a.on {
    color: #f60
}
</style>
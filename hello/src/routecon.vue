<template id="app">
    <div id="con">
        DFDF
    </div>
</template>
<script>
import Vue from 'vue'

const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p>home page</p>' }
const About = { template: '<p>about page</p>' }
const Todo = { template: '<p>todo page</p>' }
const Othertodo = { template: '<p>othertodo page</p>' }
const routes = {
    '#': Home,
    '#about': About,
    '#todo': Todo,
    '#othertodo': Othertodo
}
new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})

export default{
 
}
</script>
<style scoped>
</style>
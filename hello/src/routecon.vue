<template>
    <div id="con">dfdf</div>
</template>
<script>
import Vue from 'vue'
import $ from 'jquery'
const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p>home page</p>' }
const About = { template: '<p>about page</p>' }
const Todo = { template: '<p>todo page</p>' }
const Othertodo = { template: '<p>othertodo page</p>' }
const routes = {
    'no': NotFound,
    '': Home,
    '#about': About,
    '#todo': Todo,
    '#othertodo': Othertodo
}
var i = 0;


export default {
    data() {
        return {
            currentRoute: window.location.hash
        }
    },
    computed: {
        ViewComponent() {
            return routes[this.currentRoute] || NotFound
        }
    },
    mounted() {
        var vm = this;
        window.addEventListener("hashchange", function() {
            vm.currentRoute = window.location.hash;
            $(vm.$el).addClass('move');
            $(vm.$el).html(vm.ViewComponent.template)
            setTimeout(aa, 400)

            function aa(argument) {
                $(vm.$el).removeClass('move')
            }
        });
    }
}
</script>
<style>
* {
    margin: 0px;
    padding: 0px;
    list-style: none
}

html,
body {
    background: #f0f0f0;
    width: 100%;
    overflow-x: hidden;
}

.move {
    animation: moves .4s ease both;
}

@keyframes moves {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0);
    }
}
</style>
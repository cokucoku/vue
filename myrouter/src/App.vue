<template>
    <div id="app">
        <nav>
            <ul>
                <myli href="/">Home</myli>
                <myli href="/about">About</myli>
            </ul>
        </nav>
        <slot></slot>
    </div>
</template>
<script>
import Myli from './components/Myli.vue'

export default {
    components: {
        Myli
    }
}
</script>
<style>
* {
    margin: 0px;
    padding: 0px;
    list-style: none;
}

#app {
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
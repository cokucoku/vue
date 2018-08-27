<template>
    <div id="routeapp">
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#todo">Todo</a></li>
                <li><a href="#othertodo">Othertodo</a></li>
            </ul>
        </nav>
        <routecon></routecon>
    </div>
</template>
<script>
import routecon from './routecon.vue'
export default {
    components: {
        routecon
    }
}
</script>
<style scoped>
nav li {
    display: inline-block;
    margin: 0 10px;
}
</style>
<template>
    <div id="todoapp">
        <h1>My Todo App!</h1>
        <todolist></todolist>
        <div id="xxx"><topmovie></topmovie></div>
    </div>
</template>
<script>
import todolist from './components/todo/todolist.vue'
export default {
    components: {
        todolist
    }
}
</script>
<style>
#xxx{width: 60%;background: #f0f0f0}
#xxx li{border-bottom: solid 1px #f60}
#todoapp {
    max-width: 400px;
    margin: 0 auto;
    line-height: 1.4;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #32485F;
}

h1 {
    text-align: center;
}
</style>
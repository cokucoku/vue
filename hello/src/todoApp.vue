<template>
    <div id="todoapp">
        <h1>My Todo App!</h1>
        <todolist></todolist>
        <topmovie></topmovie>
    </div>
</template>
<script>
import todolist from './components/todo/todolist.vue'
import topmovie from './topmovie.vue'
export default {
    components: {
        todolist,topmovie
    }
}
</script>
<style scoped>
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
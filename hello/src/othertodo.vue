<template>
    <div id="todoapp">
        <h1>My Todo App!</h1>
        <todolist></todolist>
        <qqmusic></qqmusic>
        <bdsearch></bdsearch>
    </div>
</template>
<script>
import todolist from './components/othertodo/todolist.vue'
import qqmusic from './components/othertodo/qqmusic.vue'
import bdsearch from './components/othertodo/bdsearch.vue'
export default {
    components: {
        todolist,qqmusic,bdsearch
    }
}
</script>
<style scoped>
input{box-sizing: border-box;}
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
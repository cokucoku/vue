<template>
    <div id="todoapp">
        <todolist :todos="todos">My Todo App!</todolist>
        <lee-input v-model="myvalue" @gb="gbhandle"></lee-input>
        {{myvalue}}
        <lee-time></lee-time>
    </div>
</template>
<script>
import todolist from './components/mytodo/todolist.vue'
import leeInput from './components/mytodo/leeInput.vue'
import leeTime from './components/mytodo/leeTime.vue'
export default {
    components: {
        todolist,leeInput,leeTime
    },
    data() {
        return {
            myvalue:'leeinput',
            todos: [{
                    text: '张三'
                },
                {

                    text: '李四'
                },
                {
                    text: '王五'
                },
                {
                    text: '猪八'
                }
            ]
        }
    },
    methods:{
        gbhandle(v){
            this.todos.unshift({text:v})
            //this.todos.splice(this.todos.length-1,0,{text:v})


        }
    }
}
</script>
<style>
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
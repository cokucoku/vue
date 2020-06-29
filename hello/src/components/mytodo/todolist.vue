<template>
    <div><h1><slot></slot></h1>
        <todoinput @submit="add"></todoinput>
        <ul v-if="todos.length">
            <todoitem v-model="mycheck[idx]" v-for="(todo,idx) in todos" :key="idx" :todo="todo" @remove="remove(idx)"></todoitem>
            {{mycheck}}
        </ul>
        <p v-else>
            没有数据
        </p>
    </div>
</template>
<script>
import todoinput from './todoinput.vue'
import todoitem from './todoitem.vue'
export default {
    components: {
        todoinput,
        todoitem
    },
    props: {
        todos: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data() {
        return {
            mycheck: []
        }
    },
    mounted() {
        for (var i = 0; i < this.todos.length; i++) {
            this.mycheck.push(false)
        }
    },
    methods: {
        remove: function(el) {
            if (this.mycheck[el]) {
                this.todos.splice(el, 1)
                this.mycheck.splice(el, 1)
            }

        },
        add: function(v) {
            this.todos.push({ text: v })
            this.mycheck.push(false)
        }

    }
}
</script>
<style scoped>
ul {
    margin: 0;
    padding: 0
}
</style>
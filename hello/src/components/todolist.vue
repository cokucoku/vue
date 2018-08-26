<template>
    <div>
        <todoinput @submit="add"></todoinput>
        <ul v-if="todos.length">
            <todoitem v-for="(todo,idx) in todos" :key="idx" :todo="todo" @remove="remove(idx)"></todoitem>
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
    data() {
        return {
            todos: [{
                    text: '张三'
                },
                {

                    text: '李四'
                },
                {
                    text: '王五'
                }
            ]
        }
    },
    methods: {
        remove: function(el) {
            this.todos.splice(el, 1)
        },
        add: function(v) {
            this.todos.push({text:v})
        }

    }
}
</script>
<style scoped>
</style>
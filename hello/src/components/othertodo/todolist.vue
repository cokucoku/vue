<template>
    <div>
        <todoinput @keyup.enter="addtodo" v-model="newip"></todoinput>
        <div v-if="todos.length" class="todolist">
            <transition-group name="list" tag="ul">
                <todoitem v-for="(todo,idx) in todos" :key="todo.text" :todo="todo" @remove="remove(idx)"></todoitem>
            </transition-group>
        </div>
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
            newip: "",
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
        addtodo: function() {
            if (this.newip) {
                this.todos.push({ text: this.newip })
            }

        }

    }
}
</script>
<style scoped>
.todolist li{transition: all 1s;}
.list-enter-active,
.list-leave-active {
    transition: all 1s;
}

.list-leave-active {
    position: absolute;
}

.list-enter,
.list-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}
</style>
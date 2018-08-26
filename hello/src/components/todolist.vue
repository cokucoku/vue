<template>
    <div>
        <todoinput></todoinput>
        <ul v-if="todos.length">
            <todoitem v-for="(todo,idx) in todos" :key="todo.id" :todo="todo" @remove="removetodo(idx)"></todoitem>
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
    data(){
    	return{
    		todos:[
    		{
    			id:1,
    			text:'张三'
    		},
    		{
    			id:2,
    			text:'李四'
    		},
    		{
    			id:3,
    			text:'王五'
    		}
    		]
    	}
    },
    methods:{
    	removetodo:function (el) {
    		this.todos.splice(el, 1)
    		
    	}
    }
}
</script>
<style scoped>
</style>
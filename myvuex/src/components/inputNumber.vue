<template>
    <div class="myleeao">
        <div class="inputNumber">
            <button @click="increment">+</button>
            <input type="text" :value="count" @input="update">
            <button @click="decrement">-</button>
        </div>
        <div class="user" v-if="login">{{user}} <a href="#" @click="out">登出</a></div>
        <div class="todos">
            <ul>
                <li v-for="todo in donetodos">{{todo.text}}</li>
            </ul>
            <p>共{{doneCount}}个</p>
            <p>id为2的事务是</p>
            <ul>
                <li v-for="todo in doneGetById">{{todo.text}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { mapState } from 'vuex' //辅助函数
import { mapGetters } from 'vuex' //辅助函数
export default {
    computed: {
        ...mapState({
            count: function(state) { return state.count }, //函数写法
            user: state => state.user,
            login: state => state.login
        }),
        ...mapGetters({
            // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
            donetodos: 'doneTodos',
            doneCount: 'doneTodosCount'
        }),
        // todos() {
        //     return this.$store.getters.doneTodos
        // },
        // doneTodosCount() {
        //     return this.$store.getters.doneTodosCount
        // },
        doneGetById(){
            return this.$store.getters.getTodoById(2)
        }
        // user() {
        //     return this.$store.state.user
        // }
    },
    mounted() {
        
        var _this = this
        axios({
            method: 'get',
            url: 'http://localhost:81/api/fang.asp',
            params: { area: 'pudong' }
        }).then(function(res) {
            if (res.status == 200) {
                _this.in()

            }
        });
    },
    methods: {
        increment() {
            //this.$store.commit('increment',4)
            var a=this.$store.dispatch('jia',15)
            console.log(a)
        },
        decrement() {
            this.$store.commit('decrement',2)
        },
        out() {
            this.$store.commit('out')
        },
        in () {
            this.$store.commit('in')
        },
        update(e){
            var v=Number(e.target.value)
            this.$store.commit('update',v)
        }
    }
}
</script>
<style scoped>
</style>
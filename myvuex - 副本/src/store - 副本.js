import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        count: 0,
        login: null,
        user: 'leeaos333',
        todos: [
            { id: 1, text: 'Html5', done: true },
            { id: 2, text: 'Css3', done: true },
            { id: 3, text: 'Javascript', done: false },
            { id: 2, text: 'Vue', done: true },
            { id: 5, text: 'Vuex', done: true },
            { id: 6, text: 'Webpack', done: false },
        ]
    },
    mutations: {
        increment(state, n) {
            state.count += n
        },
        decrement(state, n) {
            state.count -= n
        },
        out(state) {
            var storage = window.localStorage
            state.login = false
            storage.setItem('login', 0)

        },
        in (state) {
            var storage = window.localStorage
            state.login = true
            storage.setItem('login', 1)
        },
        update(state,value){
            state.count =value
        }
    },
    getters: { //类似computed计算属性
        doneTodos(state) {
            return state.todos.filter(todo => todo.done)
        },
        doneTodosCount(state, getters) {
            return getters.doneTodos.length
        },
        // getTodoById: (state) => (id) => {
        //     return state.todos.filter(todo => todo.id === id)
        // },
        getTodoById(state) {
            return function(id) {
                return state.todos.filter(function(todo) {
                    return todo.id === id
                })
            }
        }
    },
    actions: {
        jia({commit},opt) {
            setTimeout(() => {
                commit('increment',opt.amount)
            }, 1000)
        }
    }
})
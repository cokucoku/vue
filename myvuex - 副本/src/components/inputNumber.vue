<template>
    <div class="myleeao">
        <div class="inputNumber">
            <button @click="increment">+</button>
            <input type="text" :value="count" @input="update">
            <button @click="decrement">-</button>
        </div>
        <div v-cloak class="user" v-if="login&&login!=null">{{user}} <a href="#" @click="loginout">登出</a></div>
        <div v-cloak class="user" v-if="!login&&login!=null">您好，游客。<a href="#" @click="loginin">立即登录</a></div>
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
import { mapState,mapGetters } from 'vuex' //辅助函数

//import { mapGetters } from 'vuex' //辅助函数
export default {
    computed: {
        ...mapState({
            count: function(state) { return state.count }, //函数写法
            //user: state => state.user,
            user: 'user',
            login: 'login'
        }),
        ...mapGetters({
            // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
            donetodos: 'doneTodos',
            doneCount: 'doneTodosCount',
            //doneGetById: 'getTodoById',
        }),
        // todos() {
        //     return this.$store.getters.doneTodos
        // },
        // doneTodosCount() {
        //     return this.$store.getters.doneTodosCount
        // },
        doneGetById() {
            return this.$store.getters.getTodoById(3)
        }
        // user() {
        //     return this.$store.state.user
        // }
    },
    mounted() {
        var _this = this
        var storage = window.localStorage
        var loginStatus = storage.getItem('login')
        console.log(loginStatus)
        if (loginStatus == null) {
            fetch('https://yesno.wtf/api') //判断是否登录 模拟
                .then(function(response) {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .then(function(myJson) {
                    if (myJson.answer == 'no') {
                        _this.loginout()
                        //storage.setItem('login', 0)
                    } else {
                        _this.loginin()
                        //storage.setItem('login', 1)
                    }
                });
        } else {
            if (loginStatus == 1) {
                _this.loginin()

            } else {
                _this.loginout()
            }
        }

    },
    methods: {
        increment() {
            //this.$store.commit('increment',4)
            //this.$store.dispatch('jia', 15)
            this.$store.dispatch({
                type:'jia',
                amount:15
            })//以对象形式分发
        },
        decrement() {
            this.$store.commit('decrement', 2)
        },
        loginout() {
            this.$store.commit('out')
        },
        loginin() {
            this.$store.commit('in')
        },
        update(e) {
            var v = Number(e.target.value)
            this.$store.commit('update', v)
        }
    }
}
</script>
<style scoped>
[v-cloak] {
    display: none
}
</style>
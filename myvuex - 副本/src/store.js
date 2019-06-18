import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
    state: {
        count: 2
    },
    mutations: {
        jia(state, n) {
            state.count += n
        }
    },
    actions: {},
    getters: {
        doubleCount(state,getters,rootState) {
            console.log(rootState)
            //return state.count * 2
        }
    }
}

const moduleB = {
    state: {
        user:'leeao'
    },
    mutations: {},
    actions: {},
    getters: {
        quaCount(a,b,c,d) {
            console.log(b)
            //return state.count * 2
        }
    }
}

export default new Vuex.Store({
    modules: {
        a: moduleA,
        b: moduleB
    }
})
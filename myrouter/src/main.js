import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import About from './page/About.vue'
import Home from './page/Home.vue'
import User from './page/User.vue'
import UserIndex from './page/UserIndex.vue'
import Nofound from './page/Nofound.vue'
Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
    { path: '*', component: Nofound },
    {
        path: '/user',
        component: UserIndex,
        name: 'user',
        meta: { title: '用户中心' }
    },
    {
        path: '/user/:username',
        component: User,
        name: 'userto',
        //meta: { title: '用户中心' }
    },
    { path: '/', component: Home, meta: { title: '首页' } },
    { path: '/home', component: Home, meta: { title: '首页' } },
    { path: '/about', component: About, meta: { title: '关于我们' } }
]
const router = new VueRouter({
     mode: 'history',
     base:'/app',
    routes, // (缩写) 相当于 routes: routes


})

router.afterEach((to, from, next) => {

    var home = new RegExp('/home');
    var about = new RegExp('/about');
    var result1 = home.test(to.path);
    var result2 = about.test(to.path);
    if (result1) {
        document.body.bgColor = "#eee"
    }
    if (result2) {
        document.body.bgColor = "#f00"
    }
    window.document.title = to.meta.title||to.params.username
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
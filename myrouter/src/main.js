import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import About from './page/About.vue'
import Login from './page/Login.vue'
//import Home from './page/Home.vue'
const Home = () => import('./page/Home.vue')//路由懒加载
import User from './page/User.vue'
import UserNews from './page/UserNews.vue'
import UserTodos from './page/UserTodos.vue'
import UserTodosDetails from './page/UserTodosDetails.vue'
import UserIndex from './page/UserIndex.vue'
import Nofound from './page/Nofound.vue'
Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
    { path: '*', component: Nofound },
    { path: '/login', component: Login },
    { path: '/a', redirect: { name: 'user' } }, //重定向和别名
    {
        path: '/user',
        component: UserIndex,
        name: 'user',
        meta: { title: '用户中心', requiresAuth: true },
        beforeEnter: (to, from, next) => { //路由独享的守卫,可以在进入时加中间件判断是否登录
            console.log('路由独享的守卫')
            next()
        }
    },
    {
        path: '/user/:username',
        component: User,
        name: 'userto',
        props: true,
        children: [{
                name: 'todos',
                path: 'todos',
                component: UserTodos
            },
            {
                name: 'news',
                path: 'news',
                component: UserNews
            }
        ]
    },
    {
        path: '/user/:username/todos/:id',
        component: UserTodosDetails,
        name: 'todoDetails'
    },
    { path: '/', component: Home, meta: { title: '首页' } },
    { path: '/home', component: Home, meta: { title: '首页' } },
    { path: '/about', component: About, meta: { title: '关于我们' } }
]
const router = new VueRouter({
    mode: 'history',
    //base: '/app',
    routes, // (缩写) 相当于 routes: routes
    scrollBehavior(to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }


})
router.beforeEach((to, from, next) => { //方法一：全局守卫方式判断是否登录 
    if (to.matched.some(record => record.meta.requiresAuth)) {
        fetch('https://yesno.wtf/api')
            .then(function(response) {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(function(myJson) {
                if (myJson.answer == 'no') {
                    next({
                        path: '/login',
                        //query: { redirect: to.fullPath }
                    })

                } else {
                    next()
                }
            });
    } else {
        next()
    }

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
    window.document.title = to.meta.title || to.params.username
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
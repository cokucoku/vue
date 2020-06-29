import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import photoslist from './Picsum/photoslist.vue'
import photosdetail from './Picsum/photosdetail.vue'
import Nofound from './Picsum/Nofound.vue'
Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
    { path: '*', component: Nofound,meta: { title: '找不到页面' }  },
    { path: '/', component: photoslist, meta: { title: '图片列表' } },
    {
        path: '/photo/:id',
        component: photosdetail,
        meta: { title: '图片详细' }
    }
]
const router = new VueRouter({
    mode: 'history',
    routes
})
router.afterEach((to, from, next) => {
    window.document.title = to.meta.title
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
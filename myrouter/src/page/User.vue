<template>
    <div style="margin-top: 40px;min-height: 1560px;">
        <div v-if="login">
        <p>用户名：{{ $route.params.username }}<span @click="back">返回</span></p>
        <ul class="utab">
            <router-link :to="{ name: 'todos'}" tag="li" active-class="on"><a>todos</a></router-link>
            <router-link :to="{ name: 'news'}" tag="li" active-class="on"><a>news</a></router-link>
        </ul>
        <router-view></router-view>
    </div>
    <div v-else style="hight:100vh;text-align: center;line-height: 100vh">对不起，你还未登录</div>
    </div>
</template>
<script>
export default {
    beforeRouteEnter(to, from, next) {//方法二：组件内守卫判断是否登录
        next(vm => {//只能这种方式才能使用this
            fetch('https://yesno.wtf/api')
            .then(function(response) {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(function(myJson) {
                console.log(myJson)
                if(myJson.answer=='no'){
                  vm.login=false
                  setTimeout(function () {
                    console.log("gogo")
                      next({
                        path: '/login'
                    })
                  },2000)

                }else{
                   vm.login=true
                }
            });
       })
    },
    beforeRouteUpdate(to, from, next) {
        var _this=this
        fetch('https://yesno.wtf/api')
            .then(function(response) {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(function(myJson) {
                console.log(myJson)
                if(myJson.answer=='no'){
                  _this.login=false
                  setTimeout(function () {
                    console.log("gogo")
                      next({
                        path: '/login'
                    })
                  },2000)

                }else{
                   _this.login=true

                }
            });
            next()
    },
    beforeRouteLeave(to, from, next) {

        next()
    },
    data() {
        return {
            first: true,
            list: [],
            login:true
        }
    },
    mounted() {

    },
    methods: {
        back() {
            this.$router.go(-1)
        }
    }
}
</script>
<style>
.utab {
    display: flex;
}

.utab li {
    margin: 0 12px;
}

p {
    background: #aaa;
    padding: 12px;
}

.newslist li {
    line-height: 32px;
    border-bottom: solid 1px #ddd;
    height: 32px;
    overflow: hidden;
}
.tip{
        position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
</style>
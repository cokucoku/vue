<template>
    <div>
        Todos<br>
        <p v-if="list.length<1">加载中</p>
        <ul v-else>
            <router-link tag="li" :to="{name: 'todoDetails', params: { id: item.id }}" v-for="item in list"><a>{{item.title}}</a></router-link>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: []
        }
    },
    created() {
        var _this=this
        var username = this.$route.params.username
        fetch('https://my-json-server.typicode.com/'+username+'/jsonserver/todos')
            .then(function(response) {
                if(response.ok){
                   return response.json(); 
                }
                
            })
            .then(function(myJson) {
                setTimeout(function () {
                    _this.list=myJson
                },2000)
                
            });
    }
}
</script>
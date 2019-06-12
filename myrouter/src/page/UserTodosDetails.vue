<template>
    <div style="margin-top: 40px;">
         <p v-if="!details">加载中</p>
        <div v-else>
            <p>序号：{{details.id}}</p>
            <p>标题：{{details.title}}</p>
            <p>完成：{{details.complete}}</p>
            <a @click="back" href="javascript:void(0)">返回</a>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            details: ''
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        }
    },
    mounted() {
        var _this = this
        var username = this.$route.params.username
        var id = this.$route.params.id
        fetch('https://my-json-server.typicode.com/' + username + '/jsonserver/todos/' + id)
            .then(function(response) {
                if (response.ok) {
                    return response.json();
                }

            })
            .then(function(myJson) {
                setTimeout(function() {
                    _this.details = myJson
                }, 2000)

            });
        
    }
}
</script>
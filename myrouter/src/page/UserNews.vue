<template>
    <div>
        News<br>
        <p v-if="list.length<1">加载中</p>
        <ul class="newslist" v-else>
            <li v-for="item in list">{{item.title}}</li>
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
    mounted() {
        var _this = this
        var username = this.$route.params.username
        fetch('https://my-json-server.typicode.com/' + username + '/jsonserver/news')
            .then(function(response) {
                if (response.ok) {
                    return response.json();
                }

            })
            .then(function(myJson) {
                setTimeout(function() {
                    _this.list = myJson
                    
                }, 2000)
            });
    }
}
</script>
<style scoped>
	.newslist li {line-height: 32px;border-bottom: solid 1px #ddd;height: 32px;overflow: hidden;}
</style>
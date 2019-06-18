<template>
    <div style="margin-top: 40px;min-height: 1560px;">
        <p>这是ABOUT页面</p>
        <p v-if="list.length<1">加载中</p>
        <ul class="newslist" v-else>
             <router-link tag="li" :to="{name: 'abnewDetails', params: {username:'cokucoku',id: item.id }}" v-for="item in list"><a>{{item.title}}</a></router-link>
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
        var _this = this
        var username = this.$route.params.username
        fetch('https://my-json-server.typicode.com/cokucoku/jsonserver/news')
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
p {
    padding: 12px;
}

span {
    margin: 0 12px;
}

.newslist li {
    line-height: 32px;
    border-bottom: solid 1px #ddd;
    height: 32px;
    overflow: hidden;
}
</style>
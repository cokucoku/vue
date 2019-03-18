<template>
    <div style="margin-top: 40px;min-height: 1560px;">
        <p>用户名：{{ $route.params.username }}<span @click="back">返回</span></p>
    </div>
</template>
<script>
export default {
    beforeRouteEnter (to, from, next) {

        next()
    },
    beforeRouteUpdate   (to, from, next) {
        
        next()
        

    },
    beforeRouteLeave (to, from, next) {
        
        next()
    },
    methods: {
        back() {
            this.$router.go(-1)
        }
    }
}
</script>
<style>
</style>
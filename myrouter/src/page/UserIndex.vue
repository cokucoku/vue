<template>
    <div style="margin-top: 40px;min-height: 1560px;">
        <p>欢迎来到用户中心
            <span @click="back">返回</span></p>
    </div>
</template>
<script>
export default {
    methods: {
        back() {
            this.$router.go(-1)
        }
    }
}
</script>
<style>
</style>
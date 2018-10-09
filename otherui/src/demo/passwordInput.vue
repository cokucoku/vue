<template>
    <password-input @change="yourpassword" :visible.async="kg" :pass="password"></password-input>
</template>
<script>
export default {
    data() {
        return {
            kg: true, //开关显示
            password: '123456', //设置正确的密码
        };
    },
    methods: {
        yourpassword(value) {
            console.log(value) //value为1是密码正确 -1为密码错误
        }
    }
}
</script>
<style>
</style>
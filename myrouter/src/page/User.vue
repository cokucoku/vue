<template>
	<div style="margin-top: 40px">
    <p>用户名：{{ $route.params.username }}<span @click="back">返回</span></p>
</div>
</template>
<script>
export default {
	methods:{
    	back(){
    		this.$router.go(-1)
    	}
    }
}
</script>
<style>
</style>
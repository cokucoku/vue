<template>
    <lee-input-number v-model="num" @change="handleChange" :min="3" :max="16" label="描述文字"></lee-input-number>
</template>
<script>
export default {
    data() {
        return {
            num: 135 //input-number的值
        };
    },
    methods: {
        handleChange(value) { //input-number返回的数值
            console.log(value);
        }
    }
}
</script>
<style>
</style>
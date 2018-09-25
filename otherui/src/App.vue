<template>
 <el-input-number v-model="num1" @change="handleChange" size="small" :min="1" :max="10" label="描述文字"></el-input-number>
</template>
<script>
export default {
    data() {
        return {
            num1: 1
        };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
}
</script>
<style>
#app i {
    font-size: 34px
}
</style>
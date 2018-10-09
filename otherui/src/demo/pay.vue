<template>
    <lee-button type="primary" @click="pay">选择支付方式:{{pays}}</lee-button>
</template>
<script>
export default {
    data() {
        return {
           
        };
    },
    methods: {
        pay() {
            this.$pay({
                'choose': ['微信支付', '支付宝', '花呗支付', '农业银行', '余额宝'],
                'bg': '#4eccc4'
            });
        }
    },
    computed: {
        pays() {
            return this.$paychoose()
        }
    }
}
</script>
<style>
</style>
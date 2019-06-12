<template>
    <div>
        <leeButton type="primary"  @click="pay">支付</leeButton>
        {{payresult}}
        <img src="./assets/logo.png" alt="">
    </div>
</template>
<script>
import './assets/a.css'
export default {
    data() {
        return {

        };
    },
    methods: {
        pay() {
            var config = {
                bg: '#46bd87',
                choose: ['微信支付', '支付宝', '花呗支付', '农业银行', '窝窝收款']
            }
            this.$pay(config)
        }
    },
    computed: {
        payresult() {
            return this.$paychoose()
        }
    }
}
</script>
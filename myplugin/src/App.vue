<template>
    <div id="mytest">
        <loading :duration='4' v-if="isshow"></loading>
        <button @click="load">显示loadding</button>
        <button @click="toast">显示taost弹出框</button>
        <button @click="pay">我要支付</button>
        你選擇了{{pays}}
    </div>
</template>
<script>
export default {
    name: "app",
    data() {
        return {
            isshow:false
        };
    },

    computed: {
        pays() {
            return this.$mychoose()
        }
    },
    methods: {
        load() {
            this.isshow=true
        },
        toast() {
            this.$toast("你好", { 'duration': 3000, 'thme': 'red' });
        },
        pay() {
            this.$pay({
                'choose': ['微信支付', '支付宝', '花呗支付', '农业银行', '余额宝'],
                'bg': '#4eccc4'
            });
        }
    }
};
</script>
<style>
#mytest {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
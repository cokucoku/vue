<template>
    <div id="mytest">
        <loading :duration='8'></loading>
        <button @click="toast">显示taost弹出框</button>
        <button @click="pay">我要支付</button>
        你選擇了{{pays}}
    </div>
</template>
<script>
//var a=this.$children;
// setTimeout(function () {
//     a[0].show=false;
// },2000)
export default {
    name: "app",
    data() {
        return {
            pays: ''
        };
    },
    methods: {
        toast() {
            this.$toast("你好", { 'duration': 3000, 'thme': 'red' });
        },
        pay() {
            this.$pay({
                'choose': ['微信支付', '支付宝', '花呗支付', '农业银行', '余额宝'],
                'bg': '#4eccc4',
                clickback: function(el) {
                    this.pays=el
                }
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
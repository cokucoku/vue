<template>
    <div>
        <password-input @change="yourpassword" :visible.async="kg" :pass="password"></password-input>
        <input-number v-model="num" @change="handleChange" :min="3" :max="16" label="描述文字"></input-number>
        <br>
        <br>
        <hr>
        <br>
        <lee-button>默认按钮</lee-button>
        <lee-button type="primary" @click="pay">选择支付方式:{{pays}}</lee-button>
        <lee-button type="success" @click="city">城市选择{{selcity}}</lee-button>
        <lee-button type="info">信息按钮</lee-button>
        <lee-button type="warning">警告按钮</lee-button>
        <lee-button type="danger">危险按钮</lee-button>
        <br>
        <br>
        <hr>
        <br>
        <br>
    </div>
</template>
<script>
export default {
    data() {
        return {
            kg: true, //password-input的开关显示
            password: '147853', //password-input的密码
            num: 135 //input-number的值
        };
    },
    methods: {
        handleChange(value) { //input-number返回的数值
            console.log(value);
        },
        yourpassword(value) {
            console.log(value) //password-input返回的数值 value为1是密码正确 -1为密码错误
        },
        pay() {
            this.$pay({
                'choose': ['微信支付', '支付宝', '花呗支付', '农业银行', '余额宝'],
                'bg': '#4eccc4'
            });
        },
        city() { //展开城市选择
            this.$city();
        },
    },
    computed: {
        pays() {
            return this.$paychoose()
        },
        selcity() {
            if (this.$citysel().province) {
                var p = this.$citysel().province || ''
                var c = this.$citysel().city || ''
                var d = this.$citysel().district || ''
                return p + "/" + c + "/" + d || ''
            }
        }
    }
}
</script>
<style>
</style>
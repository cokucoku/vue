<template>
    <div class="demo">
        <div id="button">
            <lee-button>默认按钮</lee-button>
            <lee-button type="primary">主要按钮</lee-button>
            <lee-button type="success">成功按钮</lee-button>
            <lee-button type="info">信息按钮</lee-button>
            <lee-button type="warning">警告按钮</lee-button>
            <lee-button type="danger">危险按钮</lee-button>
        </div>
        <div id="InputNumber">
            <lee-input-number v-model="num1" @change="handleChange" :min="3" :max="16" label="描述文字"></lee-input-number>{{num1}}
        </div>
        <div id="passwordInput">
            <lee-password-input @change="yourpassword" :visible.async="kg" :pass="password"></lee-password-input>
        </div>
    </div>
</template>
<script>
export default {
    name: "app",
    data() {
        return {
            num1: 135,
            password: '147853',
            kg: true
        }
    },
    mounted() {},
    computed: {

    },
    methods: {
        handleChange(value) {
            console.log(value);
        },
        yourpassword(value) {
            console.log(value)//value为1是密码正确 -1为密码错误
        }
    }
};
</script>
<style>
* {
    margin: 0px;
    padding: 0px;
    list-style: none;
    box-sizing: border-box;
}

.demo {
    padding: 20px;
}
</style>
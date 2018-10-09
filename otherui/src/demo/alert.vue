<template>
    <div class="demo">
        <lee-alert title="成功提示的文案" type="success" :closable="false" show-icon></lee-alert>
        <lee-alert title="消息提示的文案" type="info"></lee-alert>
        <lee-alert title="警告提示的文案" type="warning" @close="hello"></lee-alert>
        <lee-alert title="错误提示的文案" type="error"></lee-alert>
    </div>
</template>
<script>
export default {
    methods: {
        hello() {
            alert('你要关闭提示么？');
        }
    }
}
</script>
<style>
.demo .lee-alert {
    margin-top: 20px
}
</style>
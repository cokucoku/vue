<template>
    <lee-button type="success" @click="city">城市选择{{selcity}}</lee-button>
</template>
<script>
export default {
    data() {
        return {

        };
    },
    methods: {

        city() { //展开城市选择
            this.$city();
        },
    },
    computed: {
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
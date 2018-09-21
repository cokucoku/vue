<template>
    <div>
        <input type="text">
        <li>{{label}}</li>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show: false
        };
    },
    props: {
        label: {
            type: String,
            default: ''
        },
        value: {
            type: String,
            default: ''
        }
    },
    mounted() { //很重要这样一开始就把_self变成这个VUE实例了，
        var _self = this;
    }
};
</script>
<style scoped>
.loading {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
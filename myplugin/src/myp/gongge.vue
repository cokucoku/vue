<template>
    <div>
        <input type="text"  @input="$emit('input',$event.target.value)" :value="value">
        <li>{{label}}/{{value1}}</li>
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
        value1: {
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
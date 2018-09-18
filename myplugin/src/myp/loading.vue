<template>
    <div class='loading' v-if="isshow">
        <img src="./loading.gif">加載...{{duration}}
    </div>
</template>
<script>
export default {
    data() {
        return {
            isshow: true

        };
    },
    props: {
        duration: {
            type: Number,
            default: 1 //默认1s
        }
    },
    mounted() { //很重要这样一开始就把_self变成这个VUE实例了，
        var _self = this;
        var ii=setTimeout(function() {
            _self.isshow = false;
        }, this.duration * 1000)


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
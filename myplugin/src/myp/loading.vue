<template>
    <div class='loading' v-if="isshow">
        <img src="./loading.gif">加載...{{dur}}
    </div>
</template>
<script>
// var _self;
export default {

    data() {
        return {
            isshow: false
        };
    },
    props: {
        dur: {
            type: Number,
            default: 1 //默认1s
        },
        visible: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        visible: {
            immediate: true,
            handler(value) {
                this.isshow = value
                var _self = this;
                setTimeout(function() {
                    if (value) {
                        _self.$emit('update:visible', false)
                        _self.isshow = false
                    }
                }, 6000)
            }
        }
    },
    beforeCreate() {
        //_self = this;

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
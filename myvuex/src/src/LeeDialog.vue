<template>
    <div class="lee-dialog">
        <transition name="fade">
            <div class="mark" v-show="isshow" @click="close"></div>
        </transition>
        <transition :name="effect" @enter="enter" @after-enter="afterenter" @leave="leave" @after-leave="afterleave">
            <div class="dialog" v-show="isshow">
                <div class="title">{{title}}</div>
                <div class="content">
                    <slot></slot>
                </div>
                <div class="other">
                    <lee-button @click="close">取消</lee-button>
                    <lee-button type="primary" @click="close">确定</lee-button>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'LeeDialog',
    inheritAttrs: false,
    data() {
        return {
            isshow: false
        }
    },
    watch: {
        value: {
            immediate: true,
            handler(value) {
                this.isshow = value
            }
        }
    },
    computed: {


    },
    methods: {
        close() {
            this.isshow = false
            this.$emit('input', false)
        },
        enter(el) {
            var h = el.scrollHeight
            el.style.setProperty('--h', -(h/2) + 'px')
        },
        afterenter(el) {
            //el.removeAttribute('style')
        },
        leave(el) {
            var h = el.scrollHeight
            el.style.setProperty('--h', -(h/2) + 'px')
        },
        afterleave(el) {
            //el.style.setProperty('--h', '')
        }

    },
    props: {
        value: {
            type: Boolean,
            default: false //默认default
        },
        title: {
            type: String,
            default: '' //默认default
        },
        effect: {
            type: String,
            default: 'fade' //默认default
        }

    }
};
</script>
<style scoped>

.lee-dialog .mark {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .8);
    z-index: 998;
    position: fixed;
    left: 0;
    top: 0;
    transition: all .5s;
}

.lee-dialog .dialog {
    width: 600px;
    background: #fff;
    z-index: 999;
    position: fixed;
    left: 50%;
    top: 30%;
    border-radius: 6px;
    margin-left: -300px;
  transition: all .3s;
}

.lee-dialog .dialog .title {
    height: 60px;
    border-bottom: solid 1px #eee;
    font-size: 18px;
    line-height: 60px;
    padding: 0 15px;
}

.lee-dialog .dialog .other {
    padding: 1.2em;
    text-align: right;
    border-top: solid 0px #eee;
}

@media (max-width: 768px) {
    .lee-dialog .dialog {
        width: 90%;
        margin-left: -45%;
    }
}


.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave {
    opacity: 1;
}

.scale-enter,
.scale-leave-to {
    opacity: 0;
    transform: scale(.3);
}

.scale-enter-to,
.scale-leave {
    opacity: 1;
}
.slideDown-enter,
.slideDown-leave-to {
    opacity: 0;
    transform: translateY(-16%);
}

.slideDown-enter-to,
.slideDown-leave {
    opacity: 1;
}
.slideUp-enter,
.slideUp-leave-to {
    opacity: 0;
    transform: translateY(16%);
}

.slideUp-enter-to,
.slideUp-leave {
    opacity: 1;
}
.slideLeft-enter,
.slideLeft-leave-to {
    opacity: 0;
    transform: translateX(100%);
}

.slideLeft-enter-to,
.slideLeft-leave {
    opacity: 1;
}
.slideRight-enter,
.slideRight-leave-to {
    opacity: 0;
    transform: translateX(-100%);
}

.slideRight-enter-to,
.slideRight-leave {
    opacity: 1;
}
</style>
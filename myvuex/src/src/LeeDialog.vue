<template>
  <div class="lee-dialog">
    <transition name="fade">
      <div class="mark" v-show="value"></div>
    </transition>
    <transition :name="effect">
      <div class="dialog" v-show="value">
        <div class="title">{{title}}</div>
        <div class="content">
          {{content}}
        </div>
        <div class="other">
          <template v-if="useStyle">
            <lee-button @click="cancelHandler">取消</lee-button>
            <lee-button type="primary" @click="certainHandler">确定</lee-button>
          </template>
          <template v-else>
            <lee-button @click="cancel">取消</lee-button>
            <lee-button type="primary" @click="certain">确定</lee-button>
          </template>
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
        return {}
    },
    computed: {},
    methods: {
        cancelHandler() {
            this.$emit('input', false)
            this.$emit('cancel', {flag: false, text: '取消'})
        },
        certainHandler() {
            this.$emit('input', false)
            this.$emit('certain', {flag: true, text: '确定'})
        }

    },
    props: {
        useStyle: {
            type: Boolean,
            default: true//这个表示用函数方式false，还是组件方式调用true
        },
        value: {
            type: Boolean,
            default: false //默认default
        },
        title: {
            type: String,
            default: '警告' //默认default
        },
        content: {
            type: String,
            default: '警告描述' //默认default
        },
        effect: {
            type: String,
            default: 'fade' //默认default
        },
        cancel: {
            type: Function,
            default: () => {
            }
        },
        certain: {
            type: Function,
            default: () => {
            }
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
  top: 50%;
  border-radius: 6px;
  margin-left: -300px;
  transition: all .3s;
  transform: translateY(-50%);
  /*margin-top: var(--h)*/
}

.lee-dialog .dialog .content {
  padding: 15px;
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
  transform: scale(.3) translateY(-50%) !important;
}

.scale-enter-to,
.scale-leave {
  opacity: 1;
  transform: scale(1) translateY(-50%) !important;
}

.slideDown-enter,
.slideDown-leave-to {
  opacity: 0;
  transform: translateY(-100%) !important;
}

.slideDown-enter-to,
.slideDown-leave {
  opacity: 1;
  transform: translateY(-50%) !important;
}

.slideUp-enter,
.slideUp-leave-to {
  opacity: 0;
  transform: translateY(0%) !important;
}

.slideUp-enter-to,
.slideUp-leave {
  opacity: 1;
  transform: translateY(-50%) !important;
}

.slideLeft-enter,
.slideLeft-leave-to {
  opacity: 0;
  transform: translateX(50%) translateY(-50%) !important;
}

.slideLeft-enter-to,
.slideLeft-leave {
  opacity: 1;
  transform: translateX(0%) translateY(-50%) !important;
}

.slideRight-enter,
.slideRight-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-50%) !important;
}

.slideRight-enter-to,
.slideRight-leave {
  opacity: 1;
  transform: translateX(0%) translateY(-50%) !important;
}
</style>

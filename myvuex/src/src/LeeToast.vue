<template>
  <transition name="fade" appear >
    <div :class="['lee-toast','lee-toast-'+thetype]" v-if="value">
      <div class="lee-toast-wrap">
        <div class="lee-toast-icon" v-if="thetype==='loading'">
          <div class="icon">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>
        <div class="lee-toast-icon" v-else>
          <div class="icon">
          </div>
        </div>
        <div class="lee-toast-content">{{statusTitle}}</div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
    name: 'LeeToast',
    data() {
        return {
            thetype: '',
            statusTitle: '',
            sett: '',
            settc: ''
        }
    },
    watch: {
        type: {
            immediate: true,
            handler(value) {
                let types = ['success', 'error', 'loading']
                let fi = types.filter(function (el) {
                    return el.indexOf(value) > -1;
                })
                if (fi.length < 1) {
                    this.thetype = "success"
                } else {
                    this.thetype = value
                }
            }
        },
        title: {
            immediate: true,
            handler(value) {
                this.statusTitle = value
            }
        },
        value: {
            immediate: true,
            handler(value) {
                if(value){
                    this.fade()
                }
            }
        }
    },
    methods: {
        fade() {
            if (this.thetype === 'loading' && this.after != '') {
                this.settc = setTimeout(() => {
                    this.thetype = this.after
                    this.statusTitle = this.afterTitle
                    clearTimeout(this.settc)
                }, this.duration * 0.6)
                this.sett = setTimeout(() => {
                    this.thetype = this.type
                    this.statusTitle = this.title
                    this.$emit('input', false)
                    this.$emit('close')
                    clearTimeout(this.sett)
                }, this.duration)

            } else {
                this.sett = setTimeout(() => {
                    this.$emit('input', false)
                    this.$emit('close')
                    clearTimeout(this.sett)
                }, this.duration)
            }
        }
    },
    props: {
        title: {
            type: String,
            default: '提示文字' //默认default
        },
        afterTitle: {
            type: String,
            default: '提示文字' //默认default
        },
        type: {
            type: String,
            default: 'success' //默认default
        },
        after: {
            type: String,
            default: '' //默认default
        },
        value: {
            type: Boolean,
            default: false //默认default
        },
        duration: {
            type: Number,
            default: 5000
        }
    }
};
</script>
<style scoped>
.lee-toast {
  box-sizing: border-box;
  border-radius: 30px;
  position: fixed;
  background-color: rgba(0, 0, 0, .6);
  transition: all .6s;
  left: 50%;
  top: 50%;
  width: 200px;
  height: 200px;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  z-index: 999;
}

.lee-toast-wrap {
  position: absolute;
  width: 100%;
  height: 100%;
}

.lee-toast .lee-toast-icon {
  display: flex;
  height: 70%;
  justify-content: center;
  align-items: center;
}

.lee-toast .lee-toast-icon .icon {
  position: relative;
  width: 80%;
  height: 80%;
}

.lee-toast-loading .lee-toast-icon .icon {
  position: relative;
  width: 56%;
  height: 80%;
}

.lee-toast-success .lee-toast-icon .icon:before {
  content: '';
  position: absolute;
  width: 55%;
  bottom: 0;
  left: 0%;
  padding-bottom: 15%;
  background: #fff;
}

.lee-toast-success .lee-toast-icon .icon:after {
  content: '';
  position: absolute;
  width: 15%;
  bottom: 0;
  left: 0%;
  padding-bottom: 35%;
  background: #fff;
}

.lee-toast-success .lee-toast-icon .icon {
  transform: rotate(-45deg);
  margin-top: -42%;
}

.lee-toast-error .lee-toast-icon .icon:before {
  content: '';
  position: absolute;
  width: 55%;
  top: 50%;
  left: 50%;
  padding-bottom: 15%;
  background: #fff;
  transform: translate(-50%, -50%);
}

.lee-toast-error .lee-toast-icon .icon:after {
  content: '';
  position: absolute;
  width: 15%;
  top: 50%;
  left: 50%;
  padding-bottom: 55%;
  background: #fff;
  transform: translate(-50%, -50%);
}

.lee-toast-error .lee-toast-icon .icon {
  transform: rotate(-45deg);
  margin-top: 15%;
}

.lee-toast .lee-toast-icon .icon i {
  border-radius: 3px;
  background: #fff;
  width: 8px;
  height: 20px;
  display: block;
  position: absolute;
  top: 20%;
  left: 50%;
  margin-left: -4px;
  transform-origin: 4px 220%;
  animation: fade 1.2s infinite;
  opacity: .3;
}

@keyframes fade {
  0% {
    opacity: 1;
  }

  100% {
    opacity: .3;
  }

}

.lee-toast .lee-toast-icon .icon i:before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
}

.lee-toast .lee-toast-icon .icon i:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: .1s;
}

.lee-toast .lee-toast-icon .icon i:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: .2s;
}

.lee-toast .lee-toast-icon .icon i:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: .3s;
}

.lee-toast .lee-toast-icon .icon i:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: .4s;
}

.lee-toast .lee-toast-icon .icon i:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: .5s;
}

.lee-toast .lee-toast-icon .icon i:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: .6s;
}

.lee-toast .lee-toast-icon .icon i:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: .7s;
}

.lee-toast .lee-toast-icon .icon i:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: .8s;
}

.lee-toast .lee-toast-icon .icon i:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: .9s;
}

.lee-toast .lee-toast-icon .icon i:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: 1s;
}

.lee-toast .lee-toast-icon .icon i:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 1.1s;
}


.lee-toast .lee-toast-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30%;
}


.fade-leave-to, .fade-enter {
  opacity: 0;
}

.fade-leave, .fade-enter-to {
  opacity: 1;
}

@media (max-width: 480px) {
  .lee-toast {
    border-radius: 5%;
    font-size: 16px;
    width: 35%;
    height: 0;
    padding-bottom: 35%;
  }

  .lee-toast .lee-toast-icon .icon i {
    width: 4px;
    height: 15px;
    margin-left: -2px;
    transform-origin: 2px 220%;
  }
}
</style>

<template>
  <button v-if="theactive!='ball'" type="button" :class="['lee-button','lee-button-'+thetype,theactive]"
  >
        <span v-on="buttonListeners1">
            <slot></slot>
            <lee-load-img :width="16" type="circle-side" v-if="thetype==='loadding'"></lee-load-img>
            <div v-if="thetype==='countDown'">({{this.number}})</div>
        </span>
  </button>
  <button v-else type="button" :class="['lee-button ball','lee-button-'+thetype]">
        <span v-on="buttonListeners2">
            <slot></slot>
            <lee-load-img :width="16" type="circle-side" v-if="thetype==='loadding'"></lee-load-img>
            <div v-if="thetype==='countDown'">({{this.number}})</div>
        </span>
  </button>
</template>
<script>
//import leeLoadimg from '@/LeeLoadimg'
export default {
    name: 'LeeButton',
    components: {
        //leeLoadimg
    },
    data() {
        return {
            thetype: 'default',
            theactive: 'default',
            number: this.num
        };
    },
    mounted() {
        let st = setInterval(() => {
            this.number--
            if (this.number <= 0) {
                clearInterval(st)
            }
        }, 1000)
    },
    watch: {
        type: {
            immediate: true,
            handler(value) {
                let types = ['primary', 'success', 'info', 'warning', 'danger', 'disabled', 'leecolor', 'loadding', 'countDown']
                let fi = types.filter(function (el) {
                    return el.indexOf(value) > -1;
                })
                if (fi.length < 1) {
                    this.thetype = "default"
                } else {
                    this.thetype = value
                }
            }
        },
        active: {
            immediate: true,
            handler(value) {
                let types = ['ball', 'wave', 'flash']
                let fi = types.filter(function (el) {
                    return el.indexOf(value) > -1;
                })
                if (fi.length < 1) {
                    this.theactive = "default"
                } else {
                    this.theactive = value
                }
            }
        }
    },
    props: {
        type: {
            type: String,
            default: 'default' //默认default
        },
        active: {
            type: String,
            default: 'default' //默认default
        },
        num: {
            type: Number,
            default: 10 //默认default
        }
    },
    computed: {
        buttonListeners1() {
            var vm = this;
            return Object.assign({}, this.$listeners, {
                click: function (event) {
                    vm.$emit('click', event);
                }
            })
        },
        buttonListeners2() {
            var vm = this;
            return Object.assign({}, this.$listeners, {
                click: function (event) {
                    vm.$emit('click', event);
                },
                mousemove: function (event) {
                    // let x = event.pageX - event.target.offsetLeft;
                    // let y = event.pageY - event.target.offsetTop;
                    let x = event.offsetX;
                    let y = event.offsetY;
                    event.target.parentNode.style.setProperty('--x', x + 'px')
                    event.target.parentNode.style.setProperty('--y', y + 'px')
                },
            })
        }
    }
};
</script>
<style scoped>
.lee-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  border-color: #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 5px;
  transition: .1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  font-size: 14px;
  border-radius: 4px;
  position: relative;
}

.lee-button span {
  padding: 12px 20px;
  display: flex;
}

.lee-button.default:after {
  content: '';
  position: absolute;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 0 8px rgba(0, 0, 0, .2);
  transition: all .5s;
  opacity: 0;
  left: 0;
  top: 0;
  z-index: -1;
}

.lee-button.default:active:after {
  transition: 0s;
  box-shadow: 0 0 0 0px rgba(0, 0, 0, .2);
  opacity: 1;
}

.lee-button.wave {
  overflow: hidden;
}

.lee-button.wave:after {
  content: "";
  width: 100%;
  padding-bottom: 100%;
  background: rgb(0, 0, 0);
  transition: transform .7s, opacity .9s;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: scale(2);
  margin-left: -50%;
  margin-top: -50%;
  border-radius: 100%;
  opacity: 0
}

.lee-button.wave:active:after {
  transform: scale(0, 0);
  opacity: .3;
  transition: 0s;
}

.lee-button.flash {
  overflow: hidden;
}

.lee-button.flash:after {
  content: " ";
  width: 25px;
  position: absolute;
  top: 0px;
  left: -45px;
  top: -70px;
  transform: rotate(20deg);
  background: rgba(255, 255, 255, .3);
  height: 200px;
  transition: all 380ms ease-in-out;
}

.lee-button.flash:hover:after {
  left: 110%;
}


.lee-button.ball {
  overflow: hidden;
}

.lee-button.ball:after {
  --size: 0;
  content: " ";
  position: absolute;
  width: var(--size);
  height: var(--size);
  left: var(--x);
  top: var(--y);
  transform: translate(-50%, -50%);
  border-radius: 100%;
  z-index: 1;
  background: radial-gradient(circle closest-side, #4a30f1, transparent);
  transition: width .2s ease, height .2s ease;
  /* 标准的语法（必须放在最后） */
}

.lee-button span {
  z-index: 12;
  position: relative;
}

.lee-button.ball:hover:after {
  --size: 100px;
}


.lee-button-disabled {
  cursor: not-allowed;
  background: #f5f7fa;
  border: 1px solid #dcdfe6;
  color: #c0c4cc;
}

.lee-button-disabled span {
  pointer-events: none;
}

.lee-button-disabled:after {
  content: none !important;
}

.lee-button-disabled:active {
  filter: none !important;

}

.lee-button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}

.lee-button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}

.lee-button-leecolor {
  color: #fff;
  background-color: #46bd87;
  border-color: #46bd87;
}

.lee-button-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
}

.lee-button-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}

.lee-button-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}

.lee-button-loadding span, .lee-button-countDown span {
  display: flex;
  align-items: center;
}


.lee-button-loadding .lee-loading {
  margin-left: 5px;
}

.lee-button:active {
  filter: brightness(1.2);
}
</style>

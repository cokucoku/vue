<template>
    <div class="lee-select">
        <div class="lee-input" :class="{focus:exp}" @click.stop="expcl">
            <input type="text" :readonly="isReadonly" v-model="search" :placeholder="placeh">
            <div class="jt" :class="[exp?'up':'down']">
                <span></span>
            </div>
        </div>
        <transition name="my">
            <ul class="lee-options" v-show="exp">
                <slot></slot>
                <li v-if="filterable&&nodata">没有数据</li>
            </ul>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'LeeSelect',
    inheritAttrs: false,
    data() {
        return {
            nodata: false,//這個數據是為了搜索沒數據時提示沒有數據
            lists: [], //重新整合數組
            exp: false,
            isReadonly: false,
            search: '', //input LABEL值
            placeh: '' //INPUT替代文本
        }
    },
    beforeDestroy() {
        document.removeEventListener('click', function() {
            _this.exp = false
        });
    },
    mounted() {
        var _this = this
        document.addEventListener('click', function() {
            _this.exp = false
        });
        var slots = this.$slots.default
        slots.map(function(el) {
            _this.lists.push({
                value: el.child.value,
                label: el.child.label
            })
        })
    },
    provide() {
        return {
            select: this
        };
    },
    methods: {
        expcl() {
            var children = this.$parent.$children
            var _this = this
            var fi = children.filter(function(el) {
                var tag = el.$vnode.tag
                return tag.indexOf('LeeSelect') > -1
            });
            fi.map(function(el) {
                if (!_this.exp) {
                    el.exp = false
                    _this.exp = true
                } else {
                    _this.exp = false
                    el.exp = false
                }
            })
        }
    },
    computed: {
    },
    props: {
        value: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        filterable: {
            type: Boolean,
            default: false
        }
    },
    watch: {
         exp: {
            immediate: true,
            handler(value) {
                this.$nextTick(function() {
                    if (this.filterable) {
                        if (value) {
                            if (this.search == '') {
                                this.placeh = this.placeholder
                                return
                            }
                            this.placeh = this.search
                            this.search = ''
                        }
                    }
                })
            }
        },
        filterable: {
            immediate: true,
            handler(value) {
                this.isReadonly = !value
            }
        },
        placeholder: {
            immediate: true,
            handler(value) {
                this.placeh = value
            }
        },
        search: {
            immediate: true,
            handler(value) {
                var _this = this
                this.$nextTick(function() {
                    var fi = this.lists.filter(function(el) {
                        return el.label.toLowerCase().indexOf(value.toLowerCase()) > -1;
                    });
                   if(fi.length>0){
                    _this.nodata=false
                   }else{
                    _this.nodata=true
                   }
                })
            }
        },
        value: {
            immediate: true,
            handler(value) {
                var _this = this
                this.$nextTick(function() {
                    var fi = _this.lists.filter(function(el) {
                        return el.value == value;
                    });
                    if (fi.length > 0) {
                        _this.search = fi[0].label
                    } else {
                        _this.search = ''
                    }
                })
            }
        }
    }
};
</script>
<style>
.lee-select {
    position: relative;
    width: 240px;
    z-index: 3
}

.lee-select .lee-input {
    height: 40px;

    cursor: pointer;
}

.lee-select .lee-input input {
    border: solid 1px #ddd;
    border-radius: 4px;
    height: 40px;
    width: 100%;
    padding: 0 30px 0 15px;
    box-sizing: border-box;
    outline: none;
    cursor: pointer;
}

.lee-select .lee-input.focus input {
    border-color: #46bd87;
    transition: all .5s
}

.lee-select .lee-input .jt {
    position: absolute;
    right: 15px;
    transition: all .3s
}

.lee-select .lee-input .jt.down {
    transform: rotate(-45deg);
    top: 15px;
}

.lee-select .lee-input .jt.up {
    transform: rotate(-225deg);
    top: 18px;
}

.lee-select .lee-input .jt span {
    border-left: solid 1px #aaa;
    border-bottom: solid 1px #aaa;
    display: block;
    width: 8px;
    height: 8px
}

.lee-options {
    margin: 0px;
    padding: 6px 0;
    position: absolute;
    width: 100%;
    background: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    margin-top: 8px;
    border-radius: 4px;
    border: solid 1px #dedede;
    transition: all .2s cubic-bezier(0.77, 0, 0.175, 1);
    overflow: hidden;
    transform-origin: 0 0;
}

.my-enter-active {
    animation: my-in .2s ease-in-out;
}

.my-leave-active {
    animation: my-out .2s ease-in-out;
}

@keyframes my-in {
    0% {
        /*height: 0;*/
        transform: scaleY(0);
        opacity: 0
    }

    100% {
        /*height: var(--h);*/
        transform: scaleY(1);
        opacity: 1
    }
}

@keyframes my-out {
    0% {
        /*height: var(--h);*/
        transform: scaleY(1);
        opacity: 1
    }

    100% {
        /* height: 0;*/
        transform: scaleY(0);
        opacity: 0
    }
}
</style>
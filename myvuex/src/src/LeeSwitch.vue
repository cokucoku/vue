<template>
    <div @click="chuli()"  class="lee-switch" :class="[size,{check:value}]" :style="'color:'+color"></div>
</template>
<script>
export default {
    name: 'LeeSwitch',
    inheritAttrs:false,
    data() {
        return {
            
        };
    },
    methods:{
        chuli(){
            this.$emit('input',!this.value)
        }
    },
    props: {
        value: {
            type: Boolean,
            default: false //false
        },
        color: {
            type: String,
            default: '#46bd87' //#46bd87
        },
        size: {
            type: String,
            default: 's' //s
        },
    }
};
</script>
<style scoped>
.lee-switch{background: #ddd;cursor: pointer;position: relative;transition: all .3s;}
.lee-switch.check{background: currentColor;}
.lee-switch:before{background: #fff;border-radius: 100%;position: absolute; content: '';left: 2px;top: 2px;transition: all .3s}
.lee-switch.s{width:28px;height: 14px;border-radius: 7px;}
.lee-switch.s:before{width: 10px;height: 10px;}
.lee-switch.s.check:before{left: calc(100% - 12px)}
.lee-switch.m{width:40px;height: 20px;border-radius: 10px;}
.lee-switch.m:before{width: 16px;height: 16px;}
.lee-switch.m.check:before{left: calc(100% - 18px)}
.lee-switch.l{width:60px;height: 30px;border-radius: 15px;}
.lee-switch.l:before{width: 26px;height: 26px;}
.lee-switch.l.check:before{left: calc(100% - 28px)}
</style>
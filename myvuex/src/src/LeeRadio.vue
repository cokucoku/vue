<template>
    <div class="lee-radio" :class="{check:radio.value==label}" @click="selc(label)">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'LeeRadio',
    inheritAttrs:false,
    data() {
        return {

        };
    },
    inject: ['radio'],
    props: {
        label:{
            type:Number,
            default:1
        }
    },
    methods:{
        selc(el){
            this.radio.$emit('input',el)
        }
    },
    computed: {
        
    }
};
</script>
<style scoped>
.lee-radio{margin-right: 15px;height: 14px;line-height: 14px;position: relative;padding-left: 20px;font-size: 14px;cursor: pointer;}
.lee-radio:before{content: '';width: 14px;height: 14px;border-radius: 100%;position: absolute;left: 0px;top: 0px;border:solid 1px #ddd;box-sizing: border-box;}
.lee-radio.check:before{border:solid 1px #46bd87;/*background: #46bd87*/}
.lee-radio:hover:before{border:solid 1px #46bd87;}
.lee-radio.check:after{background: #46bd87;width: 8px;height: 8px;content: '';position: absolute;border-radius: 100%;left: 3px;top: 3px;}
</style>
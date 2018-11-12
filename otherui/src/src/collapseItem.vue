<template>
    <div class="lee-collapse-item" :class="{exp:isActive}">
        <div class="lee-collapse-item-title" @click="expand">
            {{title}}<i></i>
        </div>
        <div class="lee-collapse-item-wrap" v-show="isActive">
            <div class="lee-collapse-item-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CollapseItem',
    inject: ['collapse'],
    data() {
        return {
            isClick: false,
            isActive:this.collapse.activeNames.indexOf(this.name) > -1
        }

    },
    computed: {
        isActive2() {
            //return this.collapse.activeNames.indexOf(this.name) > -1;
        }
    },
    methods: {
        expand(e) {
            //var inx=this.collapse.activeNames.indexOf(this.name)
            //this.collapse.activeNames.splice(inx,1)
            // console.log(this.collapse.activeNames.indexOf(this.name))
           this.$emit('change', this.name);
        }
    },
    props: {
        title: {
            type: String,
            default: '' //默认default
        },
        name: {
            type: String,
            default: '' //默认default
        }
    }
};
</script>
<style scoped>
@import '../assets/css.css'; /*引入公共样式*/
</style>
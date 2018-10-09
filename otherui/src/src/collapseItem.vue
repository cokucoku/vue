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
            //this.dispatch('Collapse', 'item-click', this);
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
* {
    box-sizing: border-box;
}

.lee-collapse-item {
    border-bottom: solid 1px #eee;
    background: #fff
}

.lee-collapse-item.exp .lee-collapse-item-title:after {
    border-bottom: solid 1px #eee;
    content: "";
    position: absolute;
    width: 100%;
    left: 15px;
    bottom: 0
}

.lee-collapse-item-title {
    position: relative;
    padding: 10px 15px;
    width: 100%;
    overflow: hidden;
}

.lee-collapse-item-content {
    padding: 10px 15px;
    line-height: 22px;
    font-size: 14px;
    color: #666;

}

.lee-collapse-item-wrap {
    overflow: hidden;
    transition: all .3s ease-in-out;
}
</style>
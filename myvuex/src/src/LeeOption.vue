<template>
    <li @click="sel(value)" :class="{selected:value==select.value}" v-show="have">
        <slot v-if="haveslot"></slot>
        <span v-else>{{label}}</span></li>
</template>
<script>
export default {
    name: 'LeeOption',
    inheritAttrs: false,
    data() {
        return {}
    },
    inject: ['select'],
    computed: {
        have() {
            if (this.select.filterable) {
                var search = this.select.search.toLowerCase()
                return this.label.toLowerCase().indexOf(search) > -1
            }
            return true
        },
        haveslot() {
            return this.$slots.default
        }
    },
    methods: {
        sel(value) {
            this.select.exp = false
            this.select.$emit('input', value)
        }
    },
    props: {
        value: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        }
    }
};
</script>
<style>
.lee-options li {
    list-style: none;
    padding: 0 20px;
    height: 34px;
    line-height: 34px;
    font-size: 14px;
    cursor: pointer;display: flex;justify-content: space-between;
}
.lee-options li span:last-child{color: #999}
.lee-options li:hover {
    background: #eee;
    
}

.lee-options li.selected span {
    color: #46bd87
}
</style>
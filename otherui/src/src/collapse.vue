<template>
    <div class="lee-collapse">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'Collapse',
    data() {
        return {
            activeNames: this.value,
        }
    },
    provide() {
        return {
            collapse: this
        };
    },
    mounted() {
        //this.$on('item-click', this.handleItemClick);
        //console.log(this)
    },
    props: {
        value: {
            type: Array,
            default () {
                return []
            }
        }
    },
    methods: {
        handleItemClick(item) {
            console.log(item)
        }

    }
};
</script>
<style scoped>
</style>
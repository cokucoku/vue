<template>
    <div class="lee-collapse">{{activeNames}}
        <slot @change="handleItemClick"></slot>
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
        handleItemClick(val) {
            console.log(val)
        }

    }
};
</script>
<style scoped>
</style>
<template>
    <li><input type="checkbox" :checked="checked" @change="$emit('gb', $event.target.checked)">{{todo.text}}
        <button @click="$emit('remove')">X</button>
    </li>
</template>
<script>
export default {
    model: {
        prop: 'checked',
        event: 'gb'
    },
    props: {
        todo: {
            type: Object,
            required: true
        },
        checked: {
            type: Boolean,
            default: false
        },
    }
}
</script>
<style scoped>
li {
    list-style: none;
}
</style>
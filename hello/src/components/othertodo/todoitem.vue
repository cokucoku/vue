<template>
    <li>{{todo.text}}
        <button @click="$emit('remove')">X</button>
    </li>
</template>
<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped>
</style>
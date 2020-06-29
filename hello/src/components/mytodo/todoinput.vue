<template>
    <input type="text" class="input"  @keyup.enter="$emit('submit',$event.target.value)">
</template>
<script>
</script>
<style scoped>
.input {
    width: 100%;
    padding: 8px 10px;
    border: 1px solid #32485F;
}
</style>
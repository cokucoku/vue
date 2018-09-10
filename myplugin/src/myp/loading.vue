<template>
    <div class='loading' v-if="isshow">
        <img src="./loading.gif">加載...
    </div>
</template>
<script>
export default {
    props: {
        duration: {
            type: String,
            default: "1s" //默认1s
        },
        isshow: {
            type: Boolean,
            default: false
        }
    }
};
</script>
<style scoped>
.loading{display: flex;align-items: center;justify-content: center;}
</style>
<template>
    <lee-pagination :page-size="20" layout="prev, pager, next" :total="150" @change="curpage">
    </lee-pagination>
</template>
<script>
export default {
    methods: {
        curpage(val) {
        console.log('当前页:'+val);
      }
    }
}
</script>
<style>
</style>
<template>
    <lee-pagination :page-size="20" layout="total,prev, pager, next,jumper" :total="250" :current-page.sync="currentPage" @change="curpage">
    </lee-pagination>
</template>
<script>
export default {
    data() {
        return {
            currentPage: 5
        }
    },
    methods: {
        curpage(val) {
            //console.log('当前页:'+this.currentPage);
            this.$nextTick(function() {
                console.log('当前页:'+this.currentPage);//终于知道怎么用nextTick了
            })
        }
    }
}
</script>
<style>
</style>
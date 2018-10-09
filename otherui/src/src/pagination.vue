<template>
    <div class="lee-pagination">
        <div class="btn-prev" :class="{disabled:cur==0}" v-if="layout.indexOf('prev')>-1" @click="prev">上一页</div>
        <ul class="lee-pager" v-if="layout.indexOf('pager')>-1">
            <li v-for="(item,inx) in pages" :class="{active:inx==cur}" @click="go">{{item}}</li>
        </ul>
        <div class="btn-next" :class="{disabled:cur==pages-1}" v-if="layout.indexOf('next')>-1" @click="next">下一页</div>
    </div>
</template>
<script>
export default {
    name: 'LeePagination',
    data() {
        return {
            cur: 0
        }
    },
    methods: {
        go(e) {
            this.cur = e.target.textContent - 1
            this.$emit('change', this.cur + 1)
        },
        prev() {
            this.cur--
            if (this.cur <= 0) this.cur = 0
            this.$emit('change', this.cur + 1)
        },
        next() {
            this.cur++
            if (this.cur >= this.pages-1) this.cur = this.pages-1
            this.$emit('change', this.cur + 1)
        }

    },
    computed: {
        pages() {
            return Math.ceil(this.total / this.PageSize)
        }
    },
    props: {
        PageSize: {
            type: Number,
            default: 10 //默认default
        },
        layout: {
            type: String,
            default: 'pager' //默认default
        },
        total: {
            type: Number,
            default: 10 //默认default
        }
    }
};
</script>
<style scoped>
* {
    margin: 0px;
    padding: 0px;
    list-style: none
}

.lee-pagination .btn-prev,
.lee-pagination .btn-next,
.lee-pager {
    display: inline-block;
    font-size: 14px;
    cursor: pointer;
    user-select: none
}

.lee-pagination .btn-prev,
.lee-pagination .btn-next {
    background: #eee;
    padding: 3px 6px;
}

.lee-pagination .btn-prev.disabled,
.lee-pagination .btn-next.disabled {
    cursor: not-allowed;
    color: #c0c4cc;
    /*pointer-events: none*/
}

.lee-pager .active {
    background: #409eff;
    color: #fff;
    cursor: default;
}

.lee-pager li {
    display: inline-block;
    padding: 3px 6px;
    cursor: pointer;
    background: #eee;
    margin: 0 5px;
}
</style>
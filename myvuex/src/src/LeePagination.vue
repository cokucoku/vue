<template>
    <div class="lee-pagination">
        <div class="btn-prev" :class="{disabled:cur<=1}" v-if="layout.indexOf('prev')>-1" @click="prev">上一页</div>
        <ul class="lee-pager" v-if="layout.indexOf('pager')>-1">
            <li v-for="(item,inx) in pages" :class="{active:item==cur}" @click="go(item)">{{item}}</li>
        </ul>
        <div class="btn-next" :class="{disabled:cur>=totalpage}" v-if="layout.indexOf('next')>-1" @click="next">下一页</div>
    </div>
</template>
<script>
export default {
    name: 'LeePagination',
    data() {
        return {
            cur: 1,
            totalpage: 0
        }
    },
    mounted() {
        this.totalpage = Math.ceil(this.total / this.PageSize)
    },
    methods: {
        go(item) {
            //this.cur = Number(e.target.textContent)
            this.cur=Number(item)
            this.$emit('change', this.cur)
        },
        prev() {
            this.cur--
            if (this.cur <= 1) this.cur = 1
            this.$emit('change', this.cur)
        },
        next() {
            this.cur++
            if (this.cur >= this.totalpage) this.cur = this.totalpage
            this.$emit('change', this.cur)
        }

    },
    computed: {
        pages() {
            var num = []
            for (var i = 0; i < this.totalpage; i++) {
                if (this.cur < 6) {
                    if (i + 1 == this.totalpage || i < 6) {
                        num.push(i + 1)
                    }
                } else if (this.cur + 4 > this.totalpage) {
                    if (i + 6 >= this.totalpage || i == 0) {
                        num.push(i + 1)
                    }
                } else {
                    if (i == this.totalpage - 1 || i == 0 || Math.abs(this.cur - (i + 1)) <= 2) {
                        num.push(i + 1)
                    }
                }
            }
            return num

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
        },
        value: {
            type: Number,
            default: 1 //默认default
        }
    },
    watch: {
        value: {
            immediate: true,
            handler(value) {
                if(value<=0){
                    value=1
                }
                this.cur = value
            }
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
    background: #46bd87;
    color: #fff;
    cursor: default;
}

.lee-pager li {
    display: inline-block;
    padding: 3px 10px;
    cursor: pointer;
    background: #eee;
    margin: 0 3px;
}
</style>
<template>
    <div class="lee-pagination">
        <div class="tjtotal" v-if="layout.indexOf('total')>-1">共{{total}}条</div>
        <div class="btn-prev" :class="{disabled:cur==1}" v-if="layout.indexOf('prev')>-1" @click="prev">上一页</div>
        <ul class="lee-pager" v-if="layout.indexOf('pager')>-1" ref="ul">
            <li v-for="(item,inx) in pages" :class="{active:(inx+1)==cur}" @click="go">{{item}}</li>
        </ul>
        <div class="btn-next" :class="{disabled:cur==pages}" v-if="layout.indexOf('next')>-1" @click="next">下一页</div>
        <div class="gopage" v-if="layout.indexOf('jumper')>-1">前往<lee-input ref="input" v-model="cur" @change="chanage"></lee-input>页</div>
        <!-- <div class="gopage" v-if="layout.indexOf('jumper')>-1">前往<input ref="input" :value="cur" v-on="inputListeners" />页</div> -->
    </div>
</template>
<script>
import Input from './input.vue'

export default {
    components: {
        Input
    },
    name: 'LeePagination',
    data() {
        return {
            cur: ''
        }
    },
    methods: {
        go(e) {
            if (e.target.textContent != this.cur) {
                this.cur = Number(e.target.textContent)
                this.$emit('change', this.cur)
                this.$emit('update:currentPage', this.cur)
            }
        },
        prev() {
            this.cur--
            if (this.cur <= 1) this.cur = 1
            this.$emit('change', this.cur)
            this.$emit('update:currentPage', this.cur)
        },
        next() {
            this.cur++
            if (this.cur >= this.pages) this.cur = this.pages
            this.$emit('change', this.cur)
            this.$emit('update:currentPage', this.cur)
        },
        chanage(value) {
            var jg = Number(value)
            if (isNaN(jg)) {
                jg = this.cur
            }
            if (jg >= this.pages) jg = this.pages;
            if (jg <= 1) jg = 1;
            this.$refs.input.$refs.input.value = jg;
            this.$emit('change')
            this.$emit('update:currentPage', jg)
        }

    },
    computed: {
        pages() {
            return Math.ceil(this.total / this.PageSize)
        }
    },
    watch: {
        currentPage: {
            immediate: true,
            handler(value) {
                if (value <= 1) {
                    value = 1
                } else if (value >= this.pages) {
                    value = this.pages;
                }
                this.cur = value
                this.$emit('input', value);
            }
        },
        // cur: {
        //     immediate: true,
        //     handler(value) { //加...
        //         if (value >= 5) {

        //         }
        //     }
        // }
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
        currentPage: {
            type: Number,
            default: 1 //默认default
        }
    }
};
</script>
<style>
.lee-pagination .gopage {
    margin-left: 15px
}

.lee-pagination .tjtotal {
    margin-right: 15px
}

.lee-pagination .gopage .lee-input {
    width: auto
}

.lee-pagination .gopage input {
    height: 21px;
    width: 50px;
    border: solid 1px #ddd;
    outline: none;
    margin: 0 4px;
    text-align: center;
}

.lee-pagination .gopage input:focus {
    border-color: #409eff
}

.lee-pagination .btn-prev,
.lee-pagination .btn-next,
.lee-pagination .lee-pager,
.lee-pagination .tjtotal,
.lee-pagination .gopage {
    display: inline-block;
    font-size: 14px;
    cursor: pointer;
    user-select: none
}

.lee-pagination .more {
    display: inline-block;
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

.lee-pagination .lee-pager .active {
    background: #409eff;
    color: #fff;
    cursor: default;
    /*pointer-events: none*/
}

.lee-pagination .lee-pager {
    margin: 0px;
    padding: 0px;
}

.lee-pagination .lee-pager li {
    display: inline-block;
    padding: 3px 6px;
    cursor: pointer;
    background: #eee;
    margin: 0 5px;
}
</style>
<template>
    <div class="list">
        <ul>
            <router-link :to="'/photo/'+item.id" tag="li" v-for="item in photos" :key="item.id"><img :src="item.download_url"></router-link>
        </ul>
        <lee-button type="danger" @click="showToast">showToast</lee-button>
        <lee-button type="danger" @click="showModal">showModal</lee-button>
        <lee-button type="success" @click="showActionSheet">showActionSheet</lee-button>
    </div>
</template>
<script>
import $ from 'jquery'
import LeeButton from './LeeButton.vue'
export default {
    components: {
        LeeButton
    },
    data() {
        return {
            photos: []
        }
    },
    mounted() {
        var _this = this
        $.ajax({
                url: 'https://picsum.photos/v2/list?limit=4',
                type: 'get',
                dataType: 'json',
                data: { limit: '10' },
            })
            .done(function(rs) {
                _this.photos = rs
            })
    },
    methods: {
        showToast() {
            this.$showToast({
                title: '加载中',
                type: 'loading', //success,error,loading
                duration: 2000,
                success: function(res) {
                    this.$showToast({
                        title: '加载完成',
                        type: 'success', //success,error,loading
                        duration: 2000,
                    })
                }
            })
        },
        showActionSheet() {
            this.$showActionSheet({
                item: ['窝窝','好哒','刷卡','支付宝','微信','云闪付'], 
                success: function(res) {
                    console.log(res)
                }
            })
        },
        showModal() {
            this.$showModal({
                title: 'Modal演示',
                content: '插件通常用来为 Vue 添加全局功能。插件的功能范围没有严格的限制',
                success: function(res) {
                    console.log(res)
                    if (res.cancel) {
                        console.log("你点击取消按钮")
                    }
                    if (res.confirm) {
                        console.log("你点击确定按钮")
                    }
                }
            })
        }
    }

}
</script>
<style scoped>
.list ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%
}

.list li {
    width: 25%;
    height: 33.33vh;
    position: relative;
}

.list li img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
}
</style>
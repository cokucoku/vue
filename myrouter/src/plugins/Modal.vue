<template>
    <transition name="fade">
        <div class="modalW" v-if="show">
            <div class="modal" v-if="show">
                <div class="title">{{title}}</div>
                <div class="content">{{content}}</div>
                <div class="btns">
                    <div class="cancel" @click="cancel">取消</div>
                    <div class="confirm" @click="confirm">确定</div>
                </div>
            </div>
            <div class="mark" v-if="show">
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    data() {
        return {
            show: false,
            content: '内容',
            title: '标题',
            which: ''
        };
    },
    methods: {
        cancel() {
            this.show = false
            this.which = 'cancel'
            this.$hideModal()
        },
        confirm() {
            this.show = false
            this.which = 'confirm'
            this.$hideModal()
        },

    },
    mounted() {

    }
};
</script>
<style scoped>
.modalW {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 111;
    top: 0;
    left: 0
}

.modalW .mark {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .6);
    position: fixed;
    z-index: 1
}

.modal {
    background: #fff;
    width: 334px;
    border-radius: 14px;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -167px;
    z-index: 2;
    overflow: hidden;
}


.modal .title {
    font-size: 18px;
    text-align: center;
    color: #333;
    padding: 20px 0;
}

.modal .content {
    font-size: 18px;
    text-align: center;
    color: #999;
    padding: 0 20px 20px;
}

.modal .btns {
    display: flex;
    height: 60px;
    border-top: solid 1px #eee
}

.modal .btns div {
    width: 50%;
    cursor: pointer;
    line-height: 60px;
    text-align: center
}

.modal .btns .cancel {
    border-right: solid 1px #eee;
    color: #666
}

.fade-enter-active,
.fade-leave-active {
    transition: all .4s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;

}
</style>
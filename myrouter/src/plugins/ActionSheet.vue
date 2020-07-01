<template>
    <transition name="fade">
        <div class="modalW" v-show="show">
            <transition name="slide">
                <div class="modal" v-if="show">
                    <ul>
                        <li v-for="item in list" @click="choose(item)">{{item}}</li>
                        <li class="cancel" @click="close">取消</li>
                    </ul>
                </div>
            </transition>
            <transition name="fade">
                <div class="mark" v-if="show" @click="show=!show">
                </div>
            </transition>
        </div>
    </transition>
</template>
<script>
export default {
    data() {
        return {
            show: false,
            item: ['选项一'],
            xz:''
        };
    },
    methods: {
        close() {
            this.show = false
            this.$chooseActionSheet({choose:''})
        },
        choose(item) {
            this.show = false
            this.$chooseActionSheet({choose:item})
        }
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
    background: #f0f0f0;
    width: 100%;
    position: fixed;
    left: 0%;
    bottom: 0%;
    z-index: 2;
}


.modal li {
    font-size: 18px;
    text-align: center;
    height: 46px;
    line-height: 46px;
    background: #fff;
    border-bottom: solid 1px #efefef;
    cursor: pointer;
}

.modal li.cancel {
    margin-top: 5px
}

.fade-enter-active,
.fade-leave-active {
    transition: all .4s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
    transition: all .4s;
}

.slide-enter,
.slide-leave-to {
    transform: translateY(100%);
}
.slide-leave,
.slide-enter-to {
    transform: translateY(0%);
}
</style>
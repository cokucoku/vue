<template>
  <div id="demo">
    <lee-alert title="成功提示的文案" type="success" show-icon closeable @close="close"></lee-alert>
    <lee-badge title="站内信息" info="8"/>
    <lee-button @click="show1=true">默认按钮toast</lee-button>
    <lee-button @click="toast">函数toast</lee-button>
    <lee-button @click="show2=true">默认按钮dialog</lee-button>
    <lee-button @click="dialog">函数dialog</lee-button>
    <lee-toast v-model="show1" title="加载中" type="loading" after="error" after-title="加载失败"
               :duration="duration" @close="closeT"></lee-toast>
    <lee-dialog @cancel="cancel" @certain="certain" v-model="show2" effect="scale">水电费水电费</lee-dialog>
  </div>
</template>
<script>
export default {
    name: 'app',
    data() {
        return {
            show1: true,
            show2: false,
            duration: 4000
        }
    },
    mounted() {


    },
    computed: {},
    methods: {
        closeT(){
           console.log('管比toast')
        },
        close() {
            console.log('比较')
        },
        cancel(e) {
            console.log(e)
        },
        certain(e) {
            console.log(e)
        },
        toast() {
            this.$Toast({
                title: '登陆中',
                type: 'loading',
                after: 'success',
                afterTitle: '登陆成功',
                close: () => {
                    console.log("挂逼")
                }
            })
        },
        dialog() {
            this.$Dialog({
                title: '春节放假通知',
                content: '公司与205随时到非撒地方撒地方',
                effect: 'slideUp',
                cancel: (e) => {
                    console.log(e)
                },
                certain: (e) => {
                    console.log(e)
                }
            })
        }
    }
}
</script>
<style scoped>

</style>

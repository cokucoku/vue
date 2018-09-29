<template>
    <div id="mytest">
        <loading :dur="4"  v-bind:visible.sync="kg"></loading>
        <button @click="load">显示loadding</button>
        <button @click="toast">显示taost弹出框</button>
        <button @click="pay">我要支付你選擇了{{pays}}</button>
        <button @click="city">城市选择{{selcity}}</button>
        <switchs v-model="toggle"></switchs>{{toggle}}
        <!-- <ul class="mytq">
            <li v-for="item in tq" :key="item.date"></li>
        </ul> -->
        {{whichcity}}
        <ul class="mytq" v-if="mydata.length">
            <li>{{whichcity}}</li>
            <li v-for="item in mydata">
                <span>{{item.date}}</span>
                <span>{{item.type}}</span>
            </li>
        </ul>
        <p v-else>没有数据</p>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    name: "app",
    data() {
        return {
            kg: false,
            toggle: true,
            mydata: '',
            whichcity: '北京市',
            value: '34',
        };
    },
    mounted() {

    },
    computed: {
        pays() {
            return this.$mychoose()
        },
        selcity() {
            var p = this.$citysel().province || ''
            var c = this.$citysel().city || ''
            var d = this.$citysel().district || ''
            this.whichcity = this.$citysel().city || this.whichcity;
            //return p + "/" + c + "/" + d || ''
            var _self = this;
            // $.ajax({
            //     url: '/open/api/weather/json.shtml',
            //     type: 'get',
            //     dataType: 'json',
            //     data: { city: _self.whichcity },
            //     //data: {city:_self.$citysel().city},
            //     success: function(ds) {
            //         //_self.mydata = ds.data.forecast
            //     }
            // })

        }
    },
    methods: {
        load() {
            this.kg = true;
        },
        toast() {
            this.$toast("你好", { 'duration': 3000, 'thme': 'red' });
        },
        pay() {
            this.$pay({
                'choose': ['微信支付', '支付宝', '花呗支付', '农业银行', '余额宝'],
                'bg': '#4eccc4'
            });
        },
        city() {
            this.$city();
        },
        citycho(curVal, oldVal) {
            return "sdfdfdf"
        }
    }
};
</script>
<style>
* {
    margin: 0px;
    padding: 0px;
    list-style: none;
    box-sizing: border-box;
}

.mytq {
    display: flex;
    height: 300px;
    margin: 0 20px;
    flex-wrap: wrap;
}

.mytq li {
    width: 50%;
    border: solid 1px #eee;
    margin-top: -1px
}

.mytq li span {
    display: block;
    border-bottom: solid 1px #eee;
    padding: 15px;
}

#mytest {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
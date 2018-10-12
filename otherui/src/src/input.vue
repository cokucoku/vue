<template>
    <div class="lee-input">
        <!-- <input ref="input" type="text" v-bind="$attrs" class="lee-input_inner" :value="value" v-on="inputListeners"> -->
        <input ref="input" type="text" v-bind="$attrs" class="lee-input_inner" :value="value" @input="handleInput" @change="handleChange">
    </div>
</template>
<script>
export default {
    name: 'LeeInput',
    inheritAttrs: false,
    data() {
        return {
            currentValue: 0
        };
    },
    props: {
        value: {
            type: [Number,String],
            //default: '' //默认1
        }
    },
    methods:{
        handleInput(event){
            this.$emit('input', event.target.value);
        },
        handleChange(event){
            this.$emit('change', event.target.value);
        }
    }
    ,
    computed: {
        inputListeners() {
            var vm = this;
            return Object.assign({}, this.$listeners, {
                // 这里确保组件配合 `v-model` 的工作
                input: function(event) {
                    vm.$emit('input', event.target.value);
                },
                change: function(event) {
                    vm.$emit('change', event.target.value);
                }
            })
        }
    }
};
</script>
<style>
.lee-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 100%;
}
.lee-input_inner:focus{border-color: #409eff}
.lee-input_inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    width: 100%;
}


</style>
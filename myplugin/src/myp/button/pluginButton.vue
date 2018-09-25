<template>
    <button type="button" class="lee-button" :class="type">
        <span><slot></slot></span>
    </button>
</template>
<script>
export default {
    data() {
        return {
            b:"sdf"
        };
    },
    props: {
        type: {
            type: String,
            default: 'default' //默认default
        }
    }
};
</script>
<style>
.lee-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    border-color: #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
}

.primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
}
.success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
}
.info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
}
.warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
}
.danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
}
</style>
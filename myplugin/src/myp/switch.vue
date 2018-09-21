<template>
    <div>
        <input type="checkbox" class="toggle" @change="$emit('change',$event.target.checked)" :checked="xz">
    </div>
</template>
<script>
export default {
    data() {
        return {


        };
    },
    model: {
        prop: 'xz',
        event: 'change'
    },
    props: {
        xz: {
            type: Boolean,
            default: false, //默认false
        }
    },
    mounted() {


    }
};
</script>
<style scoped>
.toggle {
    appearance: none;
    width: 55px;
    height: 28px;
    background: #ccc;
    position: relative;
    border-radius: 30px;
    transition: all 0.2s ease-in-out;
    outline: none;
}

.toggle:checked {
    background: #158EC6;
}

.toggle:checked:after {
    background: #fff;
    left: 29px;
}

.toggle:after {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    background: #aaa;
    top: 2px;
    left: 2px;
    border-radius: 50%;
    transition: all 0.2s ease-in-out;
}
</style>
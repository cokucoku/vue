<template>
    <input-number></input-number>
</template>
<script>
import inputNumber from './components/inputNumber.vue'
export default {
    name: 'app',
    mounted() {
        
    },
    components: {
        inputNumber
    }

}
</script>
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
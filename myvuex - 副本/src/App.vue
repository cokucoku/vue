<template>
    <div>{{doubleCount}}/{{count}}</div>
</template>
<script>

export default {
    name: 'app',
    mounted() {
        
    },
    computed:{
        doubleCount(){
            return this.$store.getters.doubleCount
        },
        count(){
            return this.$store.state.a.count
        },
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
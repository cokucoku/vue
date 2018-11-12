<template>
    <div class="inputNumber">
        <button @click="increment">+</button>
        <input type="text" v-model="count">
        <button @click="decrement">-</button>
    </div>
</template>
<script>
export default {
    name: 'inputNumber',
    computed: {
        count() {
            return this.$store.state.count
        }
    },
    methods: {
        increment() {
            this.$store.commit('increment')
        },
        decrement() {
            this.$store.commit('decrement')
        }
    }
}
</script>
<style scoped>
</style>
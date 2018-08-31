<template>
    <li>
        <a :href="href" @click.prevent="go" :class="{on:ison}">
            <slot></slot>
        </a>
    </li>
</template>
<script>
export default {
    name:'myli',
    props: {
        href: {
            type: String
        }
    },
    computed: {
        ison() {
            return false
        }
    },
    methods: {
        go() {
            history.pushState(null, null, this.href)
            this.$parent.cururl = this.href

        }
    }
}

</script>
<style>
</style>
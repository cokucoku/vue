<template>
    <li>
        <a :href="href" @click.prevent="go" :class="{on:ison}">
            <slot></slot>
        </a>
    </li>
</template>
<script>
export default {
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
        go(ev) {

        }
    }

}
</script>
<style>
</style>
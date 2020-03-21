<template>
    <div>
        <h1>{{count}}</h1>
        <button type="button" v-on:click="increment">+</button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                count: 0
            }
        },
        methods: {
            increment () {
                this.count++
            },
        }
    }
</script>
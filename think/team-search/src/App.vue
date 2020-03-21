<template>
    <div id="app">
        <h1>{{message}}</h1>
        <count-up></count-up>
    </div>
</template>

<script>
    import CountUp from './components/CountUp.vue'

    export default {
        data() {
            return {
                message: 'Search Area'
            }
        },
        components: {
            CountUp
        }
    }
</script>

<style scoped>
    h1 {
        color: red;
    }
</style>

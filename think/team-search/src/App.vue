<template>
    <div id="team-search">
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
</style>

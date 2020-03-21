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
    #team-search {
        border: 3px solid #5f9dc8;
        position: relative;
        padding: 3rem;
    }

    #team-search::after {
        content: "team search";
        background: #5f9dc8;
    }

    #team-search:not(:empty)::after{
        position: absolute;
        color: white;
        display: block;
        bottom: -1.5rem;
        line-height: 1.5rem;
        padding: 0 0.5em;
    }

    #team-search:not(:empty)::after {
        left: -3px;
        bottom: 0;
    }
</style>

<template>
    <div id="team-search">
        <search-box></search-box>
    </div>
</template>

<script>
    import SearchBox from './components/SearchBox'

    export default {
        components: {
            SearchBox
        },
        created() {
            if(process.browser) {
                const $store = this.$store;
                window.channel.page.subscribe('page.allReady', function () {
                    $store.dispatch('setPageAllReady');
                });
            }
        }
    }
</script>

<style scoped>
</style>

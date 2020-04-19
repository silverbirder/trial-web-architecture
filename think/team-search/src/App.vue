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
            if (process.browser) {
                const $store = this.$store;
                window.postal.subscribe({
                    channel: 'page',
                    topic: 'page.allReady',
                    callback: function () {
                        $store.dispatch('setPageAllReady');
                    }
                });
            }
        }
    }
</script>

<style scoped>
</style>

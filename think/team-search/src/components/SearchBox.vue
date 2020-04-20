<template>
    <div id="team-search-box">
        <input type="text" v-model="keyword"><input type="button" value="search" v-on:click="search">
    </div>
</template>

<script>
    export default {
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
            this.keyword = this.$route.query.q ? this.$route.query.q : '';
            if (this.$store.state.pageAllReady) {
                this.$store.dispatch('searchKeyword');
            } else {
                const unsubscribe = this.$store.subscribe((mutation) => {
                    if (mutation.type === 'setPageAllReady') {
                        this.$store.dispatch('searchKeyword');
                        unsubscribe();
                    }
                });
            }
        },
        computed: {
            keyword: {
                get() {
                    return this.$store.state.keyword
                },
                set(value) {
                    this.$store.dispatch('setKeyword', {
                        keyword: value,
                    });
                }
            },
        },
        watch: {
            '$route'(to, from) {
                if (to.query.q === from.query.q) return;
                this.keyword = to.query.q ? to.query.q : '';
                this.$store.dispatch('searchKeyword');
            }
        },
        methods: {
            search() {
                this.$store.dispatch('searchKeyword');
                this.$router.push(`/s?q=${this.$store.state.keyword}`, () => {
                }, () => {
                });
            }
        }
    }
</script>
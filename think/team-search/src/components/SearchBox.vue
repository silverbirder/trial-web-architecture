<template>
    <div id="team-search-box">
        <input type="text" v-model="keyword"><input type="button" value="search" v-on:click="search">
        <span v-html="html" id="html"></span>
    </div>
</template>

<script>
    export default {
        created() {
            this.keyword = this.$route.query.q ? this.$route.query.q : '';
            this.$store.dispatch('searchKeyword').then((res) => {
                this.html = res.data;
            });
        },
        computed: {
            keyword: {
                get() {
                    return this.$store.state.keyword;
                },
                set(value) {
                    this.$store.dispatch('setKeyword', {
                        keyword: value,
                    });
                }
            },
            html: {
                get() {
                    return this.$store.state.html;
                },
                set(value) {
                    this.$store.state.html = value;
                }
            }
        },
        watch: {
            '$route'(to, from) {
                if (to.query.q === from.query.q) return;
                this.keyword = to.query.q ? to.query.q : '';
                this.$store.dispatch('searchKeyword').then((res) => {
                    this.html = res.data;
                });
            }
        },
        methods: {
            search() {
                this.$store.dispatch('searchKeyword').then((res) => {
                    this.html = res.data;
                });
                this.$router.push(`/s?q=${this.$store.state.keyword}`, () => {
                }, () => {
                });
            }
        }
    }
</script>
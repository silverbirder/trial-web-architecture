<template>
    <div>
        <input type="text" v-model="keyword"><input type="button" value="search" v-on:click="search">
    </div>
</template>

<script>
    export default {
        created() {
            this.keyword = this.$route.query.q ? this.$route.query.q: '';
            this.$store.dispatch('searchKeyword');
        },
        computed: {
            keyword: {
                get () {
                    return this.$store.state.keyword
                },
                set (value) {
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
                this.$router.push(`/s?q=${this.$store.state.keyword}`, () => {}, () => {});
            }
        }
    }
</script>
<template>
    <div>
        <input type="text" v-model="searchText" @change="search">
    </div>
</template>

<script>
    export default {
        created() {
            const query = this.$route.query;
            if (query.q) {
                this.searchText = query.q;
                this.$store.dispatch('search', {
                    keyword: query.q,
                })
            }
        },
        computed() {
            return {
                searchText: this.$store.getKeyword()
            }
        },
        methods: {
            search() {
                this.$store.dispatch('search', {
                    keyword: this.searchText
                }).then((keyword) => {
                    this.$router.push(`/s?q=${keyword}`);
                });
            },
        }
    }
</script>
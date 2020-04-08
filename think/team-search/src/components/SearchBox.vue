<template>
    <div>
        <input type="text" v-model="searchText" @change="search">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                searchText: ''
            }
        },
        methods: {
            search() {
                window.channel.search.publish({
                    topic: "search.word",
                    data: {
                        text: `${this.searchText}`
                    }
                });
            },
        }
    }
</script>
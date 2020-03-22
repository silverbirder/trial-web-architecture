<template>
    <div>
        <h1>{{count}}</h1>
        <button type="button" v-on:click="increment">+</button>
    </div>
</template>

<script>
    export default {
        computed: {
            count () {
                return this.$store.getters.getCount
            },
        },
        methods: {
            increment () {
                window.channel.publish({
                    channel: "orders",
                    topic: "item.add",
                    data: {
                        sku: "AZDTF4346",
                        qty: 21
                    }
                });
                this.$store.dispatch('increment')
            },
        }
    }
</script>
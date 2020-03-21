<template>
  <div id="app">
    <h1>{{message}}</h1>
    <section>
      <button v-on:click="greet">Greet</button>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: 'Hey!'
      }
    },
    methods: {
      greet: function () {
        alert('Hello World');
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: red;
  }
</style>

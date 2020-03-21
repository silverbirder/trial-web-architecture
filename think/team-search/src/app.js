import Vue from 'vue';
import App from './App.vue';
import store from './store'

const createApp = () => {
  const app = new Vue({
    store,
    render: h => h(App),
  });
  return { app };
};

export default createApp;
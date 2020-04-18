import createApp from './app';
const { app } = createApp();
app.$mount('#team-search');
window.channel.search.publish({
    topic: 'search.allReady',
});
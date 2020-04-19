import createApp from './app';

const {app} = createApp();
app.$mount('#team-search');

window.postal.publish({
    channel: 'page',
    topic: 'search.ready',
});
import createApp from './app';
import SearchBox from "./components/SearchBox";

const {app} = createApp(SearchBox);
app.$mount('#team-search-box');

window.postal.publish({
    channel: 'page',
    topic: 'search.ready',
});
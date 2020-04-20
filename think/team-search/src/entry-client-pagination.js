import createApp from './app';
import Pagination from "./components/Pagination";

const {app} = createApp(Pagination);
app.$mount('#team-search-pagination');

window.postal.publish({
    channel: 'page',
    topic: 'search.ready',
});
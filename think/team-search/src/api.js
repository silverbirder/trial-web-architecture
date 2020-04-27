import {api, axiosDefault as axios} from 'create-api'
const DECIDE_HOST = process.env.DECIDE_HOST || `http://localhost:3002`;

export function fetchItems() {
    const CACHE_KEY = 'ITEMS';
    const cache = api.cachedItems;
    if (cache && cache.has(CACHE_KEY)) {
        return Promise.resolve(cache.get(CACHE_KEY))
    }
    return axios.get(`${DECIDE_HOST}/decide/items`)
        .then(response => {
            const script = response.headers['link'].split(';')[0].match(/<([^>]+)>/)[1];
            const html = `${response.data}<script src="${script}"></script>`;
            cache && cache.set(CACHE_KEY, html);
            return html;
        })
}
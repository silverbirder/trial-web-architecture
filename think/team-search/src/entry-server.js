import createApp from './app';
import SearchBox from "./components/SearchBox";
import Pagination from "./components/Pagination";

export default ctx => {
    return new Promise((resolve, reject) => {
        let component;
        const path = ctx.url.split('?')[0];
        switch (path) {
            case '/search/box':
                component = SearchBox;
                break;
            case '/search/pagination':
                component = Pagination;
                break;
        }
        const {app, router} = createApp(component);
        router.push(ctx.url);
        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents();
            if (!matchedComponents.length) {
                reject({code: 404});
            }
            resolve(app);
        }, reject);
    });
}

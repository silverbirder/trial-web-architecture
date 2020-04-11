import Vue from "vue";
import Router from "vue-router";
import SearchBox from "./components/SearchBox.vue";

Vue.use(Router);
export default new Router({
    mode: "history",
    routes: [
        {
            path: '/search/',
            component: SearchBox,
            name: 'index',
        },
    ]
});
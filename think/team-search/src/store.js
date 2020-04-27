import Vuex from 'vuex'
import Vue from 'vue'
import {fetchItems} from "./api";

Vue.use(Vuex);

const state = {
    keyword: '',
    html: ''
};
const actions = {
    setKeyword(context, payload) {
        context.commit('setKeyword', payload.keyword);
    },
    searchKeyword(context) {
        const mockData = [{id: 1, name: 'apple'}, {id: 2, name: 'banana'}, {id: 3, name: 'orange'}];
        const hitItems = mockData.filter((data) => {
            return data.name.match(new RegExp(state.keyword)) !== null;
        });
        if (process.browser) {
            window.postal.publish({
                channel: 'search',
                topic: 'search.word',
                data: {
                    items: hitItems
                }
            })
        } else {
            return fetchItems().then((html) => {
                context.commit('setHtml', html)
            });
        }
    },
    setHtml(context, payload) {
        context.commit('setHtml', payload.html);
    }
};

const getters = {};

const mutations = {
    setKeyword(state, keyword) {
        state.keyword = keyword;
    },
    setHtml(state, html) {
        state.html = html;
    }
};

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})
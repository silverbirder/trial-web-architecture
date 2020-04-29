import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const state = {
    keyword: '',
    decideItems: [],
};
const actions = {
    setKeyword(context, payload) {
        context.commit('setKeyword', payload.keyword);
    },
    searchKeyword(context, payload) {
        const mockData = [{id: 1, name: 'apple'}, {id: 2, name: 'banana'}, {id: 3, name: 'orange'}];
        const hitItems = mockData.filter((data) => {
            return data.name.match(new RegExp(payload.keyword)) !== null;
        });
        if (process.browser) {
            window.postal.publish({
                channel: 'search',
                topic: 'search.word',
                data: {
                    items: hitItems
                }
            })
        }
        context.commit('setDecideItems', hitItems);
    },
};

const getters = {};

const mutations = {
    setKeyword(state, keyword) {
        state.keyword = keyword;
    },
    setDecideItems(state, items) {
        state.decideItems = items;
    }
};

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})
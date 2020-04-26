import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios';

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
        return axios.get('http://team-decide.fly.dev/decide/items');
    }
};

const getters = {};

const mutations = {
    searchKeyword(state, payload) {
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
        }
    },
    setKeyword(state, keyword) {
        state.keyword = keyword;
    }
};

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})
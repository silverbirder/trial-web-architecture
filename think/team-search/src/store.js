import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
    keyword: ''
};
const actions = {
    search (context, payload) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                context.commit('search', payload.keyword);
                resolve(state.keyword)
            }, 500)
        });
    },
};

const getters = {
    getKeyword (state) {
        return state.keyword
    }
};

const mutations = {
    search (state, keyword) {
        state.keyword = keyword;
        if (process.browser) {
            window.channel.search.publish({
                topic: "search.word",
                data: {
                    text: keyword
                }
            });
        }
    },
};

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
    count: 0
}
const actions = {
    increment (context) {
        context.commit('increment')
    },
}

const getters = {
    getCount (state) {
        return state.count
    }
}

const mutations = {
    increment (state) {
        state.count += 1
    },
}

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})
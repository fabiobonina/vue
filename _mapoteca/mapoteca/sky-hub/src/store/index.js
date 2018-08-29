import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    currentUser: null,
    currentUserCont: null,
    currentChannel: null,
    isPrivate: false,
    auth: false,
}

const mutations = {
    SET_AUTH(state, auth) {
        state.currentAuth = auth
    },
    SET_USER(state, user) {
        state.currentUser = user
    },
    SET_USER_CONT(state, userCont) {
        state.currentUserCont = userCont
    },
    SET_CURRENT_CHANNEL(state, channel) {
        state.currentChannel = channel
    },
    SET_PRIVATE(state, isPrivate) {
        state.isPrivate = isPrivate
    },
    SET_APRIVATE(state, isPrivate) {
        state.isPrivate = isPrivate
    }
}

const actions = {
    setAuth({ commit }, auth) {
        commit("SET_AUTH", auth)
    },
    setUser({ commit }, user) {
        commit("SET_USER", user)
    },
    setUserCont({ commit }, userCont) {
        commit("SET_USER_CONT", userCont)
    },
    setCurrentChannel({ commit }, channel) {
        commit("SET_CURRENT_CHANNEL", channel)
    },
    setPrivate({ commit }, isPrivate) {
        commit("SET_PRIVATE", isPrivate)
    }
}

const getters = {
    currentAuth: state => state.currentAuth,
    currentUser: state => state.currentUser,
    currentUserCont: state => state.currentUserCont,
    currentChannel: state => state.currentChannel,
    isPrivate: state => state.isPrivate
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
import { createStore } from 'vuex';

export default createStore({
  state: {
    lang: localStorage.getItem('lang') || 'en-us',
    i18n: null,
  },
  mutations: {
    SET_LANG(state, payload) {
      state.lang = payload;
    },
    SET_I18N(state, payload) {
      state.i18n = payload;
    },
  },
  actions: {
    handleLang({ commit }, payload) {
      commit('SET_LANG', payload);
    },
    initI18n({ commit }, payload) {
      commit('SET_I18N', payload);
    },
  },
  modules: {},
});

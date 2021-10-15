import { createStore } from 'vuex';

// 如果 localStorage 中不存在這兩個語系，把 localStorage 語系設定成英文
// 這一段是為了防止使用者亂改 localStorage 語系導致的錯誤
if (localStorage.getItem('lang') !== 'zh-TW' && localStorage.getItem('lang') !== 'en-US') {
  localStorage.setItem('lang', 'en-US');
}

export default createStore({
  state: {
    lang: localStorage.getItem('lang'),
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

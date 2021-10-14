import { createStore } from 'vuex';

export default createStore({
  state: {
    currentLanguage: localStorage.getItem('lang'),
  },
  mutations: {},
  actions: {
    temp(context, payload) {
      payload.$i18n.locale;
    },
  },
  modules: {},
});

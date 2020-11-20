export default {
  state: {
    locale: "",
  },
  mutations: {
    setLocalInfo(state, locale) {
      state.locale = locale;
    },
  },
  actions: {
    async getLocaleFromLocalStorage({ commit }) {
      const locale = await localStorage.locale;

      if (locale) {
        commit("setLocalInfo", locale);
        return locale;
      }

      return null;
    },
    setLocaleToLocalStorage({ commit }, locale) {
      localStorage.locale = locale;
      commit("setLocalInfo", locale);
    },
  },
  getters: {
    locale: (s) => s.locale,
  },
};

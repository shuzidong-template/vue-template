import Vue from "vue";
import Vuex from "vuex";
import test from "./test";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  getters: {},
  modules: {
    test,
  },
  plugins: [createPersistedState({ storage: sessionStorage })],
});

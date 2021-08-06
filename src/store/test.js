export default {
  state: {
    info: {},
    token: "test_token",
    loading: false,
  },
  getters: {
    getInfo: (state) => state.info,
    getToken: (state) => state.token,
    getLoading: (state) => state.loading,
  },
  mutations: {
    setUser(state, data) {
      state.info = data.info;
      state.token = data.token;
    },
    setLoading(state, data) {
      state.loading = data;
    },
  },
  actions: {},
};

import axios from "axios";
import store from "../store/index";

axios.interceptors.request.use(
  (confing) => {
    store.commit("setLoading", true);
    const needAuth = true;
    if (needAuth) {
      confing.headers.Authorization = `Bearer ${store.getters.getToken}`;
      confing.headers["Content-Type"] = "application/json";
    }
    return confing;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    store.commit("setLoading", false);
    return response.data;
  },
  (error) => {
    store.commit("setLoading", false);
    return Promise.reject(error);
  }
);
export default axios;

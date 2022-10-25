import { createStore } from "vuex";

export default createStore({
  state: {
    formData: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      married: false,
      gender: null,
    },
    errors: [],
  },
  getters: {
    getFormData(state) {
      return state.formData;
    },

    getErrors(state) {
      return state.errors;
    },
  },
  mutations: {
    UPDATEFORMDATA(state, data) {
      state.formData = data;
    },
    REMOVEERRORS(state) {
      state.errors = [];
    },
    SETERRORS(state, data) {
      state.errors.push(...data);
    },
  },
  actions: {},
  modules: {},
});

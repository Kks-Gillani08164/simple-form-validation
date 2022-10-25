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
    UPDATE_FORM_DATA(state, data) {
      state.formData = data;
    },
    REMOVE_ERRORS(state) {
      state.errors = [];
    },
    SET_ERRORS(state, data) {
      state.errors.push(...data);
    },
  },
  actions: {},
  modules: {},
});

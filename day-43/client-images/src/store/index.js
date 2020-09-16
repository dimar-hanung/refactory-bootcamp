import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import router from "../router/index";

import Api from "./api";

Vue.use(Vuex);

const Auth = {
  namespaced: true,
  state: () => ({
    token: "",
    user: {
      id: "",
      fullName: "",
      phone: "",
      role: "",
      username: "",
    },
    allProduct: "test",
    isError: false,
    errorMessage: "",
  }),
  mutations: {
    saveLogin(state, payload) {
      state.token = payload.token;
      state.user = {
        id: payload.id,
        fullName: payload.full_name,
        phone: payload.phone_number,
        role: payload.role,
        username: payload.username,
      };
    },
    saveProduct(state, payload) {
      state.allProduct = payload;
    },
  },
  actions: {
    async reqLogin({ commit }, payload) {
      // console.log({ reqLogin: true });
      Api.post("/auth/login", {
        data: payload,
      })
        .then((res) => {
          const {
            data: { data },
          } = res;
          commit("saveLogin", data);
          localStorage.setItem("token", data.token);
          localStorage.setItem(
            "user",
            JSON.stringify({
              id: data.id,
              fullName: data.full_name,
              phone: data.phone_number,
              role: data.role,
              username: data.username,
            })
          );
          console.log(data);
          router.push("/dashboard");

          // console.log({ res });
        })
        .catch((error) => {
          console.log({ error });
        });
      // const { data } = await Api.post("/auth/login", { data: payload });
      console.log({ commit });
    },
    async registerUser({ commit }, payload) {
      // console.log({ reqLogin: true });
      Api.post("/auth/signup", {
        data: payload,
      })
        .then((res) => {
          const {
            data: { data },
          } = res;
          // commit("saveLogin", data);
          router.push("/login");
          console.log(data);
        })
        .catch((error) => {
          console.log({ error });
        });
      // const { data } = await Api.post("/auth/login", { data: payload });
      console.log({ commit });
    },
    async addProduct() {
      // upload file
      const formData = new FormData();
      formData.append("photo", this.FILE, this.FILE.name);
      console.log(this.file.name);
      formData.append("name", this.name);
      Api.post("/product", formData, {}).then((res) => {
        console.log(res);
      });
    },
    onFileUpload (event) {
      this.FILE = event.target.files[0];
      console.log(this.FILE)
    },
    async getAllProduct({ commit }) {
      Api.get("/product?limit=1000")
        .then((res) => {
          const { data } = res.data;
          commit("saveProduct", data);
        })
        .catch((error) => console.log({ error }));
    },
    async deleteProduct({ dispatch }, id) {
      Api.delete(`/product/${id}`)
        .then(() => dispatch("getAllProduct"))
        .catch((error) => console.log({ error }));
    },
  },
};

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Auth,
  },
  plugins: [createPersistedState()],
});

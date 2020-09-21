import router from "../router/index";

import Api from "./api";
const Auth = {
  namespaced: true,
  state: () => ({
    token: "",
    user: "",
    products: "",
    productsIn: "",
    productsOut: "",
    product: "",
    isError: false,
    errorMessage: "",
  }),
  mutations: {
    setLogin(state, payload) {
      state.token = payload.token;
      state.user = payload;
    },
    setProduct(state, payload) {
      state.products = payload;
    },
    setUsers(state, payload) {
      state.users = payload;
    },
    setProductIn(state, payload) {
      state.productsIn = payload;
    },
    setProductOut(state, payload) {
      state.productsOut = payload;
    },
    setProductId(state, payload) {
      state.product = payload;
    },
  },
  actions: {
    async reqLogin({ commit }, payload) {
      Api.post("/auth/login", {
        data: payload,
      })
        .then((res) => {
          const {
            data: { data },
          } = res;
          commit("setLogin", data);
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data));
          console.log(data);
          router.push("/dashboard");
          // setTimeout(function(){router.go("/go")},1000)
        })
        .catch((error) => console.log({ error }));
    },
    async registerUser({ commit }, payload) {
      {
        commit;
      }
      Api.post("/auth/signup", { data: payload })
        .then((res) => {
          console.log(res);
          router.push("/login");
        })
        .catch((error) => console.log({ error }));
    },
    async addProduct() {
      // upload file
      const formData = new FormData();
      formData.append("photo", this.FILE, this.FILE.name);
      formData.append("name", this.name);
      Api.post("/product", formData, {}).then((res) => {
        console.log(res);
      });
    },
    onFileUpload(event) {
      this.FILE = event.target.files[0];
      console.log(this.FILE);
    },

    // ==================== Get Products ================================
    async getProducts({ commit }, query = { limit: 5 }) {
      console.log(query);
     await Api.get(`/product`, {
        params: query,
        headers: { Authorization: `bearer ${localStorage.getItem("token")}` },
      })
        .then((res) => commit("setProduct", res.data))
        .catch((error) => console.log({ error }));
    },
    async getProductsIn({ commit }, query = { limit: 5 }) {
      await Api.get("/in", {
        params: query,
        headers: { Authorization: `bearer ${localStorage.getItem("token")}` },
      })
        .then((res) => commit("setProductIn", res.data.data))
        .catch((error) => console.log({ error }));
    },
    async getProductsOut({ commit }, query = { limit: 5 }) {
      await Api.get("/out", {
        params: query,
        headers: { Authorization: `bearer ${localStorage.getItem("token")}` },
      })
        .then((res) => commit("setProductOut", res.data.data))
        .catch((error) => console.log({ error }));
    },
    async getProductId({ commit }, payload) {
     await Api.get(`product/${payload}`)
        .then((res) => commit("setProductId", res.data.data))
        .catch((error) => console.log({ error }));
    },
    async editProduct({ dispatch }, payload) {
      let formData = new FormData();
      for (var key of Object.keys(payload)) {
        formData.append(key, payload[key]);
        console.log(key, payload[key]);
      }
      if (payload.FILE) {
        formData.append("photo", this.inputVal.FILE, this.inputVal.FILE.name);
      }
      Api.put(`product/${payload.id}`, formData, {})
        .then((res) => {
          dispatch("getProductId", payload.id);
          console.log(res);
        })
        .catch((err) => console.log(err));
    },

    // ==================== xxx Get Products xxx ================================
    // ====================  Del Product  ================================
    async deleteProduct({ dispatch }, id) {
      if (confirm(`Delete Product dengan Id ${id} ?`))
        Api.delete(`product/${id}`)
          .then(() => dispatch("getProducts"))

          .catch((error) => console.log({ error }));
    },
    async deleteProductIn({ dispatch }, id) {
      if (confirm(`Delete ProductIn dengan Id ${id} ?`))
        Api.delete(`in/${id}`)
          .then(() => dispatch("getProductsIn"))
          .catch((error) => console.log({ error }));
    },
    async deleteProductOut({ dispatch }, id) {
      if (confirm(`Delete ProductOut dengan Id ${id} ?`))
        Api.delete(`out/${id}`)
          .then(() => dispatch("getProductsOut"))
          .catch((error) => console.log({ error }));
    },

    // ==================== xxx Del Product xxx ================================
    async getUsers({ commit }, query = { limit: 5 }) {
      await Api.get(`user`,{
        params: query,
      })
        .then((res) => commit("setUsers", res.data.data))
        .catch((error) => console.log({ error }));
    },
  },
};

export default Auth;

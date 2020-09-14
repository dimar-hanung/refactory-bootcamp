import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
Vue.use(Vuex);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default new Vuex.Store({
  state: {
    originalItems: [],
    items: [],
    // carts : []
  },
  actions: {
    loadItems({ commit }) {
      const cache = localStorage.getItem("data");
      if (cache) commit("setItems", JSON.parse(cache));
      else {
        axios
          .get("http://jsonplaceholder.typicode.com/photos?_start=0&_limit=100")
          .then((r) => r.data)
          .then((items) => {
            commit("setItems", items);
          });
      }
    },
    searchItems({ commit }, payload) {
      payload.length >= 3 ? commit("setFoundItems", payload) : commit("setFoundItems", '')
    },

    pushToCart({commit}, payload){
      {commit}
      commit("setCart",payload)
      // console.log(state.carts)
    },
    removeCart({commit},payload){
      commit("removeCart",payload)
    },
    increaseCount({commit},payload){
      commit("totalCount",payload)
    }

  },
  mutations: {
    totalCount(state,payload){
      const itemIndex = state.items.findIndex(x => x.id == payload.id);
      if(payload.increase){
        state.items[itemIndex].total += 1
      }
      else{
        state.items[itemIndex].total -= 1
      }
      localStorage.setItem("data", JSON.stringify(state.items));
    },
    removeCart(state,payload){
      const itemIndex = state.items.findIndex(x => x.id == payload.id);
      state.items[itemIndex].selected = false
      state.items[itemIndex].total = 0
      localStorage.setItem("data", JSON.stringify(state.items));
      // state.carts.push(payload)
    },
    setCart(state,payload){
      // console.log(state.carts)
      const itemIndex = state.items.findIndex(x => x.id == payload.id);
      state.items[itemIndex].selected = true
      state.items[itemIndex].total +=1
      localStorage.setItem("data", JSON.stringify(state.items));
      // state.carts.push(payload)
    },
    setFoundItems(state, payload) {
      state.items = state.originalItems.filter(
        (data) => data.title.indexOf(payload) != -1
      );
    },
    setItems(state, items) {
      const cache = localStorage.getItem("data");
      if (cache) state.originalItems = JSON.parse(cache);
      else {
        state.originalItems = items.map((v) => ({   ...v,  price: getRandomInt(18000, 100000), selected : false,total:0 }));
        localStorage.setItem("data", JSON.stringify(state.originalItems));
      }
      state.items = state.originalItems;
    },
  },
});

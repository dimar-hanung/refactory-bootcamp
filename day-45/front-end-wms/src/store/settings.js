const Setting = {
  namespaced: true,
  state: () => ({
    showImage: true,
    toastActive:{
      err:true,
      res_err:true
    }
  }),
  mutations: {
    imageVisibility(state) {
      state.showImage = !state.showImage;
    },
    toastToggle(state,payload) {
        state.toastActive[payload] = !state.toastActive[payload]
      },
  },
  actions: {
    imageVisibility({ commit }) {
      commit("imageVisibility");
    },
    toastToggle({ commit },payload) {
        commit("toastToggle",payload);
      },
    selectTheme({ commit },theme) {
        {commit}
      const d = document.getElementsByTagName('body')[0];
      if (theme != "vue") {
        d.setAttribute("class", `theme-${theme} text-inverse`);
        localStorage.setItem("theme", theme);
      }
      else {
        d.setAttribute("class", "text-inverse");
        localStorage.removeItem("theme");
      }
    },
  },
};

export default Setting;

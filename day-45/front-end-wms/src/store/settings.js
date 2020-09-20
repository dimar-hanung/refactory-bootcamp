const Setting = {
  namespaced: true,
  state: () => ({
    showImage: true,
    toastActive:true
  }),
  mutations: {
    imageVisibility(state) {
      state.showImage = !state.showImage;
    },
    toastToggle(state) {
        state.toastActive = !state.toastActive
      },
  },
  actions: {
    imageVisibility({ commit }) {
      commit("imageVisibility");
    },
    toastToggle({ commit }) {
        commit("toastToggle");
      },
    selectTheme({ commit },theme) {
        {commit}
      const d = document.documentElement;
      // m = localStorage.getItem("theme");

      if (theme == "light") {
        d.setAttribute("class", "theme-light");
        localStorage.setItem("theme", "light");
      }
      if (theme == "dark") {
        d.classList.add("theme-dark");
        d.setAttribute("class", "theme-dark text-inverse");
        localStorage.setItem("theme", "dark");
      }
      if (theme == "vue") {
        d.setAttribute("class", "text-inverse");
        localStorage.removeItem("theme");
      }

      // if (d.classList.contains("theme-light")) {
      //   d.classList.remove("theme-light");
      //   localStorage.removeItem("theme");
      // } else {
      //   d.classList.add("theme-light");
      //   localStorage.setItem("theme", "light");
      // }
    },
  },
};

export default Setting;

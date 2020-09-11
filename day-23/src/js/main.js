Vue.component("todo-item", {
  data() {
    return {
      toggle_popup: "popup-show",
    };
  },
  template: /*html*/ `
    <div v-bind:class="popup?'popup-show':'popup-hide'">
        <slot></slot>
        <div class="py-2 text-center text-white">
          {{articleTitle}}
        </div>
      <img :src="item.url" alt="">
    </div>
    `,
  props: ["title", "popup", "item"],
  computed: {
    articleTitle() {
      if (this.item) {
        return (
          "Judul: " +
          this.item.title.replace(/(^\w{1})|(\s{1}\w{1})/g, (match) =>
            match.toUpperCase()
          )
        );
      }
    },
  },
});
new Vue({
  el: "#app",

  data() {
    return {
      searchQuery: "",
      resources: data,
      filter: [],
      loading: false,
      popup: false,
      item: "",
    };
  },
  methods: {
    openTitle: function (data) {
      this.item = data;
      this.popup = true;
    },
    filteredResources: async function (e) {
      this.loading = true;
      if (this.searchQuery.length >= 3) {
        this.filter = "";
        await this.wait(100);
        this.filter = this.resources.filter(
          (data) => data.title.indexOf(this.searchQuery) != -1
        );
      } else this.filter = this.resources;
      this.loading = false;
    },
    wait: async function (ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
  },

  watch: {
    searchQuery: (a, b) => {
      console.log(a);
      console.log(b);
    },
  },
  created() {
    this.filteredResources();
  },
});

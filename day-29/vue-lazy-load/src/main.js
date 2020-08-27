import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/styles/index.css";
import posts from "@/dummy/posts.js";
import albums from "@/dummy/albums.js";
import photos from "@/dummy/photos.js";
import VuePaginate from "vue-paginate";
Vue.use(VuePaginate);

Vue.mixin({
  data: function() {
    return {
      posts: posts,
      albums: albums,
      photos: photos,
      paginate: ["postingan","foto"],
    };
  },
  methods: {
    getById(data) {
      console.log(data);
      return data[0].filter((post) => post.id == data[1]);
    },
  },
});

Vue.filter("capitalize", function(words) {
  return words.replace(/(^\w{1})|(\s{1}\w{1})/g, (match) =>
    match.toUpperCase()
  );
});

Vue.filter("getById", function(data) {
  return data[0].filter((post) => post.id == data[1]);
});

Vue.config.productionTip = false;

new Vue({
  router,
  VuePaginate,
  render: (h) => h(App),
}).$mount("#app");

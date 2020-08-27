import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);
// const isAdmin = "";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/About",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    children: [
      {
        path: "website",
        component: () =>
          import(/* webpackChunkName: "about-website" */ "../views/Website.vue"),
      },
      {
        path: "pendidikan",
        component: () =>
          import(/* webpackChunkName: "about-pendidikan" */ "../views/Pendidikan.vue"),
      },
    ],
  },
  {
    path: "/albums",
    name: "Albums",
    components: {
      default: () =>
        import(/* webpackChunkName: "albums" */ "../views/Albums.vue"),
      popular: () =>
        import(
          /* webpackChunkName: "album-popular" */ "../components/widgets/Popular.vue"
        ),
    },
  },
  {
    path: "/albums/:id",
    name: "Album",
    component: () =>
      import(/* webpackChunkName: "album" */ "../views/Album.vue"),
  },
  {
    path: "/photos",
    name: "Photos",
    component: () =>
      import(/* webpackChunkName: "photos" */ "../views/Photos.vue"),
  },
  {
    path: "/photos/:id",
    name: "Photo",
    component: () =>
      import(/* webpackChunkName: "photo" */ "../views/Photo.vue"),
  },
  {
    path: "/posts",
    name: "Posts",
    components: {
      default: () =>
        import(/* webpackChunkName: "posts" */ "../views/Posts.vue"),
      popular: () =>
        import(
          /* webpackChunkName: "posts popular" */ "../components/widgets/Popular.vue"
        ),
    },
    beforeEnter: (to, from, next) => {
      
        let auth= prompt("Akses Ditolak, Masukan Autentikasi : 123abc");
        while(auth != "123abc"){
          next({ name: "Home" });
          return
        }
        next();

       
    },
  },
  { path: "/posts/:id", name: "PostsId", component:()=>import(/* webpackChunkName: "post" */ "../views/Post.vue") },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

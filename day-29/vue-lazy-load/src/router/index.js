import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
// import About from "../views/About.vue";
// import Albums from "../views/Albums.vue";
import Album from "../views/Album.vue";
import Photos from "../views/Photos.vue";
import Photo from "../views/Photo.vue";
// import Posts from "../views/Posts.vue";
import Post from "../views/Post.vue";
import Web from "../views/Website.vue";
import Pendidikan from "../views/Pendidikan.vue";

Vue.use(VueRouter);
const isAdmin = "";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "albums" */ "../views/Home.vue"),
  },
  {
    path: "/About",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "group-foo" */ "../views/About.vue"),
    children: [
      {
        path: "website",
        component: () =>
          import(/* webpackChunkName: "albums" */ "../views/Website.vue"),
      },
      {
        path: "pendidikan",
        component: () =>
          import(/* webpackChunkName: "albums" */ "../views/Pendidikan.vue"),
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
          /* webpackChunkName: "albums" */ "../components/widgets/Popular.vue"
        ),
    },
  },
  {
    path: "/albums/:id",
    name: "Album",
    component: () =>
      import(/* webpackChunkName: "albums" */ "../views/Album.vue"),
  },
  {
    path: "/photos",
    name: "Photos",
    component: () =>
      import(/* webpackChunkName: "albums" */ "../views/Photos.vue"),
  },
  {
    path: "/photos/:id",
    name: "Photo",
    component: () =>
      import(/* webpackChunkName: "albums" */ "../views/Photo.vue"),
  },
  {
    path: "/posts",
    name: "Posts",
    components: {
      default: () =>
        import(/* webpackChunkName: "albums" */ "../views/Posts.vue"),
      popular: () =>
        import(
          /* webpackChunkName: "albums" */ "../components/widgets/Popular.vue"
        ),
    },
    beforeEnter: (to, from, next) => {
      if (to.name !== isAdmin) {
        alert("Maap bang cuma admin yang boleh nih");
        next({ name: "About" });
      } else next();
    },
  },
  { path: "/posts/:id", name: "PostsId", component: Post },
];

// const routes= [
// {
//   path: "posts",
//   component: Posts,
//   children: [
//     {
//       path: ":id",
//       component: Post,
//     },
//   ],
// },
// ];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

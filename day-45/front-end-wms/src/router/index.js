import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect:"/dashboard"
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path:"/login",
    name:"Login",
    component:()=> import(/* webpackChunkName: "login" */ "../views/Login.vue"),
    meta: { hideNavigation: true,requiresAuth:true }
  },
  {
    path:"/register",
    name:"Register",
    component:()=> import(/* webpackChunkName: "Register" */ "../views/Register.vue"),
    meta: { hideNavigation: true,requiresAuth:true }
  },
  {
    path:"/dashboard",
    name:"Dashboard",
    component:()=> import(/* webpackChunkName: "Dashboard" */ "../views/Dashboard.vue"),
  },
  {
    path:"/users",
    name:"Users",
    component:()=> import(/* webpackChunkName: "Users" */ "../views/Users.vue"),
  },
  {
    path:"/settings",
    name:"Settings",
    component:()=> import(/* webpackChunkName: "Settings" */ "../views/Settings.vue"),
  },
  {
    path:"/products",
    redirect: '/products/main',
    name:"Products",
    component:()=> import(/* webpackChunkName: "Products" */ "../views/Products.vue"),
    children: [
      {
        path: 'in',
        component:()=> import(/* webpackChunkName: "ProductsIn" */ "../views/ProductsIn.vue"),
      },
      {
        path: 'out',
        component:()=> import(/* webpackChunkName: "ProductsOut" */ "../views/ProductsOut.vue"),
      },
      {
        path: 'main',
        component:()=> import(/* webpackChunkName: "ProductsMain" */ "../views/ProductsMain.vue"),
      },
      {
        path: 'edit/:id',
        component:()=> import(/* webpackChunkName: "ProductsEdit" */ "../views/ProductEdit.vue"),
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  console.log(to,from)
  if (to.matched.some(record => !record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    console.log("masuk")
    // alert(localStorage.getItem("token"),!localStorage.getItem("token"))
    if (!localStorage.getItem("token")) {
      next({
        path: '/login',
      })
      
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router;

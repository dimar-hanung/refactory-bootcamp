# Try Out VueJS - WMS

## Before Deadline
-

## Live Demo
- Firebase: https://dimar-vue-front-wms.web.app - Up To Date - Forever
- Heroku: https://dimar-front-wms-2.herokuapp.com/ - Up To Date until Deadline

## Note
- Tidak Menggunakan Search Box karena tidak tersedia dari backend nya, karena pagination menggunakan trigger dari query params nya bukan di load semua langsung
- Abaikan langkah pengerjaan, waktu tidak cukup :smile:

## Main Task

- [x] membuat aplikasi Frontend untuk Simple Warehout management System menggunakan Vue js include Vuex dan Vue Route, design dan framework css bebas (tailwind di sarankan)
- [x] Untuk endpoint dan API Documentation masih sama, hanya base url di arahkan ke https://simple-wms.herokuapp.com/
- [x] publish atau deploy aplikasi ke heroku | 2020-09-20 14:44:08

## Implementation, Techinique & Task

- [x] Vue CLI | [Install](https://cli.vuejs.org/guide/installation.html)
- [x] Bagi Ke Component
- [x] Nested Children Modal | Form with slot -> Form Request Component -> Input Component
- [x] Sidebar Responsive
- [x] Login Page
- [x] Register Page
- [x] Dashboard Page
- [x] Products | C R U D
- [x] Productin & out | C R D
- [x] User | C R
- [x] Pagination | Product All
- [x] Download PDF (server yg error)
- [x] Loading Bar (NProgress)
- [x] Toast | vue-toast-notification
- [x] Tailwindcss
- [x] Purgecss Untuk Small CSS Size
- [x] Cache State | vuex-persistedstate
- [x] Firebase Deploy | 2020-09-20 01:27:25
- [x] Responsive (Up to 350px)
- [x] Theme, Dark, Light, Vue (green)
- [x] Toast Options
- [x] Heroku Deploy | 2020-09-20 14:44:08

## Problem
- [ ] Pagination URL Bug
- [ ] Beberapa Bug Styling tidak terduga
- [x] First Get Sering Bug | 2020-09-21 08:29:48
    ## Solution
    Menggunakan async saat created dan menggunakan kondisi di templatenya jika await selesai baru render
    

# Langkah Pengerjaan

## Install Vue Js

1. Membuat app vuejs (vue create app)
   ```bash
   vue create front-end-wms
   ```
1. Pilih `Manually select features` | `Enter`
1. Pilih dengan spasi, setelah memilih tekan `Enter`, yang dipilih :
   - Choose Vue version
   - Babel
   - Router
   - Vuex
   - Linter / Formatter \
1. Pilih versi Vue `2.x` | `Enter`
1. `Use history mode for router? ` ketik y lalu `Enter`
1. Pilih yang `ESLint + Prettier` | `Enter`
1. Pilih `Lin on save` | `Enter`
1. Pilih `In dedicated config files` | `Enter`
1. ketik y kalau mau simpen preset, biar nanti kalau buat vue app lagi yang sama udah ada preset nya, tapi kalau tidak ya gpp, ga ngaruh ke project nya juga, kalau saya ketik n saja
1. Tunggu Proses Install, lumayan lama
1. Masuk ke folder front-end-wms, lalu `npm run serve` untuk menjalankan vue mode dev
1. Setelah itu vue sudah bisa dibuka di browser, tergantung port

## Menghubungkan API (AXIOS + VueJS)

1. Install AXIOS
   ```bash
   npm install axios
   ```
1. Buat File dibawah ini, tujuan nya adalah supaya jika bisa memberi base url + jika nanti sewaktu waktu ingin ganti http request menjadi selain axios akan tidak kerepotan untuk mengganti ulang semua

   ```js
   // src/store/api.js
   import axios from "axios";

   const instance = axios.create({
     baseURL: `https://simple-wms.herokuapp.com/`,
     headers: {
       "Content-Type": "application/json",
     },
   });

   instance.interceptors.request.use(
     (config) => {
       console.log({ request: config });
       return config;
     },
     (error) => Promise.reject(error)
   );
   instance.interceptors.response.use(
     function (response) {
       console.log({ response });
       return response;
     },
     function (error) {
       return Promise.reject(error.response.data.message);
     }
   );

   export default instance;
   ```

1. test axios

   ```js
   // src/store/index.js
   import Vue from "vue";
   import Vuex from "vuex";
   import api from "./api";
   Vue.use(Vuex);

   export default new Vuex.Store({
     state: {
       products: [],
     },
     mutations: {
       setItems(state, payload) {
         state.products = payload;
       },
     },
     actions: {
       loadItems({ commit }) {
         api.get("").then((res) => commit("setItems", res));
       },
     },
     modules: {},
   });
   ```

   ```html
   <!-- src/views/Home.vue -->
   <template>
     <div class="home">
       {{ products }}
       <HelloWorld msg="Welcome to Your Vue.js App" />
     </div>
   </template>

   <script>
   // @ is an alias to /src
   import HelloWorld from "@/components/HelloWorld.vue";
   import { mapState, mapActions } from "vuex";
   export default {
     name: "Home",
     components: {
       HelloWorld,
     },
     methods: {
       ...mapActions(["loadItems"]),
     },
     mounted() {
       this.loadItems();
     },
     computed: {
       ...mapState(["products"]),
     },
   };
   </script>
   ```

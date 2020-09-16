# Client
## Main Task
- [x] Login
- [x] Register
- [x] Product List
- [x] Delete Product
- [x] Add Product
- [ ] Edit Product
- [ ] Show User
- [ ] Product In
- [ ] Product Out
- [ ] Download Report

## How to run
1. `npm install`
1. `npm run serve`


## Problem
- [ ] Ketika pertama kali signin authenticate belum bisa, karena cache belum terbaca

## Technique
- [x] Tailwindcss
- [x] vuetifyjs
- [x] Datatables menggunakan https://vuetifyjs.com/en/components/data-tables/
- [x] Mengecualikan komponen pada routes tertentu \
Menggunakan !meta , referensi : https://github.com/vuejs/vue-router/issues/254
    ```js
    // src/router/index.js
    const router = new VueRouter({
    routes: [
        {
        path: '/foo',
        component: Foo,
        meta: { hideNavigation: true }
        }
    ]
    })
    ```
    ```html
    <!-- app.vue -->
    <navigation v-if="!$route.meta.hideNavigation" />
    ```
- [x] Insert Button pada Datatable vuetifyjs , https://stackoverflow.com/questions/59081299/vuetify-insert-action-button-in-data-table-and-get-row-data

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Try Out VueJS - WMS
## Main Task
- [ ] membuat aplikasi Frontend untuk Simple Warehout management System menggunakan Vue js include Vuex dan Vue Route, design dan framework css bebas (tailwind di sarankan)
- [ ] Untuk endpoint dan API Documentation masih sama, hanya base url di arahkan ke https://simple-wms.herokuapp.com/
- [ ] publish atau deploy aplikasi ke heroku , Documentation

## Requirement
- [x] Vue CLI | [Install](https://cli.vuejs.org/guide/installation.html)
- [ ] Login Page
- [ ] Register Page
- [ ] Dashboard Page
- [ ] Pagination
- [ ] Download PDF

## Additional Task
- [ ] Tailwindcss sebagai css framework
- [ ] Responsive


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
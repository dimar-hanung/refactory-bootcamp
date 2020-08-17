# Express Package
## Folder
1. todo-app-remake = Tugas Harian

## Multer - Middleware
- Untuk mengirim sebuah file, client harus mengirimkan data melalui body dengan format `form data`.\
- Ketika client mengunggah file ke server, umumnya dikirimkan melalui form dan dikodekan sebagai `multipart/form-data`.
- Kemudian server akan memparsingnya menggunakan middleware multer. 
Node JS sendiri tidak dapat menghandle multipart request. Sehingga membutuhkan Multer.
- Multer adalah middleware node.js untuk menangani multipart/form data, yang biasanya digunakan untuk mengunggah file.

## Winston
Kenapa winston?, langsung ke contoh kasus :
- Kita melakukan deploy aplikasi nodeJs kita ke suatu hosting yang menyediakan layanan nodeJs juga, namun dalam hosting tersebut kita tidak punya akses ke server, lalu masalah nya ketika aplikasi kita error tentu kita tidak bisa melihat error nya karena kita tidak punya hak akses server, nah solusinya adalah menggunakan offline log seperti winston

- dengan winston kita bisa membuat log offline, maksudanya log akan dicatat kedalam file baru, dan dapat dilihat sewaktu waktu

## Template Engine
- Dengan menggunakan template engine kita bisa membuat html menjadi lebih dinamis
- kita bisa membuat looping, kondisi, dan banyak lagi di dalam template engine
- template engine cocok menggunakan konsep mvc, file ditaruh di folder view, dan format bisanya tidak berbentuk .html, melainkan .pug .vue atau yang lain tergantung menggunakan template engine yang mana
- contoh template engine
    1. PugJs
    1. EJS
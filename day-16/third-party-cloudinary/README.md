# Autentikasi Rest

## Main Task
- [x] Upload Image Menggunakan https://cloudinary.com/
- [x] Upload berada di route : `localhost:3000/author/image` demgan key `image` juga
- [x] Menggunakan middleware multer untuk mendapatkan data form multipart

## Problem
- [x] gambar lokal belum terhapus saat melakukan upload\
solution: Menggunakan `express-fileupload` dan memanfaatkan tempFiles sebagai pengganti `multer`

- [ ] bisa terjadi duplikat gambar

## Additional Task
- [x] Refactor Menggunakan Migrations
- [x] Refactor Menggunakan reference
- [ ] Menaruh method autentikasi pada controller
- [x] Menaruh method upload pada controller
- [ ] Menggunakan bcrypt salt
- [x] env biar aman
- [x] Passport Middleware
- [x] Autentikasi menggunakan JWT
- [ ] Update Dokumentasi Menggunakan Postman
- [ ] route register
- [x] route login
- [x] route autentikasi untuk setiap halaman
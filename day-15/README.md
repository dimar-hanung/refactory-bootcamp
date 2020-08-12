
# Teori
## DB Migrate

### Teori
- Migration itu proses migrasi schema database dr 1 versi, ke versi lainnya. Perubahan versi trsbt di ikuti dengan pergantian field nya. Contoh field name di pecah jd field first_name dan last_name. **Migration ini mirip commit pada GIT.** Makanya nama file migrasi biasanya pakai tanggal di depannya.

    Knp mesti di catat?

- Dlm skala korporasi, terkadang database yg perlu di migrasi itu letak nya nggak cuman di satu tempat. File migrasi ini digunakan untuk menyelaraskan proses migrasi di semua tempat. File migrasi dpt di transfer ke manapun tempat proses migrasi akan di lakukan/

- Yg kedua, kalau ada proses downgrade skema database, proses downgrade trsbt bisa di lakukan dengan mudah. Cukup re-exec aja file migrasi yg ada di dlm rentang waktu kedua versi trsbt.

    Contoh:

    1-user.migration\
    2-user.migration\
    3-user.migration\
    4-user.migration\
    5-user.migration

    Misalkan skema yg di pakai skrng ada di versi 5. Lalu krn sebuah kendala, kita perlu melakukan migrasi semua data user ke versi 2. Maka untuk melakukan migrasi cukup eksekusi file migrasi nya secara berurutan dr belakang. Dlm kasus ini berarti urutan eksekusi nya adalah 5, 4, 3, baru 2.



- Apakah migration juga digunain untuk insialisasi waktu pertama buat table?

    Nah, salah satu fungsi nya jg adlh ketika kita pgn membuat database baru di sebuah tempat, kita bisa pakai file migration ini untuk melakukan inisialisasi database di tempat baru trsbt.

### Migrations dalam sequelize mysql


![GitHub Logo](https://i.ibb.co/3fvMkW5/image.png)
Saat Melakukan Migrations sequalize akan menghasilkan output file migrations berupa `[tanggal]-judul-migration.js` \

- Package yang dibutuhkan :
    1. Sequelize
    1. Seqiulize-cli
    1. mysql2 (driver mysql)


- Membuat Migrations tanpa cli
    ```
    sequelize-cli migration:generate --name Update-table
    ```
    Akan Menghasilkan `20200809061742-Update-table.js`
    dan isi file nya :
    ```js
    'use strict';
    module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
        * Add altering commands here.
        *
        * Example:
        * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
        */
    },

    down: async (queryInterface, Sequelize) => {
        /**
        * Add reverting commands here.
        *
        * Example:
        * await queryInterface.dropTable('users');
        */
    }
    };
    ```
    disitu ada object function, ada `up` dan `down`
    1. up dijalankan ketika kita melakukan `db:migrate`
    1. down dijalankan ketika kita melakukan `db:migrate:undo`
    1. Sistem undo disini persis kalau kita menggunakan ms word ketika undo juga, awalnya ku kira undo itu berdasar urutan tanggal di file nya ternyata salah. \
    Misal : \
    kita punya file migrate1.js migrate2.js migrate3.js , dan db saat ini ada di `migrate3.js` \
    Kita lakukan `db:migrate:undo` , lalu `db:migrate` maka posisi saat ini ada di `migrate2.js` , \
    nah ketika kita lakukan `db:migrate:undo` lagi, maka hasilnya akan ke `migrate3.js` dan bukan ke `migrate1.js` , karena sebelum nya kita ada di `db:migrate3`




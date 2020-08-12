# noSQL database (MongoDb + Mongoose + Caporal)

## File 
1. 01.app.js - file hasil tugas/pekerjaan
1. schema.js - mendefinisikan schema mongoDb

## how to run 
1. Jalankan server mongoDb
1. npm install
1. Run command

## command list 
1. list => Menampilkan semua list
1. add "Deskripsi List todo" => Menambah list
1. update [id] "deskripsi update" => update berdasar id
1. delete [id] => menghapus list berdasar id
1. clear => menghapus semua list dengan peringatan prompt terlebih dahulu
1. done [id] => mengubah status menjadi done
1. undone [id] => membatalkan status done


## Sekilas noSQL database 
Cara kerja database noSQL yakni dengan menggunakan <br/>
berbagai model database untuk mengelolah dan mengakses data, 
seperti document, key-value, grapik, in-memory dan search-engine.
<br>
Kalau di sql biasanya menggunakan table, di nosql kita menggunakan collection, bentuknya bisa berupa ```JSON```
### A .  Istilah dalam noSQL
- **Document** adalah datanya.
- **Collection** Itu kumpulan dr document
- **Schema** adalah blue print dr data yg akan di masukkan. Schema biasanya berisi tipe data yg akan digunakan untuk validasi.
- **Model** adalah gabungan dr schema Dan fungsi CRUD ke database nya.

### B. Perbandingan istilah pada mySQL dan noSQL


| mySQL         | noSQL         |
| ------------- | ------------- |
| Database      | Database      |
| Tabel         | Collection    |
| Row / Record  | Documents     |
| Collumn       | Field         |


## Sekilas tentang ODM dan ORM 
- `MySQL` adalah contoh dari database relasional - Anda akan menggunakan `ORM` untuk menerjemahkan antara objek Anda dalam kode dan representasi relasional data.

    Contoh `ORM` adalah `sequelize` , `Entity Framework` , `Dapper` , dan lainnya ...

- `MongoDB` adalah contoh database dokumen - Anda akan menggunakan ODM untuk menerjemahkan antara objek Anda dalam kode dan representasi dokumen dari data (jika diperlukan).

    `Mongoose` adalah contoh `ODM` untuk `MongoDB`.




## MongoDB - Document Oriented database 
Adalah salah satu database nosql


### A . Installasi MongoDB
1. [MongoDb Community](https://docs.mongodb.com/manual/administration/install-community/) - untuk latian ini aja
1. [MongoDb Enterprise](https://docs.mongodb.com/manual/administration/install-enterprise/) - untuk lanjutan kalau udah pro / untuk komersial

### B . Start Server MongoDB - Windows
- Secara default mongo berjalan pada port `27017` atau `27018`	
1. untuk menjalankan server bisa dengan cara masuk ke path
    ```path
    C:\Program Files\MongoDB\Server\4.2\bin>mongod
    ```
    tergantung install mongo dimana itu default nya, perhatikan juga `4.2` itu versi nya, beda versi beda folder

1. Secara default path database mongodb berada di `C:\data\db` , ada kasus dimana folder itu belum terbuat saat melakukan penginstallan, maka perlu dibuat secara manual , kalau tidak akan terjadi error seperti ini  <br>
`CONTROL  [main] Automatically disabling TLS 1.0, to force-enable TLS 1.0 specify`

1. Server sudah berjalan, ya itu bukan stuck, CMD tadi harus tetap terbuka apabila menjalankan server mongo
1. kita coba buka `mongo shell` , difolder yang sama kita jalankan perintah `mongo`
    ```
    C:\Program Files\MongoDB\Server\4.2\bin>mongo
    ```
    apabila menemui error seperti ini `'mongo' is not recognized as an internal or external command, operable program or batch file`
    Maka kita perlu set enviroment dari mongo db nya dulu
    [Buka Tutorial](https://stackoverflow.com/questions/15053893/mongod-command-not-recognized-when-trying-to-connect-to-a-mongodb-server/41507803)

  ## Mongoose - MongoDB ODM 
  Mongoose merupakan salah satu mongoDB ODM pada javascript

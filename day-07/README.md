
# Asynchronous JavaScript
- Asynchronus : script yang lebih selesai duluan yang dijalankan
- Syncronus : lawan Asyncronus, script akan berjalan secara berurutan dari atas kebawah
## Main Task
- [x] 01.js - readDir Function, untuk membaca direktori os
- [x] 02.js - merge data array dari 2 api resource
- [x] 03.js - refactor code ke promise

## Promises
Promises / Janji
1. Memiliki 3 status
    1. pending: keadaan awal, tidak terpenuhi atau ditolak.
    1. fulfilled: Kalau sukses, pakai parameter resolved biasanya.
    1. rejected: operasi gagal atau ditolak misal.
2. Syntax
```javascript
new Promise((resolve, reject) => { 

// disini biasanya berisi kode yang mengandung proses dan memakan waktu
// nama parameter bebas sebernya, tapi untuk standar convetion baik nya pakai itu aja

}) 
```



## HTTP Request

### Method yang paling sering digunakan :
1. GET
1. POST
1. PUT
1. DELETE

### Cara untuk melaukan HTTP Request
dibawah ini yang ku tau aja ,sebenernya banyak
1. XMLHttpRequest 
2. Fetch
3. Axios
4. Ajax Jquery

## async dan await
1. jadi async await itu untuk njalanin asyncronus code, bingung ya, liat di contoh filenya aja langsung
1. ketika membuat await <b>Wajib di ikuti async</b> terlebih dahulu
### contoh syntax
```javascript
(async ()=>{

    // disini bisa menambahkan fungsi await

  })()
```
btw ```(async ()=>{ // code... })()``` nama nya self-invoking funciton / fungsi yang memanggil dirinya sendiri
nah untuk liat lengkap nya penggunaan async bisa liat liat isi file aja, contoh paling dasar ada di ```promise.js```



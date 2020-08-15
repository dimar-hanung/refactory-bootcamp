# Functional Programming Paradigm
Perbedaan dengan day-02, disini menggunakan paradigma pemrograman supaya code lebih efisies
## Main Task
- [x] 01.js - Palindrome
- [x] 02.js - Menggabungkan Array
- [x] 03.js - Convert CSV format ke Javascript Objek
- [x] 04.js - Mengetahui tahun kabisat melalui range tahun
- [x] 05.js - Matematika :D
- [x] 06.js - Sensor kata
- [x] 07.js - Menghitung jumlah kata spesifik
- [x] 08.js - Bermain dengan string
- [x] 09.js - Bermain dengan Objek

## Paradigma pemrograman tuh apa sih?
Functional Programming Paradigm adalah sebuah style penulisan pada sebuah function yang menekankan pada
komputasi didalam sebuah fungsi matematis dan menghindari perubahan data.
1.	Hindari penggunaan variable let dan var (mutable variable)
2.	Hindari perubahan pada sebuah array, object, map maupun set, lebih baik membuat baru.
3.	Hindari melakukan loop pada function, contoh: total harus pakai reduce() pada sebuah Array.


## Yang perlu diperhatikan untuk mengikuti paradigma FP
 1. Function harus bersifat pure, dimana ia akan menerima parameter sebagai input dan mengembalikan nilai, tanpa mengubah nilai dari variabel manapun.
    Contoh Salah :
    ```javascript
    let a = 1;
    let b = 2;
    function jumlah(){
        return a + b
    }
    jumlah() // 3
    ```

    Seharusnya seperti ini:
    ```javascript
    function jumlah(a,b){
        return a + b
    }
    jumlah(1,2) // 3
    jumlah(5,5) // 10
    ```
    nah maksudnya di situ supaya sifat dari program kita lebih dinamis, dan bisa digunakan secara berulang


2. Function tidak boleh menggunakan nilai dari variabel yang bukan sebagai parameter.
    ```javascript
    let b = 2;
    function jumlah(a){
        return a + b
    }
    jumlah(1) // 3
    ```
    jangan setengah setengah gitu juga, intinya dijadiin biar bener bener pure wkwk

3. Function harus mengembalikan satu nilai untuk setiap input. Function yang mengembalikan kemungkinan nilai untuk satu nilai input yang sama tidak memenuhi prinsip FP.
    ```javascript
    function jumlah(a,b){
        const result = a + b
    }
    jumlah(1,2) // undefined
    ```
    itu salah juga, membuat fungsi itu harus mengembalikan sesuatu, kalo enggak ada hasilnya ya buat apa dibuat fungsi ya kan


4. high order function
    Sebuah function yang meminta parameter sebuah function dan menjalan function tersebut.
    dengan menggunakan higher-order function, kita dapat melakukan chaining. 

    contoh gini
    ```javascript
    const number = [1, 2, 3, 4, 5];
    let output = []
    for (let i = 0; i < number.length; i++) {
    output.push("ini angka : " + number[i]);
    }
    console.log(output)
    ```
    Nah itu pake traditional loop gitu super ga efisien
    dengan menggunakan map() kita bisa sangat menghemat baik dari segi komputasi, readable, maupun panjang nya code
    ```javascript
    const number = [1, 2, 3, 4, 5];
    console.log(number.map(val => "ini angka: "+val))
    ```
    kedua syntax itu menghasilkan output sama yaitu :
    ```javascript
    [
    'ini angka: 1',
    'ini angka: 2',
    'ini angka: 3',
    'ini angka: 4',
    'ini angka: 5'
    ]
    ```

5. Mutability vs Immutability
    Immutability adalah sebuah konsep dimana semua variabel, setelah sekali didefinisikan dan diassign sebuah nilai, nilai tersebut tidak boleh digantikan atau berubah.
    Hal ini memiliki keuntungan dimana kita terhidar dari terjadinya side-effects,
    dimana satu proses dapat mempengaruhi nilai sebuah variabel secara global dan menyebabkan error yang relatif sulit untuk di debug.

    es6 punya const dan let sebagai variable, 
    nah yang dibahas const ya
    const itu Immutability ketika variable di assign untuk kedua kalinya itu error
    kenapa const?
    bayangin aja
    ```javascript
    let dataPentingBanget = {
        sertifikat_tanah  : "asdijaosdij",
        sertifikat_rumah  : "asdnjasknd",
        ijazah            : "dimar"
    }

    // terus tiba tiba ada orang ngubah
    dataPentingBanget = ""
    // ""
    ```
    kosong dong, beda sama const
    ```javascript
    const dataPentingBanget = {
        sertifikat_tanah  : "asdijaosdij",
        sertifikat_rumah  : "asdnjasknd",
        ijazah            : "dimar"
    }

    // terus tiba tiba ada orang ngubah
    dataPentingBanget = ""
    // Uncaught TypeError: Assignment to constant variable.
    // error dong wkwk, jadi ketauan
    ```
    nah kalo yang ini ketauan errornya, gk kaya yang pertama tadi ga ketauan wkwkw

6. array method 
    Keunggulan disini mengguakan method yang sudah bawaan dari ES6 / sebelumnya dibandingkan 
    menggunakan cara tradisional yaitu, selain mengemat komputasi, readable karena semantic
    dan juga cenderung lebih ringkas

    Oh iya singkat tentang array kita harus berhati hati juga dalam menggunakan methodnya
    jadi ada 4 method di array (JS) \
    1. **Mutator** -> ketika menggunakan method ini array itu sendiri ikut berubah \
    1. **Accessor** -> nah ini ga ngubah array aslinya, + ngembaliin nilai dari fungsi ini \
    1. **Iteration** -> kebanyakan method disini untuk perulangan, nggantiin for, biar lebih hemat komputasi + readable \
    1. **Generic** -> ini belum paham wkwk

    nah itu mutator harus hati hati, solusinya bisa pake slice biar enggak ke mutable / berubah array original nya
    Misal penggunaan nya seperti ini
    ```javascript
    array.slice().splice(0,1)
    ```
    nah itu aman pake mutator gpp, jgn ketuker antara slice dan splice





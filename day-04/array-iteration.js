//// Kalau mau coba experiment boleh aja
//// garis miring 2 itu perintah (nah kalo experiment coba garis miring nya ilangin)
//// garis miring 4 itu komentar sama penjelasan
//// terus =====> judul materi <===== , berati udah beda materi / bahas fungsi lain
//// aku disable semua soalnya biar ga tabrakan

//// Materi di sini membahas array prototype/method
//// https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype


const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
const array = [1, 2, 3, 4, 5];

function paramCheck(element, index, array) {
  console.log(element, index, array, "Value Lebih dari 2:", element > 2);
}

//// ==> entries()
//// Penjelasan stackoverflow = https://stackoverflow.com/questions/46159388/what-is-the-purpose-of-array-entries-in-javascript
//// Mengembalikan objek baru yang berisi pasangan nilai key untuk setiap elemen .
//// Objek bernama Array iterator, tidak bisa di console.log, kurang tau juga, coba aja console.log
//// mungkin kalo mau praktek bisa di chrome dev tools ( chrome console )
//// bisa liat apa isi objek Array iterator nya itu
// const iterator = alphabet.entries();
// iterator.next()
// console.log(iterator.next())
// console.log(iterator.next().value)
// for (let e of iterator) {
//   console.log(e);
// }

//// =============> every() <============
//// Syntax = arr.every(callback(element[, index[, array]])[, thisArg])
//// Ini beda dari looping ya, contoh dibawah , walaupun panjang array = 5
//// tapi fungsi tetep di eksekusi satu kali
//// seperti artinya every = semua, ini hampir kayak filter tapi hanya menghasilkan boolean

// [12, 5, 8, 130, 44].every(paramCheck);   // false
// [12, 54, 18, 130, 44].every(paramCheck); // true

//// bacanya gini, jika keseluruhan isi array ada yang bernilai lebih dari 10 maka print benar
// console.log([12, 54, 18, 130, 44].every(x => x > 10))

//// =============> some() <============
//// bedanya dengan every disini, kalo every itu fungsi di exekusi sekali
//// kalo some ini sama seperti di loop
//// coba aja cek pake paramCheck

//// namun tetep diperhatikan, array.some hanya mengembalikan 1 nilai (boolean),
//// yang di loop itu fungsinya aja, tapi tetep mengembalikan 1 nilai,
//// checks whether an element is even
// const some = array.some(paramCheck); //#Experiment
// const some = array.some(number => number > 2);
// console.log("Mengembalikan Nilai",some)


//// ==========> filter() <=============
//// Bedanya sama some juga every, kalo some sama every cuma mengembalikan 1 nilai boolean
//// nah kalo filter sesuai namanya, ini akan mengembalikan semua value yang sesuai sama kondisi
// const result = array.filter(paramCheck);
// const result = array.filter((number) => number > 2);

// console.log(result);
//// expected output: Array [7,8,9,10]


//// ========> find() <=============
//// find ini hanya mengembalikan 1 value, yang paling pertama yang sesuai kondisi
//// tapi tetep setelah itu fungsi tetep di eksekusi / tidak return 
//// contoh dibawah, jadi cuma mengembalikan angka 3, karena yang ketemu pertama, 4,5 di abaikan
// const found = array.find(paramCheck); //#Experiment
// const found = array.find(number => number > 2);
// console.log(found);
//// expected output: 3

//// ========> findIndex() <===================
//// ini loop juga
//// bedanya dengan find, kalo find mengembalikan value, kalo ini mengembalikan index nya
// const index = array.findIndex(paramCheck); //#Experiment
// const index = array.findIndex(number => number > 2); // #Run It
//// nah mengembalikan angka 2 karena, hasil yang ditemukan dari kondisi adalah 3, dan tiga berada di index ke 2
// console.log(index); // 2 

//// ===========> keys() <====================
//// gauseh dijelasin lah cuma mengembalikan key, kayaknya ga guna :)
// const iterator = array.keys();
// for (const key of iterator) {
//   console.log(key);
// }

//// ==============> map() <=================
//// rekomen baca ini karena map akan berguna bgt kalo bisa gunain nya https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//// Mengembalikan array baru dari hasil fungsi yang dipanggil
//// contoh dibawah berati dikali 2 semua
//// terus hasilnya dibuat array baru
//// pass a function to map
// const map1 = array.map(x => x * 2);
// console.log(map1);
//// expected output: Array [2, 4, 6, 8, 10]

//// =============> reduce() <=================
//// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
//// parameter pertama berupa callback yang memanggil accumulator dan current value
//// gabegitu paham reduce lah wkwk
const reducer = (accumulator, currentValue) => accumulator + currentValue
//// 1 + 2 + 3 + 4 + 5 = 15
console.log(array.reduce(reducer,100));
//// expected output: 115


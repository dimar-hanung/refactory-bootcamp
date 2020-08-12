//#Functional Programming Paradigm

// Standar penulisan pada sebuah function, menekankan pada komputasi
// Untuk mengasilkan kode yang efisien, cepat dan readable



const fruits = ["Apple", "Banana"];
// console.log(fruits.length);
// 2

let first = fruits[0];
// Apple

let last = fruits[fruits.length - 1];
// Banana

// ==== > forEach
// Untuk nama parameter bebas, yang penting urutan nya
// urutan 1 item, 2 index, 3 array
// coba aja ganti nama parameternya, pasti hasilnya tetep sama
// fruits.forEach((item, index, array) => {
//     console.log(item, index, array);
//   });


// === > push()
// Untuk Meambahkan value ka akhir array
// var newLength = fruits.push("Orange");
// ["Apple", "Banana", "Orange"]

// === > pop()
// Menghapus array terakhir
// last = fruits.pop(); // remove Orange (from the end)
// ["Apple", "Banana"];

// ===> shift()
// Menghapus elemen di awal sebuah Array
// first = fruits.shift(); // remove Apple from the front
// ["Banana"];

// Array.prototype.forEach(arr => {
//     console.log(arr).name
// });

//#Functional Programming Paradigm

// Standar penulisan pada sebuah function, menekankan pada komputasi
// Untuk mengasilkan kode yang efisien, cepat dan readable



const array = [1,2,3,4,5]
const list = array.filter((value) => true);

function test(data){
    data.slice().splice(0,1)
}
test(array)
console.log(array);
console.log(list);

// console.log(hello2(array));
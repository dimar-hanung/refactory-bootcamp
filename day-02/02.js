/**
 * @description
 * - 📝 Menggabungkan Array ( Merge )
 */

const first = ["Behind", "every", "great", "man"];
const second = ["is", "a", "woman"];
const third = ["rolling", "her", "eyes"];

/**
 * Cara Satu, Gabungkan Manual mengguankan template l
 */
const output = `${first.join(" ")} ${second.join(" ")} ${third.join(" ")}`;
console.log(output);

// Cara Dua, Buat Funtion, gunakan forEach
const combineArray = (...arr) => {
  let output = [];
  arr.forEach(arr => (output = [...output, ...arr]));
  return output.join(" ");
};
console.log(combineArray(first, second, third));

// Cara Tiga, Buat Function, gunakan concat untuk menggabungkan array, dan paling efisien
const combineArray2 = (...arr) => [].concat(...arr).join(" ");
console.log(combineArray2(first, second, third));

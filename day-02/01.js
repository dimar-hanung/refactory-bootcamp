/**
 * @param {String} words | text yang ingin di uji palindrome nya
 * @description
 * - 📝 Palindrom adalah sebuah kata, frasa, angka maupun susunan lainnya yang dapat dibaca dengan sama baik dari depan maupun belakang.\
 * - 🌷 Algoritma :
 *     1. paramater words diganti value nya, menggunakan regex, menghapus semua simbol dan space
 *     2. variable reverseWord, di split terlebih dahulu, supaya jadi array. \
 *        lalu di reverse, lalu join lagi menggunakan string kosong, dan tercipta kalimat yang terbalik
 *     3. return, jika parameter words bernilai sama dengan variable reverseWords, maka benar, jika enggak salah
 */
const palindrome = words => {
  words = words.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?|\s*$]/g, "").toLowerCase();
  const reverseWord = words.split("").reverse().join("");
  return words === reverseWord;
};

console.log(palindrome("ibu ratna antar ubi"));

// Study Case :
const lists = [
  "ibu ratna antar ubi",
  "Ini bukan palindrome !!!",
  "kasur ini rusak",
  "A nut for a jar of tuna.",
  "Borrow or rob?",
  "Was it a car or a cat I saw?",
  "Yo, banana boy!",
  "UFO tofu?"
];

for (list of lists) {
  console.log(
    palindrome(list) ? list + " = PALINDROME" : list + " = Bukan Palindrome"
  );
}

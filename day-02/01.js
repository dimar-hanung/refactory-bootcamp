const palindrome = words =>{
    words = words.split(' ').join('').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"").toLowerCase();
    const ori = JSON.stringify(words.split(''))
    const rev = JSON.stringify(words.split('').reverse())
    return ori === rev ? true : false;

}

console.log(palindrome("ibu ratna antar ubi"))

// Contoh Study Case
// menggunakan loop supaya tidak perlu memanggil fungsi secara berulang

let data = [
    "ibu ratna antar ubi",
    "Ini bukan palindrome !!!",
    "kasur ini rusak",
    "A nut for a jar of tuna.",
    "Borrow or rob?",
    "Was it a car or a cat I saw?",
    "Yo, banana boy!",
    "UFO tofu?"
]

data.forEach(data => {
    console.log(palindrome(data) === true?data + " = PALINDROME" : data + " = Bukan Palindrome")
});

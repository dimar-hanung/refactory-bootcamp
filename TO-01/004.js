const palindrome = words =>{
    words = words.split(' ').join('').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"").toLowerCase();
    const ori = JSON.stringify(words.split(''))
    const rev = JSON.stringify(words.split('').reverse())
    
    return ori === rev ? true : false;

}


console.log(palindrome("Cigar? Toss it in a can. It is so tragic"))// output true
console.log(palindrome("I did, did I?"))// output true
console.log(palindrome("Red rum, sir, is murder"))// output true
console.log(palindrome("Eva, can I see bees in a cave?"))// output true
console.log(palindrome("Hello World"))// output false
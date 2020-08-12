const censor = (text,censoredWords,censorSymbol = "#") =>{
return text.split(' ').map(word => censoredWords.includes(word.toLowerCase())?word.split('').map(x=>censorSymbol).join(""):word).join(" ")
}
module.exports = censor;

// console.log(censor('Saya ingin makan nasi goreng.', ['saya', 'nasi']))
// Output: #### ingin makan #### goreng.
const repeatLetter = (text, times = 1) => text.trim().split("").map((x, i) =>  x == " " ? " " : x.repeat(times)).join("");
console.log(repeatLetter("Hello World! ", 2));
module.exports = repeatLetter;

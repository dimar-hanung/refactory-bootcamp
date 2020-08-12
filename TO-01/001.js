function grade(n) {
  let output = "";

  if (n >= 90) output = "A";
  else if (n >= 80 && n <= 89) output = "B";
  else if (n >= 70 && n <= 79) output = "C";
  else if (n >= 60 && n <= 69) output = "D";
  else if (n <= 59) output = "E";

  return output;
}

console.log(grade(10)); // output E
console.log(grade(80)); // output B
console.log(grade(90)); // output A




console.log("=============>>> Cara 2 <<<==============");


// Cara Lain : 
// Menggunakan Tenary Operator dan menggunakan arrow function dari es6

const grade2 = (n) => {
  let output = "";
  n >= 90
    ? (output = "A")
    : n >= 80 && n <= 89
    ? (output = "B")
    : n >= 70 && n <= 79
    ? (output = "C")
    : n >= 60 && n <= 69
    ? (output = "D")
    : n <= 59
    ? (output = "E")
    : (output = "E");

  return output;
};



console.log(grade2(10)); // output E
console.log(grade2(80)); // output B
console.log(grade2(90)); // output A

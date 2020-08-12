const number = [1, 2, 3, 4, 5];
let output = []
for (let i = 0; i < number.length; i++) {
  output.push("ini angka : " + number[i]);
}
console.log(output)
console.log(number.map(val => "ini angka: "+val))
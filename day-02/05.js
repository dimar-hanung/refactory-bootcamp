const playWithNumbers = count => {
  let even = [];
  let odd = [];
  let multiple = [];
  let prime = [];
  let primeLessThan = [];

  for (let i = 0; i < count; i++) {
    // Cek Genap Ganjil
    i % 2 === 0 ? even.push(i) : odd.push(i);

    // List Bilangan dikali 5
    multiple.push(i * 5);

    // Cek bilangan prima atau bukan
    isPrime(i) ? prime.push(i) : "";

    // Bilangan Prima yang kurang dari 100
    if (i < 100) isPrime(i) ? primeLessThan.push(i) : "";
  }

  let output = {
    even: even,
    odd: odd,
    multiple: multiple,
    prime: prime,
    primeLessThan: primeLessThan
  };
  return output;
};

// Function untuk cek bilangan prima
const isPrime = num => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

console.log(playWithNumbers(1000));

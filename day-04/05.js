const playWithNumbers = (count) => {
  let even = [],
    odd = [],
    multiple = [],
    prime = [],
    primeLessThan = [];
  // Karena angka jadi lebih baik pake for
  for (let i = 0; i < count; i++) {
    i % 2 === 0 ? even.push(i) : odd.push(i);
    multiple.push(i * 5);
    isPrime(i) ? prime.push(i) : "";
    if (i < 100) isPrime(i) ? primeLessThan.push(i) : '';
  } 

  const output = {
    even: even,
    odd: odd,
    multiple: multiple,
    prime: prime,
    primeLessThan: primeLessThan,
  };
  console.log(output);
};
// khusus ini ambil stack overflow
const isPrime = (num) => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

// playWithNumbers(1000);

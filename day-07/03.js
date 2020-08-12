const countNumber = () => {
  return new Promise((resolve, reject) => {
    for (let i = 1; i <= 3; i++) {
      setTimeout(() => {
        if (i === 3) resolve("Done");
        else if(i>=4) reject("gagal")
        console.log(i);
      }, 1000);
    }
  });
};

// Bisa langsung panggil
// countNumber().then(res => console.log(res));

// Kalau mau menggunakan variable
(async () => {
  const response = await countNumber()
  .then(res => res)
  .catch(err => err)
  console.log(response);
})();
// eslint
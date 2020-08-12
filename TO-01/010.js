const bio = [
  { id: 1, name: "Udin", age: 12 },
  { id: 2, name: "Reane", age: 51 },
  { id: 3, name: "Budi", age: 34 },
  { id: 4, name: "Agus", age: 16 },
  { id: 5, name: "Sari", age: 19 },
  { id: 6, name: "Ririn", age: 20 },
  { id: 7, name: "Dessy", age: 23 },
];

const cekUmur = (bio, umur) => {
  let muda = [];
  let dewasa = [];
  for (let i = 0; i < bio.length; i++) {
    if (bio[i].age < umur) {
      muda.push(bio[i]);
    } else {
      dewasa.push(bio[i]);
    }
  }

  console.log(`Data Orang yang berumur dibawah ${umur}`);
  console.log(muda);
  console.log("==================== **** ===================");
  console.log(`Data Orang yang berumur diatas ${umur}`);
  console.log(dewasa);
};

cekUmur(bio, 21);

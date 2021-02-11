const data = `Aku ingin begini 
Aku ingin begitu
Ingin ini itu banyak sekali

Semua semua semua
Dapat dikabulkan
Dapat dikabulkan
Dengan kantong ajaib

Aku ingin terbang bebas
Di angkasa
Hei… baling baling bambu

La... la... la...
Aku sayang sekali
Doraemon

La... la... la...
Aku sayang sekali`;

const countWord = (data, ...keys) => {
  keys = keys.map(w => w.toLowerCase());
  let obj = {};

  const words = data.split("\n").join(" ").split(" ");

  for (word of words) {
    for (key of keys) {
      if (key.toLowerCase() == word.toLowerCase()) {
        obj[key] ? obj[key]++ : (obj[key] = 1);
      }
    }
  }

  return obj;
};

console.log(countWord(data, "aku", "ingin", "dapat"));

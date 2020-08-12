let readline = require("readline");
console.log("Masukkan angka untuk menjumlahkan, dan = untuk mengakhiri");
let rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt("masukkan angka: ");
rl.prompt();

let hasil = 0;

rl.on("line", (angka) => {
  if (angka === "=") {
    console.log(hasil);
    rl.close();
  } else if (angka === "" || isNaN(angka)) {
    console.log("Harus Di isi dan tidak boleh string");
  } else {
    hasil = parseInt(hasil) + parseInt(angka);
  }
  rl.prompt();
}).on("close", function () {
  process.exit(0);
});

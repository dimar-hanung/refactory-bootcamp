
const buatAngka = jumlah =>{

    let output = [];
    for(let i = 0; i < jumlah ; i++) output.push(Math.floor(Math.random()*100 + 1));

    return output;

}

const deretAngka = buatAngka(100);
console.log("Variable Deret Angka Berisi: ")
console.log(deretAngka);


console.log("\nHasil Max, Min, Avarage berturut-turut");
const max = arr => Math.max( ...arr );
const min = arr => Math.min( ...arr );
const average = (array) => array.reduce((a, b) => a + b) / array.length;



console.log(max(deretAngka));
console.log(min(deretAngka));
console.log(average(deretAngka));
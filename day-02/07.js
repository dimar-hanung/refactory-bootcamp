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
Aku sayang sekali`


const countWord = (data,...word) => {
    word = word.map(w => w.toLowerCase())
    //console.log(word)
    let obj = {}

    data = data.split('\n').join(' ').split(' ');
    // console.log(data)
    data.forEach(data => {
        word.forEach(word => {
            
            if(word.toLowerCase() == data.toLowerCase()){
               obj[word] == undefined ?  obj[word] = 1 :  obj[word]++;
            }

        });
        
    });

    console.log(obj)
}

countWord(data,"aku","ingin","dapat")
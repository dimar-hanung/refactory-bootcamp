const first = ['Behind', 'every', 'great', 'man']
const second = ['is', 'a', 'woman']
const third = ['rolling', 'her', 'eyes']



const output = `${first.join(' ')} ${second.join(' ')} ${third.join(' ')}`;
console.log(output);


// Memberikan function supaya lebih dinamis
const combine = (...arr) => {
    let output = ''
    arr.forEach(arr => output += arr.join(' ') + " ");
    console.log(output);
}

combine(first,second,third);

const gabung = (...arr) => {
    let output = [];
    console.log(arr)
    console.log(output.concat(arr).join(" "))
}


gabung(first,second,third)
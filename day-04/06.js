// tidak ada perubahan karena menurut saya sudah efisien, apabila menggunakan map malah buat array baru
// itu saya menggunakan variable sensorLength supaya lebih readable
const data = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

// ini pakai rest parameter
const censorWord = (data,...sensor) => {

    sensor.forEach(sensor => {
        sensor = sensor.toLowerCase();
        let sensorLength = sensor.split('').map(x => "*").join('');
        data = data.toLowerCase().split(sensor).join(sensorLength) 

    });
    console.log(data);
}


censorWord(data,"dolor","elit","quis","nisi","fugiat","proident","laborum")
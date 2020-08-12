const namaKota = ["Jakarta", "Aceh", "Malang", "Medan", "Bontang", "Jogja", "Jakarta", "Bandung", "Malang", "Solo", "Palembang", "Bandung"];


const checkDuplicate = arr =>{
    console.log([ ...new Set(arr) ])
}
checkDuplicate(namaKota)




let masakSeblak = new Promise((success, reject) => {
   
    setTimeout( function() {
      success("Udah Mateng!")  // Sukses
    }, 5050) 
    console.log("Lagi dimasak")

  }) 
  
  // Memanggil langsung
  masakSeblak
  .then(res => console.log(res))
  .catch(err => console.log(err));

  // untuk memasukkan ke variable
  (async ()=>{

    const pengunjung1 = await masakSeblak
    .then(res => res)
    .catch(err => err)
    console.log(pengunjung1)

  })()
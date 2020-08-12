

// Membuat Program Hitung Mundur ( rekursif/perulangan fungsi )


function countdown(time){
    if(time > 0){
      setTimeout(function(){
        let output = time;
        if(time === 3) output = "Tigaaaa.."
        if(time === 2) output = "duaaaa..!!"
        if(time === 1) output = "gooooo!!!!!"

        console.log(output);
        time--;
        countdown(time);
        
      }, 1000);
    }
  }

  countdown(10);

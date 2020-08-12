// Menurut saya menggunakan while disini lebih readable dibanding menggunakan for, 
// karena ini yang di loop parameternya, kalau pake for jadi kebanyakan variable
const leapYear = (year1, year2) => {
    while (year1 <= year2) {
      let isLeap = new Date(year1, 1, 29).getDate() === 29;
      isLeap ? year1 + "adalah tahun kabisat" : year1 + "adalah bukan tahun kabisat";
      year1++;
    }
  };
  
  leapYear(2001, 2020);
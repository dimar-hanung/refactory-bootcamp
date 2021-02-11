const leapYear = (year1, year2) => {
  while (year1 <= year2) {
    let isLeap = new Date(year1, 1, 29).getDate() === 29;
    if (isLeap) console.log(`${year1} adalah tahun kabisat`);
    else console.log(`${year1} adalah bukan tahun kabisat`);

    year1++;
  }
};

leapYear(2001, 2020);

const { promises } = require('fs')
const csv = `NAME, CATEGORY, PRICE
Xiaomi Redmi 5A, Smartphone, 1199000
Macbook Air, Laptop, 13775000
Samsung Galaxy J7, Smartphone, 3549000
DELL XPS 13, Laptop, 26799000
Xiaomi Mi 6, Smartphone, 5399000
LG V30 Plus, Smartphone, 10499000`;

const makeObject = (data) => {
  const [header, ...row] = data.split("\r\n");

  const obj = row.map((value) => {
    const items = value.split(", ");
    const obj = {};

    header
      .split(", ")
      .map((value) => value.toLowerCase())
      .forEach((value, index) => (obj[value] = items[index]));

    return obj;
  });

  console.log(obj);
};

// makeObject(csv);
promises.readFile('data.csv').then((value) => {
    makeObject(value.toString('utf8'))
  
  })
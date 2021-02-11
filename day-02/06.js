const data = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

/**
 * @param {String} data | Data yang mau di sensor
 * @param  {String} sensor | List kata yang mau di sensor
 */
const censorWord = (data, ...sensor) => {
  sensor.forEach(sensor => {
    let sensorLength = sensor
      .toLowerCase()
      .split("")
      .map(x => "*")
      .join("");
    data = data.toLowerCase().split(sensor).join(sensorLength);
  });
  return data;
};

console.log(
  censorWord(
    data,
    "dolor",
    "elit",
    "quis",
    "nisi",
    "fugiat",
    "proident",
    "laborum"
  )
);

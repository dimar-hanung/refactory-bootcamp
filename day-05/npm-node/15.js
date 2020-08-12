const roman = (text) => {
  const list = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  return text
    .split("")
    .map((rom) => list[rom])
    .reduce((acc, val) => acc + val);
};

module.exports = roman;

const repeatString = require('../06');

test('3 times repeat ', () => {
  expect(repeatString("Makan! ",3)).toBe("Makan! Makan! Makan! ");
});
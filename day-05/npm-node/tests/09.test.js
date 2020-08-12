const symmetrical = require('../09');
// Mengguakan toStrictEqual karena array !== array
test('array mirror 1 2 3 = 1 2 3 3 2 1', () => {
  expect(symmetrical('malam')).toStrictEqual(true);
  expect(symmetrical('taat')).toStrictEqual(true);
  expect(symmetrical('tidur')).toStrictEqual(false);
  expect(symmetrical(1234)).toStrictEqual(false);
  expect(symmetrical(108801)).toStrictEqual(true);
  expect(symmetrical(8001008)).toStrictEqual(true);
});

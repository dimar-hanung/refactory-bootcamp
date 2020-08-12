const arrayMirroring = require('../08');
// Mengguakan toStrictEqual karena array !== array
test('array mirror 1 2 3 = 1 2 3 3 2 1', () => {
  expect(arrayMirroring([1,2,3])).toStrictEqual([1,2,3,3,2,1]);
});
const mebiToKibi = require('../03');

test('adds 2 Mebi to kibi = 2048 ', () => {
  expect(mebiToKibi(2)).toBe(2048);
});
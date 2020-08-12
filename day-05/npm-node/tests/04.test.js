const isLeapYear = require('../04');

test('is Leap Year 2004 = true ', () => {
  expect(isLeapYear(2004)).toBe(true);
});
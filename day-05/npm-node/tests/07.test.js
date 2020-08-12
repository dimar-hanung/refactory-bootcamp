const repeatLetter = require('../07');

test('3 times repeat ', () => {
  expect(repeatLetter('Hello World! ', 2)).toBe("HHeelllloo WWoorrlldd!!");
});
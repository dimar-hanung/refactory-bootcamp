const roman = require('../15')
test("cek roman",() =>{

expect(roman("I")).toBe(1);
expect(roman("II")).toBe(2);
expect(roman("III")).toBe(3);
expect(roman("V")).toBe(5);
expect(roman("VI")).toBe(6);
expect(roman("X")).toBe(10);
expect(roman("L")).toBe(50);
expect(roman("C")).toBe(100);
expect(roman("D")).toBe(500);
expect(roman("M")).toBe(1000);
expect(roman("MMXVIII")).toBe(2018);



})

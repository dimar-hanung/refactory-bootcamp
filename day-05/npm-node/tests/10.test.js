const censor = require('../10')
test("Sensor Word Test",() =>{
    expect(censor('Saya ingin makan nasi goreng.', ['saya', 'nasi'])).toBe("#### ingin makan #### goreng.")
    expect(censor('Pada hari Minggu saya tidur siang.', ['minggu', 'tidur'], '*')).toBe("Pada hari ****** saya ***** siang.")
})
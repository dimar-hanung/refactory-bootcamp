const isIsogram = require("../14")
test("isIsogram check makan = tura, anjir = false",()=>{
    expect(isIsogram("gelas")).toBe(true)
    expect(isIsogram("makan")).toBe(false)
})
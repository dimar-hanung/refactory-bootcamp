const Item = require("../12")
test("Test Find ID 5 = true, Find Id 3 = false",()=>{
    expect(Item.findById(3).isOnSale()).toBe(false)
    expect(Item.findById(5).isOnSale()).toBe(true)
})
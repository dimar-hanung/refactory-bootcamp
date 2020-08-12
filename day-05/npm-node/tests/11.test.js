const User = require('../11')

test("cek user",()=>{
    expect(User.findByUsername("johndoe")).toStrictEqual({ id: 3, username: 'johndoe', name: 'John Doe' })
})

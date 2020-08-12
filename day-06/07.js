#!/usr/bin/env node
const { program } = require('@caporal/core');
const os = require( 'os' );


program
.command("ip-external")
.action(() => {
    var networkInterfaces = os.networkInterfaces( );
let addrShort = {};
Object.keys(networkInterfaces).forEach(device => {
    
    addrShort[device] = []
    networkInterfaces[device].forEach(addr => {
        if(!addr.internal) addrShort[device].push({type:addr.family,address:addr.address})
        else delete addrShort[device]
    })
})
console.log(addrShort)

})

program.run()

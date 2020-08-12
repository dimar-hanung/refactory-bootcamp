#!/usr/bin/env node
const { program } = require('@caporal/core');

program
.command("obfuscate")
.argument("<text>")
.action(({logger,args}) =>{

    logger.info(args.text.split('').map(char => `&#${char.charCodeAt(0)};`).join(''))

})
.command("deobfuscate")
.argument("<text>")
.action(({logger,args}) => {

    logger.info(args.text.replace(/&#/g,'').split(';').map(unicode => String.fromCharCode(unicode)).join(''))

})

program.run()
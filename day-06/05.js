#!/usr/bin/env node
const { program } = require('@caporal/core');

program
.command("random")
.option("--panjang <number>","",{
    default:10
})
.option("--letters <boolean>","",{
    default:true
})
.option("--numbers <boolean>","",{
    default:true
})
.option("--uppercase <boolean>","",{
    default:false
})
.option("--lowercase <boolean>","",{
    default:false
})
.action(({logger,options}) =>{

    let char = "abcdefghijklmnopqestuvwxyz1234567890";
    if(!options.letters) char = char.replace(/[A-Za-z]/g,"");
    if(!options.numbers) char = char.replace(/[0-9]/g,"");
    char = char.split('')
    let output = "";
    // console.log(options.length)
    while (output.length < options.panjang) {
      let sizeRandom = options.uppercase ? "toUpperCase" : options.lowercase ? "toLowerCase" : Math.floor(Math.random() * 2) === 1 ? "toUpperCase" : "toLowerCase";
      output += char[Math.floor(Math.random() * char.length)][sizeRandom]();
    }
    // console.log(options.letters)
    logger.info(output)
})

program.run()
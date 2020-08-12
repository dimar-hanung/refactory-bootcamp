#!/usr/bin/env node
const { program } = require("@caporal/core")

const palindrome = words =>{
    words = words.split(' ').join('').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"").toLowerCase();
    const ori = JSON.stringify(words.split(''))
    const rev = JSON.stringify(words.split('').reverse())
    return ori === rev ? true : false;

}

program
.command("palindrome","Palindrome itu kalau kata/kalimat dibalik dibaca tetep sama")
.argument("<text>","String")
.action(({logger,args}) =>{
    logger.info(`String: "${args.text}"
Is palindrome ${palindrome(args.text)?"Yes":"No"}`)
})

program.run()
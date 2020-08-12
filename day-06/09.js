#!/usr/bin/env node
const XLSX = require('xlsx');
const { program } = require('@caporal/core');


function convertFile(from,to){
    to = to.split('.')
    const target = to.slice()
    const workBook = XLSX.readFile(from);
    XLSX.writeFile(workBook, to.join('.'), { bookType: to[to.length - 1] });
}
// convertFile("data2.xlsx","data2.csv")
program
.command("convert","")
.argument("[datafile...]","")
.action(({args}) =>{
    console.log(args)
    convertFile(args.datafile[0],args.datafile[1])
})

program.run();
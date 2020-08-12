#!/usr/bin/env ts-node
const { program } = require("@caporal/core")

program
  .command("add", "Menambahkan semua angka")
  .argument("[num...]", "number")
  .action(({ logger, args }) => {
    logger.info(args.num.reduce((a, b) => a + b))
  })
  
  .command("subtract", "Mengurangi semua angka")
  .argument("[num...]", "number")
  .action(({ logger, args }) => {
    logger.info(args.num.reduce((a, b) => a - b))
  })
  
  .command("multiply","Mengalikan semua angka")
  .argument("[num...]","number")
  .action(({logger,args}) => {
      logger.info( args.num.reduce((a, b) => a * b) )
  })
  .command("divide","Membagi semua angka")
  .argument("[num...]","number")
  .action(({logger,args}) => {
      logger.info( args.num.reduce((a, b) => a / b) )
  })

program.run()
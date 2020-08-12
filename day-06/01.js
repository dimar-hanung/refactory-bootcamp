#!/usr/bin/env ts-node
const { program } = require("@caporal/core")

program
  .command("lowercase", "huruf kecil semua")
  .argument("<text>", "lower-case")
  .action(({ logger, args, }) => {
    logger.info(args.text.toLowerCase())
  })
  .command("uppercase", "huruf besar semua")
  .argument("<text>", "upper-case")
  .action(({ logger, args }) => {
    logger.info(args.text.toUpperCase())
  })
  .command("capitalize","huruf depan nya besar")
  .argument("<text>","capitalize")
  .action(({logger,args}) => {
      logger.info(args.text.toLowerCase().replace(/(^\w{1})|(\s{1}\w{1})/g, (match) =>
      match.toUpperCase()
    ))
  })

program.run()
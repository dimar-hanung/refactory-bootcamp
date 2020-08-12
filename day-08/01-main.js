#!/usr/bin/env node
const { program } = require('@caporal/core');
const { Sequelize } = require("sequelize");
const yesno = require('yesno');
const sequelize = new Sequelize("rf_todoapp", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging:false
});

sequelize.query("CREATE DATABASE `rf_todoapp`;").then(data => {
    console.log(data)
  })
  .catch(err => console.info("Database ada"));


  const User = sequelize.define("user", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: Sequelize.DATE,
    },
    description: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.INTEGER,
    },
  });
  

(async () => {

  try {
    
    await sequelize.authenticate();
    console.log("Terhubung ke database");
    program
  .command("add", "Menambahkan List")
  .argument("<value>", "string")
  .action(({ logger, args }) => {
    logger.info("Sedang Menambahkan");
   (async ()=> {
      const data = await User.build({ date: new Date(), description: args.text, status: 0 });
        data
        .save()
        .then(() => {
          logger.info(args.value + " Berhasil ditambahkan")
        })
        .finally(() => {
          sequelize.close();
        });
      })()
     })
  
  .command("list", "Menampilkan semua list")
  .action(({ logger }) => {
    (async ()=> {

      User.findAll().then(users => {
        users.forEach(user => console.log(`${user.dataValues.id}. ${user.dataValues.description} ${user.dataValues.status?"(Done)":""}`));
    }).catch(function (err) {
      logger.error("Gagal Mendapatkan List, Error: " + err)
        return null;
    
    });
    })()
    
  })
  
  .command("update","update list by id")
  .argument("<id>","String, Id")
  .argument('<value>', 'String Deskripsi')
  .action(({logger,args}) => {
      
      (async () => {
        const id = await User.update(
            { description: args.value },
            { where: { id: args.id } });
        
        logger.info( "Jumlah diupdate: "+id  )
        
    })()
  })
  .command("delete","Hapus list by id")
  .argument("<id>","String, Id")
  .action(({logger,args}) => {
      (async ()=> {
        let n = await User.destroy({ where: { id: args.id } });
        logger.info(`jumlah dihapus: ${n}`);
    
        sequelize.close();
    })()
  })
  .command("clear","Menghapus semua list")
  .action(({logger}) => {
    (async () => {
      const ok = await yesno({
        question: 'yakin menghapus Semua list? ( ya / gak )',
        yesValues: [ 'ya' ],
    noValues: [ 'gak' ]
    });
    if(ok){
      const n = await User.destroy({ 
        where: {},
        truncate: true
    });
    logger.info(`Seluruh list berhasil dihapus (${m})`)
    }else{
      logger.info(`ga jadi dihapus`)
    }
    sequelize.close();
  })()
    })
  .command("done","Done")
  .argument("<id>","String, Id")
  .action(({logger,args}) => {
      
      (async () => {
        let id = await User.update(
            { status: 1 },
            { where: { id: args.id } });
        
        logger.info( id  )
        
    })()
  })
  .command("undone","undone")
  .argument("<id>","String, Id")
  .action(({logger,args}) => {
      (async () => {
        let id = await User.update(
            { status: 0 },
            { where: { id: args.id } });
        logger.info( id  )
    })()
  })
program.run()
  } catch (error) {
    console.error("Tidak dapat terhubung ke database", error);
  }
})();



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
  .catch(err => console.log("sudah ada db nya"));

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    program
  .command("add", "Menambahkan List")
  .argument("<text>", "string")
  .action(({ logger, args }) => {
    logger.info("Sedang Menambahkan");
   (async ()=> {
      const data = await User.build({ date: new Date(), description: args.text, status: 0 });
        data
        .save()
        .then(() => {
          logger.info(args.text + " Berhasil ditambahkan")
          // console.log("new task saved");
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
  
  .command("update","update list")
  .argument("<id>","String, Id")
  .argument('<value>', 'String Deskripsi')
  .action(({logger,args}) => {
      
      (async () => {
        let id = await User.update(
            { description: args.value },
            { where: { id: args.id } });
        
        logger.info( id  )
        
    })()
  })
  .command("delete","Hapus")
  .argument("<id>","number")
  .action(({logger,args}) => {
      (async ()=> {
        let n = await User.destroy({ where: { id: args.id } });
        logger.info(`dihapus: ${n}`);
    
        sequelize.close();
    })()
  })
  .command("clear","Menghapus semua list")
  .action(({logger}) => {
    (async () => {
            
      const ok = await yesno({
        question: 'yakin menghapus Semua list?',
        yesValues: [ 'Ya' ],
    noValues: [ '/ Ga' ]
    });
    if(ok){
      let n = await User.destroy({ 
        where: {},
        truncate: true
    });
    logger.info(`Seluruh list berhasil dihapus`)
    sequelize.close();
    }else{
      logger.info(`ga jadi dihapus`)
    }
     
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
  .command("undone","Done")
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
    console.error("Unable to connect to the database:", error);
  }
})();

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



// addList("test 3");




// list()


// deleteRow();

// user.sync().then(() => {
//     console.log('New table created');
// }).finally(() => {
//     sequelize.close();
// })

// user.create({
//     date: new Date(),
//     description: "Percobaan pertama",
//     status: 1,
//     // email: 'j.smith@example.com',
//    }).then(user => {
//        // Send created user to client
//        return user.userId;
//    }).catch(function (err) {
//        console.log("create failed with error: " + err );
//        return 0;
//    });

// user.findById("1").then(user => {
//     console.log(user);
// }).catch(function (err) {
//     console.log("findById failed with error: " + err);
//     return null;

// })

User.findByPk(0)
  .then((note) => {
    console.log(note);
  })
  .finally(() => {
    sequelize.close();
  });

// user.findAll().then(users => {
//     console.log(users);
// }).catch(function (err) {
//     console.log("findAll failed with error: " + err);
//     return null;

// });

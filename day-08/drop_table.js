const Sequelize = require('sequelize');

// const path = 'mysql://user12:12user@localhost:3306/mydb';
const sequelize = new Sequelize('rf_todoapp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

let Dummy = sequelize.define('dummy', {
    description: Sequelize.STRING
});

Dummy.drop().then(() => {
    console.log('table deleted');
}).finally(() => {
    sequelize.close();
});
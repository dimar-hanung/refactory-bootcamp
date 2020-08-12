const Sequelize = require('sequelize');

const sequelize = new Sequelize('rf_todoapp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

let Dummy = sequelize.define('dummy', {
    description: Sequelize.STRING
});

Dummy.sync().then(() => {
    console.log('New table created');
}).finally(() => {
    sequelize.close();
})
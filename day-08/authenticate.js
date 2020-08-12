const Sequelize = require('sequelize');

const path = 'mysql://root:root@localhost:8080/rf_todoapp';
// const sequelize = new Sequelize(path, { operatorsAliases: false });
const sequelize = new Sequelize('rf_todoapp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });


sequelize.authenticate().then(() => {
  console.log('Connection established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
}).finally(() => {
  sequelize.close();
});
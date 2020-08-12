const Sequelize = require('sequelize');

const path = 'mysql://user12:12user@localhost:3306/mydb';
const sequelize = new Sequelize('rf_todoapp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    logging: false
});

let Note = sequelize.define('notes', {
    description: Sequelize.STRING
});

const note = Note.build({ description: 'Dimar Hanung' });
note.save().then(() => {
    console.log('new task saved');
}).finally(() => {
    sequelize.close();
});
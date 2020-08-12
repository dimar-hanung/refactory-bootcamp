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

Note.findByPk(2).then((note) => {
    console.log(note.get({ plain: true }));
    console.log('********************')
    console.log(`id: ${note.id}, description: ${note.description}`);
}).finally(() => {
    sequelize.close();
});
const Sequelize = require('sequelize');
const path = 'mysql://user12:12user@localhost:3306/mydb';
const sequelize = new Sequelize('rf_todoapp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    logging: false,
    define: {
        timestamps: false
    }
});

let Dummy = sequelize.define('dummy', {
    description: Sequelize.STRING
});

sequelize.sync({force: true}).then(() => {

    Dummy.create({ description: 'test 1' }).then(() => {
        console.log('table created');
    }).finally(() => {
        sequelize.close();
    });
});
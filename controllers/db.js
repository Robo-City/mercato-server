// db.js
const Sequelize = require('sequelize');

const sequelize = new Sequelize('your_database_name', 'your_username', 'your_password', {
    host: 'your_host',
    dialect: 'postgres'
});

module.exports = sequelize;

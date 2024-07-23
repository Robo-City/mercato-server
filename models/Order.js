// models/Order.js
const Sequelize = require('sequelize');
const sequelize = require('../db'); // Assuming a db.js file for database connection

const Order = sequelize.define('order', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // Other order fields
    customerName: {
        type: Sequelize.STRING
    },
    orderDate: {
        type: Sequelize.DATE
    },
    totalAmount: {
        type: Sequelize.DECIMAL
    }
});

module.exports = Order;

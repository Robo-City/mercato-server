// controllers/orderController.js
function FetchAllOrdersDto(order) {
    this.id = order.id;
    this.customerName = order.customerName;
    this.orderDate = order.orderDate;
    this.totalAmount = order.totalAmount;
}
// controllers/orderController.js
const Order = require('../models/Order');

const getAllOrders = async () => {
    try {
        const orders = await Order.findAll();
        return orders.map(order => new FetchAllOrdersDto(order));
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw error;
    }
};
// controllers/orderController.js
const express = require('express');
const getAllOrders = require('./orderController');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const orders = await getAllOrders();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch orders' });
    }
});

module.exports = router;

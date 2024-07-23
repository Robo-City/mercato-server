// index.js
const express = require('express');
const orderRouter = require('./controllers/orderController');
const db = require('./db');

const app = express();
const port = process.env.PORT || 3000;

// Database connection
db.sync()
    .then(() => console.log('Database connected'))
    .catch(err => console.error('Error connecting to database:', err));

app.use('/api/orders', orderRouter);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

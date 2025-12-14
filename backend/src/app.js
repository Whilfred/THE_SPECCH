const express = require('express');
const cors = require('cors');
require('dotenv').config();

const orderRoutes = require('./routes/order.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('src/uploads'));

app.use('/api', orderRoutes);

module.exports = app;

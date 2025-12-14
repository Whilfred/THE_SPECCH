const express = require('express');
const cors = require('cors');
require('dotenv').config();

const orderRoutes = require('./routes/order.routes');

const app = express();

/* ✅ CORS (important pour frontend externe) */
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
}));

/* ✅ LIMITE JSON AUGMENTÉE (OBLIGATOIRE POUR BASE64) */
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));

/* ✅ fichiers images */
app.use('/uploads', express.static('src/uploads'));

/* routes */
app.use('/api', orderRoutes);

module.exports = app;

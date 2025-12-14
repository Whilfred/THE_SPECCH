require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = require('./src/app'); // ton app express

// Autoriser le frontend sur le port 5500
app.use(cors({
  origin: 'http://127.0.0.1:5500', // ou 'http://localhost:5500'
  credentials: true,
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});

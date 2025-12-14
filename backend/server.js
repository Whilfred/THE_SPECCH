require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = require('./src/app'); // ton app express

// Autoriser le frontend
app.use(cors({
  origin: 'http://127.0.0.1:5500', // ou 'http://localhost:5500'
  credentials: true,
}));

// Parser les requêtes JSON
app.use(express.json({ limit: '10mb' })); // pour accepter JSON avec image en Base64 si besoin

// Parser les requêtes URL-encoded (optionnel)
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});

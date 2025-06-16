const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./database');
const notesRouter = require('./routes/notes');
const path = require('path');
require('dotenv').config();

// Variables desde .env
const PORT = process.env.PORT || 3000;
const FRONTEND_DIR = process.env.FRONTEND_DIR || 'frontend';

app.use(cors());
app.use(express.json());
app.use('/api/notes', notesRouter);

// Servir frontend
app.use(express.static(path.join(__dirname, FRONTEND_DIR)));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, FRONTEND_DIR, 'index.html'));
});

// Escuchar
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./database');
const notesRouter = require('./routes/notes');
const path = require('path');

app.use(cors());
app.use(express.json());
app.use('/api/notes', notesRouter);

app.use(express.static(path.join(__dirname, 'frontend')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// ✅ Escuchar en puerto 3000
app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});

const express = require('express');
const { getAll } = require('./functions');
const con = require('./connection');
const path = require('path');

const app = express();

// Configurar la carpeta de archivos estáticos
app.use(express.static('public'));

// Manejar la ruta principal ("/") y enviar el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/data', (req, res) => {
  getAll((err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error en la consulta');
      return;
    }
    res.json(result);
  });
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
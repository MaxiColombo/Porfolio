const express = require('express');
const path = require('path');
const app = express();

// Configura EJS como motor de plantillas
app.set('view engine', 'ejs');

// Configura la carpeta de vistas
app.set('views', path.join(__dirname, '/src/views'));

// Configura la carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.render('portfolio'); // Ajusta esto según tus necesidades
});

// Iniciar el servidor
const port = process.env.PORT || 3320;
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
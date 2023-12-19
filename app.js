const express = require('express');
const path = require('path');
const app = express();

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');

// Configurar la carpeta de vistas
app.set('views', path.join(__dirname, '/src/views'));

// Configurar la carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.render('portfolio'); // Ajusta esto según tus necesidades
});

app.get('/app.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'app.js'));
});
// Iniciar el servidor
const port = process.env.PORT || 3320;
const server = app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});

// Manejar señales para cerrar el servidor
process.on('SIGTERM', () => {
  console.log('Cerrando el servidor...');
  server.close(() => {
    console.log('Servidor cerrado correctamente');
  });
});
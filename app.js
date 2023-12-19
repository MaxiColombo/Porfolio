const express = require('express');
const path = require('path');
const app = express();

// Configura EJS como motor de plantillas
app.set('view engine', 'ejs');

// Vistas 
app.set('views', path.join(__dirname, '/src/views'));

// Carpeta arch estaticos
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.render('portfolio'); 
});

// Iniciar el servidor
const port = process.env.PORT || 3320;
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
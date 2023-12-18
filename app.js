
//npm install express
const express = require('express')
const app = express()

const path = require("path");

//Le decimos donde esta la ruta publica -- Usamos recursos estaticos
app.use(express.static(path.join(__dirname, 'public')));



// Configura EJS como motor de plantillas
app.set('view engine', 'ejs');

// Configura la carpeta de vistas
app.set('views', __dirname + '/src/views');

// Rutas y lógica de tu aplicación
app.get('/', (req, res) => {
  res.render('portfolio'); // Esto es un ejemplo, debes tener tus propias rutas y lógica
});


//Hacer correr el servidor
app.listen(3320,() => {
    console.log("Servidor Running http://localhost:3320");
});


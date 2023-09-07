const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Configurar el middleware para el manejo de JSON
app.use(bodyParser.json());

// Importar las rutas del controlador
const tinderRoutes = require('./controllers/tinderController');

// Usar las rutas
app.use('/tinder', tinderRoutes);

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Configurar el middleware para el manejo de JSON
app.use(bodyParser.json());

// Importar las rutas del controlador
const tinderRoutes = require('./controllers/tinderController');

// Usar las rutas
app.use('/tinder', tinderRoutes);

// Habilitar el servicio de archivos estáticos
app.use(express.static('tinder'));

// Esta línea servirá el archivo index.html desde el directorio 'public'
app.get('/', (req, res) => {
  res.sendFile('tinder/index.html');
});



// Iniciar el servidor
const port = process.env.PORT || 5500;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

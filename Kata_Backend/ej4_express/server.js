const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000; // Puedes cambiar el puerto según tus preferencias

app.get('/api/', (req, res) => {
  res.status(200).json({ mensaje: 'hola mundo' });
});


app.get('/api/suma', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
  
    if (isNaN(num1) || isNaN(num2)) {
      return res.status(400).json({ error: 'Ambos números deben ser válidos' });
    }
  
    const resultado = num1 + num2;
    res.status(200).json({ resultado });
  });

  app.get('/api/usuario/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    res.status(200).json({ usuario: nombre });
  });



app.use(bodyParser.json());

app.put('/api/body', (req, res) => {
  const bodyData = req.body;
  res.status(200).json(bodyData);
});
 


app.get('/api/swapi/:personaje_id', async (req, res) => {
    const personajeId = req.params.personaje_id;
  
    try {
      const response = await axios.get(`https://swapi.dev/api/people/${personajeId}`);
      const personaje = response.data;
      res.status(200).json({ personaje });
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el personaje de SWAPI' });
    }
  });
  
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });

  


const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

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

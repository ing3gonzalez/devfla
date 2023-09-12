const express = require('express');
const router = express.Router();
const talentoModel = require('../models/tinderModel');

// Ruta para crear un talento
router.post('/crear', async (req, res) => {
  try {
    const nuevoTalento = await talentoModel.crearTalento(req.body);
    res.status(201).json(nuevoTalento);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el talento' });
  }
});

// Ruta para obtener todos los talentos
router.get('/obtener', async (req, res) => {
  try {
    const talentos = await talentoModel.obtenerTalentos();
    res.status(200).json(talentos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los talentos 1' });
  }
});

// Ruta para actualizar un talento
router.put('/actualizar/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await talentoModel.actualizarTalento(id, req.body);
    res.status(200).json({ mensaje: 'Talento actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el talento' });
  }
});

// Ruta para eliminar un talento
router.delete('/eliminar/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await talentoModel.eliminarTalento(id);
    res.status(200).json({ mensaje: 'Talento eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el talento' });
  }
});

module.exports = router;

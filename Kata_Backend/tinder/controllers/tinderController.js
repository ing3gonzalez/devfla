const express = require('express');
const router = express.Router();
const talentoModel = require('../models/tinderModel');

// Ruta para crear un talento
router.post('/talento/crear', async (req, res) => {
  try {
    const nuevoTalento = await talentoModel.crearTalento(req.body);
    res.status(201).json(nuevoTalento);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Ruta para obtener todos los talentos
router.get('/talento/obtener', async (req, res) => {
  try {
    const talentos = await talentoModel.obtenerTalentos();
    res.status(200).json(talentos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los talentos' });
  }
});

// Ruta para actualizar un talento
router.put('/talento/actualizar/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await talentoModel.actualizarTalento(id, req.body);
    res.status(200).json({ mensaje: 'Talento actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el talento' });
  }
});

// Ruta para eliminar un talento
router.delete('/talento/eliminar/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await talentoModel.eliminarTalento(id);
    res.status(200).json({ mensaje: 'Talento eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el talento',error });
  }
});

////SECCION EMPRESA

// Ruta para crear una empresa
router.post('/empresa/crear', async (req, res) => {
  try {
    const nuevaempresa = await talentoModel.crearEmpresa(req.body);
    res.status(201).json(nuevaempresa);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Ruta para obtener todas las empresas
router.get('/empresa/obtener', async (req, res) => {
  try {
    const empresas = await talentoModel.obtenerEmpresa();
    res.status(200).json(empresas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las empresas' });
  }
});

// Ruta para actualizar una empresa
router.put('/empresa/actualizar/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await talentoModel.actualizarEmpresa(id, req.body);
    res.status(200).json({ mensaje: 'Empresa actualizada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la empresa ',id });
  }
});

// Ruta para eliminar una empresa
router.delete('/empresa/eliminar/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await talentoModel.eliminarEmpresa(id);
    res.status(200).json({ mensaje: 'Empresa eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la empresa',error });
  }
});


////SECCION habilidades


// Ruta para crear una habilidad
router.post('/habilidad/crear', async (req, res) => {
  try {
    const nuevahabilidad = await talentoModel.crearHabilidad(req.body);
    res.status(201).json(nuevahabilidad);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Ruta para obtener todas las habilidades
router.get('/habilidad/obtener', async (req, res) => {
  try {
    const habilidad = await talentoModel.obtenerHabilidades();
    res.status(200).json(habilidad);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las habilidades del talento' });
  }
});


// Ruta para consultar  habilidades de un talento
router.get('/habilidad/obtenertalento/:id', async (req, res) => {
  const id = req.params.id;
   
  try {
    const obtenerHabilidadestalento = await talentoModel.obtenerHabilidadestalento(id);
    res.status(200).json({ mensaje: 'Las habilidades del talento consultado son:',obtenerHabilidadestalento });
   //res.status(200).json(obtenerHabilidadestalento);
  
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la habilidad del talento',id,error });
  }
});


// Ruta para actualizar una habilidad
router.put('/habilidad/actualizar/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await talentoModel.actualizarHabilidades(id, req.body);
    res.status(200).json({ mensaje: 'Habilidad actualizada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la habilidad ' });
  }
});

// Ruta para eliminar una habilidad
router.delete('/habilidad/eliminar/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await talentoModel.eliminarHabilidad(id);
    res.status(200).json({ mensaje: 'Habilidad eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la habilidad',error });
  }
});



////SECCION CONTRATOS


// Ruta para crear un contrato
router.post('/contrato/crear', async (req, res) => {
  try {
    const nuevocontrato = await talentoModel.crearcontrato(req.body);
    res.status(201).json(nuevocontrato);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Ruta para obtener los contratos de una empresa
router.get('/contrato/obtenerempresa/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const contratoempresa = await talentoModel.obtenerContratosEmpresa(id);
    res.status(200).json(contratoempresa);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los contratos de la empresa ',id });
  }
});


// Ruta para consultar  contratos de un talento
router.get('/contrato/talento/:id', async (req, res) => {
  const id = req.params.id;
   
  try {
    const obtenerContratotalento = await talentoModel.obtenerContratosTalento(id);
    res.status(200).json({ mensaje: 'Las contratos del talento consultado son:',obtenerContratotalento });
   //res.status(200).json(obtenerHabilidadestalento);
  
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los contratos del talento' });
  }
});


// Ruta para actualizar un contrato (estado)
router.put('/contrato/actualizar_estado/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await talentoModel.actualizarContratoestado(id, req.body);
    res.status(200).json({ mensaje: 'Contrato actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el contrato' });
  }
});


// Ruta para actualizar un contrato (calificacion)
router.put('/contrato/actualizar_calificacion/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await talentoModel.actualizarContratocalificacion(id, req.body);
    res.status(200).json({ mensaje: 'Contrato actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el contrato' });
  }
});


// Ruta para actualizar un contrato en caso de modificar fecha final o su valor
router.put('/contrato/actualizar_fecha_valor/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await talentoModel.actualizarContratofechafinvalor(id, req.body);
    res.status(200).json({ mensaje: 'Contrato actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el contrato' });
  }
});


// Ruta para actualizar las horas ejecutadas de un contrato
router.put('/contrato/actualizar_ejecucion/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await talentoModel.actualizarejecucion(id, req.body);
    res.status(200).json({ mensaje: 'Contrato actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el contrato' });
  }
});

///SECCION PAGOS


// Ruta para crear un contrato
router.post('/pago/crear', async (req, res) => {
  try {
    const nuevocontrato = await talentoModel.crearpago(req.body);
    res.status(201).json(nuevocontrato);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Ruta para obtener los pagos de una empresa
router.get('/pago/pagosempresa/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const pagoempresa = await talentoModel.obtenerPagosEmpresa(id);
    res.status(200).json(pagoempresa);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los pagos de la empresa ' });
  }
});


// Ruta para obtener los pagos hechos a un talento
router.get('/pago/pagostalento/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const pagotalento = await talentoModel.obtenerPagosTalento(id);
    res.status(200).json(pagotalento);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los pagos del talento ',id });
  }
});


// Ruta para actualizar un pago registrado
router.put('/contrato/actualizar_pago/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await talentoModel.actualizarPagos(id, req.body);
    res.status(200).json({ mensaje: 'Pago actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el pago' });
  }
});


module.exports = router;

const db = require('../database');

function crearTalento(datos) {
  return db.one('INSERT INTO tinder.talento (nombre, ciudad, pais, correo, telefono) VALUES ($1, $2, $3, $4, $5) RETURNING id', [datos.nombre, datos.ciudad, datos.pais, datos.correo, datos.telefono]);
}

function obtenerTalentos() {
  return db.any('SELECT * FROM tinder.talento');
}

function actualizarTalento(id, nuevosDatos) {
  return db.none('UPDATE tinder.talento SET nombre = $1, ciudad = $2, pais = $3, correo = $4, telefono = $5 WHERE id = $6', [nuevosDatos.nombre, nuevosDatos.ciudad, nuevosDatos.pais, nuevosDatos.correo, nuevosDatos.telefono, id]);
}

function eliminarTalento(id) {
  return db.none('DELETE FROM tinder.talento WHERE id = $1', [id]);
}

module.exports = {
  crearTalento,
  obtenerTalentos,
  actualizarTalento,
  eliminarTalento,
};

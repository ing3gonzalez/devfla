const db = require('../database');

///SECCION TALENTO

function crearTalento(datos) {
  //return db.one('INSERT INTO public.talento (nombre, ciudad, pais, correo, telefono) VALUES ($1, $2, $3, $4, $5) RETURNING id', [datos.nombre, datos.ciudad, datos.pais, datos.correo, datos.telefono]);
  return db.one('INSERT INTO public.talento (id_talento,nombre, ciudad, pais, correo, telefono,valor_hora) VALUES ($1, $2, $3, $4, $5,$6,$7)  RETURNING id_talento', [datos.id_talento,datos.nombre, datos.ciudad, datos.pais, datos.correo, datos.telefono, datos.valor_hora]);

}

function obtenerTalentos() {
  return db.any('SELECT * FROM public.talento');
}

function actualizarTalento(id, nuevosDatos) {
  return db.one('UPDATE public.talento SET nombre = $1, ciudad = $2, pais = $3, correo = $4, telefono = $5, valor_hora = $6 WHERE id_talento = $7  RETURNING id_talento' , [nuevosDatos.nombre, nuevosDatos.ciudad, nuevosDatos.pais, nuevosDatos.correo, nuevosDatos.telefono,nuevosDatos.valor_hora, id]);
}

function eliminarTalento(id) {
  console.log("error consola",id);
  return db.none('DELETE FROM public.talento WHERE id_talento = $1 ', [id]);
  
}


///SECCION EMPRESA

function crearEmpresa(datosempresa) {
  //return db.one('INSERT INTO public.talento (nombre, ciudad, pais, correo, telefono) VALUES ($1, $2, $3, $4, $5) RETURNING id', [datos.nombre, datos.ciudad, datos.pais, datos.correo, datos.telefono]);
  return db.one('INSERT INTO public.empresa(	 nombre, ciudad, pais, contacto, correo, telefono) VALUES ($1, $2, $3, $4, $5, $6)  RETURNING id_empresa', [datosempresa.nombre, datosempresa.ciudad, datosempresa.pais, datosempresa.contacto, datosempresa.correo,datosempresa.telefono]);

}

function obtenerEmpresa() {
  return db.any('SELECT * FROM public.empresa');
}

function actualizarEmpresa(id, actempresa) {
  return db.one('UPDATE public.empresa SET nombre = $1, ciudad = $2, pais = $3, contacto = $4, correo = $5 ,telefono = $6 WHERE id_empresa = $7  RETURNING id_empresa' , [actempresa.nombre, actempresa.ciudad, actempresa.pais, actempresa.contacto, actempresa.correo,actempresa.telefono,id]);
}

function eliminarEmpresa(id) {
  console.log("error consola",id);
  return db.none('DELETE FROM public.empresa WHERE id_empresa = $1 ', [id]);
  
}

//Habilidades

function crearHabilidad(datoshabilidad) {
  //return db.one('INSERT INTO public.talento (nombre, ciudad, pais, correo, telefono) VALUES ($1, $2, $3, $4, $5) RETURNING id', [datos.nombre, datos.ciudad, datos.pais, datos.correo, datos.telefono]);
  return db.one('INSERT INTO public.habilidades(	 id_talento, id_area, id_categoria, descripcion) VALUES ($1, $2, $3, $4)  RETURNING id_habilidad', [ datoshabilidad.id_talento, datoshabilidad.id_area, datoshabilidad.id_categoria, datoshabilidad.descripcion]);

}

function obtenerHabilidadestalento(id) {
  return db.any('SELECT ha.id_habilidad,tal.*,cat.categoria,area.area,area.descripcion,ha.descripcion FROM public.habilidades ha   inner join public.talento tal on ha.id_talento = tal.id_talento   inner join public.area area on ha.id_area = area.id_area   inner join public.categoria cat on ha.id_categoria = cat.id_categoria where tal.id_talento = $1', [id]);
}

function obtenerHabilidades() {
  return db.any('SELECT ha.id_habilidad,tal.*,cat.categoria,area.area,area.descripcion,ha.descripcion FROM public.habilidades ha   inner join public.talento tal on ha.id_talento = tal.id_talento   inner join public.area area on ha.id_area = area.id_area   inner join public.categoria cat on ha.id_categoria = cat.id_categoria');
}


function actualizarHabilidades(id, acthabilidad) {
  return db.one('UPDATE public.habilidades SET id_area= $1, id_categoria = $2, descripcion = $3  where id_habilidad=$4  RETURNING id_habilidad' , [acthabilidad.id_area, acthabilidad.id_categoria, acthabilidad.descripcion, id]);
}

function eliminarHabilidad(id) {
  console.log("error consola",id);
  return db.none('DELETE FROM public.habilidades WHERE id_habilidad = $1 ', [id]);
  
}



///SECCION CONTRATOS


function crearcontrato(datoscontrato) {
  
  return db.one('INSERT INTO public.contrato(	 valor, fecha_cotizacion, fecha_inicial, fecha_final, id_empresa, estado,calificacion,horas_contrato,horas_ejecutadas,id_talento) VALUES ($1, $2, $3, $4, $5, $6,$7,$8,$9,$10)  RETURNING id_contrato', [datoscontrato.valor,datoscontrato.fecha_cotizacion,datoscontrato.fecha_inicial,datoscontrato.fecha_final,datoscontrato.id_empresa, datoscontrato.estado,datoscontrato.calificacion, datoscontrato.horas_contrato,datoscontrato.horas_ejecutadas,datoscontrato.id_talento ]);

}

function obtenerContratosEmpresa(id) {
  return db.any('SELECT * FROM public.contrato where id_empresa =$1',id);
}


function obtenerContratosTalento(id) {
  return db.any('SELECT * FROM public.contrato where id_talento =$1',id);
}

function actualizarContratoestado(id, actcontratoestado) {
  return db.one('UPDATE public.contrato SET estado = $1 WHERE id_contrato = $2  RETURNING id_contrato' , [actcontratoestado.estado, id]);
}


function actualizarContratocalificacion(id, actcontratoestado) {
  return db.one('UPDATE public.contrato SET estado = $1, calificacion=$2 WHERE id_contrato = $3  RETURNING id_contrato' , [actcontratoestado.estado,actcontratoestado.calificacion, id]);
}


function actualizarContratofechafinvalor(id, actcontratoestado) {
  return db.one('UPDATE public.contrato SET fecha_final = $1, valor=$2,horas_contrato=$3 WHERE id_contrato = $4  RETURNING id_contrato' , [actcontratoestado.fecha_final,actcontratoestado.valor,actcontratoestado.horas_contrato, id]);
}


function actualizarejecucion(id, actcontratoestado) {
  return db.one('UPDATE public.contrato SET horas_ejecutadas = $1  WHERE id_contrato = $2  RETURNING id_contrato' , [actcontratoestado.horas_ejecutadas, id]);
}

///SECCION PAGOS

function crearpago(datospago) {
  
  return db.one('INSERT INTO public.pagos(	 valor, concepto, fecha, id_contrato) VALUES ($1, $2, $3, $4)  RETURNING id_pagos', [datospago.valor,datospago.concepto,datospago.fecha,datospago.id_contrato ]);

}

function obtenerPagosEmpresa(id) {
  return db.any('SELECT pg.id_pagos, pg.valor, pg.concepto, pg.fecha, pg.id_contrato	FROM public.pagos pg	inner join public.contrato cr on pg.id_contrato = cr.id_contrato	where cr.id_empresa = $1',id);
}


function obtenerPagosTalento(id) {
  return db.any('SELECT pg.id_pagos, pg.valor, pg.concepto, pg.fecha, pg.id_contrato	FROM public.pagos pg	inner join public.contrato cr on pg.id_contrato = cr.id_contrato	where cr.id_talento = $1',id);
}

function actualizarPagos(id, actpago) {
  return db.one('UPDATE public.pagos SET valor = $1, concepto=$2,fecha=$3,id_contrato=$4 WHERE id_pagos = $5  RETURNING id_pagos' , [actpago.valor,actpago.concepto,actpago.fecha,actpago.id_contrato, id]);
}

module.exports = {
  crearTalento,
  obtenerTalentos,
  actualizarTalento,
  eliminarTalento,
  
  crearEmpresa,
  obtenerEmpresa,
  actualizarEmpresa,
  eliminarEmpresa,

  crearHabilidad,
  obtenerHabilidades,
  obtenerHabilidadestalento,
  actualizarHabilidades,
  eliminarHabilidad,

  crearcontrato,
  obtenerContratosEmpresa,
  obtenerContratosTalento,
  actualizarContratoestado,
  actualizarContratocalificacion,
  actualizarContratofechafinvalor,
  actualizarejecucion,

  crearpago,
  obtenerPagosEmpresa,
  obtenerPagosTalento,
  actualizarPagos
};

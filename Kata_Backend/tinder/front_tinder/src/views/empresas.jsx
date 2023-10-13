import React from 'react';
import { useContext, useEffect, useState } from "react"
import axios from 'axios'
import { Container, Form, Button, Table } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


import Menu from '../components/menu/Menu';
import Footer from '../components/footer/Footer';

const urlget = "https://tinder-rc1o.onrender.com/tinder/empresa/obtener";

const urlput = "https://tinder-rc1o.onrender.com/tinder/empresa/actualizar/";

const urlpost = "https://tinder-rc1o.onrender.com/tinder/empresa/crear";

const urldelete = "https://tinder-rc1o.onrender.com/tinder/empresa/eliminar/";

class Empresas extends React.Component {

	state = {
		data: [],
		modalInsertar: false,
		modalEliminar: false,
		form: {

			nit: '',
			nombre: '',
			ciudad: '',
			contacto: '',
			pais: '',
			correo: '',
			telefono: ''

		}
	}

	peticionGet = () => {
		axios.get(urlget).then(response => {
			this.setState({
				data: response.data
			});
		}).catch(error => {
			console.log(error.message);
		})
	}

	peticionPost = async () => {
		delete this.state.form.id;
		await axios.post(urlpost, this.state.form).then(response => {
			this.modalInsertar();
			this.peticionGet();
		}).catch(error => {
			console.log(error.message);
		})
	}

	peticionPut = () => {
		axios.put(urlput + this.state.form.nit, this.state.form).then(response => {
			this.modalInsertar();
			this.peticionGet();
		})
	}

	peticionDelete = () => {
		axios.delete(urldelete + this.state.form.nit).then(response => {
			this.setState({ modalEliminar: false });
			this.peticionGet();
		})
	}

	modalInsertar = () => {
		this.setState({ modalInsertar: !this.state.modalInsertar });
	}

	seleccionarEmpresa = (empresa) => {
		this.setState({
			tipoModal: 'actualizar',
			form: {
				nit: empresa.nit,
				nombre: empresa.nombre,
				ciudad: empresa.ciudad,
				contacto: empresa.contacto,
				pais: empresa.pais,
				correo: empresa.correo,
				telefono: empresa.telefono
			}
		})
	}

	handleChange = async e => {
		e.persist();
		await this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value
			}
		});
		console.log(this.state.form);
	}

	componentDidMount() {
		this.peticionGet();
	}

	render() {
		const { form } = this.state;

		return (


			<>

				<Menu />

				<main role="main" className="flex-shrink-0 mt-5">

					<div className="container">

						<h1 className="mb-5">Empresas</h1>

						<div className="row">

							<div className="col-md-6">
								<br /><br /><br />
								<button className="btn btn-success" striped bordered hover onClick={() => { this.setState({ form: null, tipoModal: 'insertar' }); this.modalInsertar() }}>Agregar Empresa</button>
								<br /><br />
								<thead>
									<tr>
										<th scope="col">Nit</th>
										<th scope="col">Nombre</th>
										<th scope="col">Ciudad</th>
										<th scope="col">Contacto</th>
										<th scope="col">Pais</th>
										<th scope="col">Correo</th>
										<th scope="col">Teléfono</th>


									</tr>

								</thead>
								<tbody>
									{this.state.data.map(empresa => {
										return (
											<tr>
												<td key="{empresa.nit}">{empresa.nit}</td>
												<td key="{empresa.nombre}">{empresa.nombre}</td>
												<td key="{empresa.ciudad}">{empresa.ciudad}</td>
												<td key="{empresa.contacto}">{empresa.contacto}</td>
												<td key="{empresa.pais}">{empresa.pais}</td>
												<td key="{empresa.correo}">{empresa.correo}</td>
												<td key="{empresa.telefono}">{empresa.telefono}</td>

												<td>
													<button className="btn btn-primary" onClick={() => { this.seleccionarEmpresa(empresa); this.modalInsertar() }}><FontAwesomeIcon icon={faEdit} /></button>
													{"   "}
													<button className="btn btn-danger" onClick={() => { this.seleccionarEmpresa(empresa); this.setState({ modalEliminar: true }) }}><FontAwesomeIcon icon={faTrashAlt} /></button>
												</td>
											</tr>
										)
									})}
								</tbody>

								<Modal isOpen={this.state.modalInsertar}>
									<ModalHeader style={{ display: 'block' }}>
										<span style={{ float: 'right' }} onClick={() => this.modalInsertar()}>x</span>
									</ModalHeader>
									<ModalBody>
										<div className="form-group">
											<label htmlFor="nit">Nit</label>
											<input className="form-control" type="text" name="nit" id="nit" onChange={this.handleChange} value={form ? form.nit : ''} />
											<br />
											<label htmlFor="nombre">Nombre</label>
											<input className="form-control" type="text" name="nombre" id="nombre" onChange={this.handleChange} value={form ? form.nombre : ''} />
											<br />
											<label htmlFor="ciudad">ciudad</label>
											<input className="form-control" type="text" name="ciudad" id="ciudad" onChange={this.handleChange} value={form ? form.ciudad : ''} />
											<br />
											<label htmlFor="contacto">Contacto</label>
											<input className="form-control" type="text" name="contacto" id="contacto" onChange={this.handleChange} value={form ? form.contacto : ''} />
											<br />
											<label htmlFor="pais">País</label>
											<input className="form-control" type="text" name="pais" id="pais" onChange={this.handleChange} value={form ? form.pais : ''} />
											<br />
											<br />
											<label htmlFor="correo">correo</label>
											<input className="form-control" type="text" name="correo" id="correo" onChange={this.handleChange} value={form ? form.correo : ''} />
											<br />
											<br />
											<label htmlFor="telefono">telefono</label>
											<input className="form-control" type="text" name="telefono" id="telefono" onChange={this.handleChange} value={form ? form.telefono : ''} />

										</div>
									</ModalBody>

									<ModalFooter>
										{this.state.tipoModal == 'insertar' ?
											<button className="btn btn-success" onClick={() => this.peticionPost()}>
												Insertar
											</button> : <button className="btn btn-primary" onClick={() => this.peticionPut()}>
												Actualizar
											</button>
										}
										<button className="btn btn-danger" onClick={() => this.modalInsertar()}>Cancelar</button>
									</ModalFooter>
								</Modal>
								<Modal isOpen={this.state.modalEliminar}>
									<ModalBody>
										Estás seguro que deseas eliminar la empresa {form && form.nombre}
									</ModalBody>
									<ModalFooter>
										<button className="btn btn-danger" onClick={() => this.peticionDelete()}>Sí</button>
										<button className="btn btn-secundary" onClick={() => this.setState({ modalEliminar: false })}>No</button>
									</ModalFooter>
								</Modal>

							</div>
						</div>

					</div>


				</main >

				<Footer />

			</>




		)

	}


}
export default Empresas;
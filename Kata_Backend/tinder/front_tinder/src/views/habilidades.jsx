import React from 'react';
import { useContext, useEffect, useState } from "react"
import axios from 'axios'
import { Container, Form, Button, Table } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faStar } from '@fortawesome/free-solid-svg-icons';


import Menu from '../components/menu/Menu';
import Footer from '../components/footer/Footer';

const urlget = "https://tinder-rc1o.onrender.com/tinder/talento/obtener";

const urlput = "https://tinder-rc1o.onrender.com/tinder/talento/actualizar/";

const urlpost = "https://tinder-rc1o.onrender.com/tinder/talento/crear";

const urldelete = "https://tinder-rc1o.onrender.com/tinder/talento/eliminar/";

const urlgethabilidad = "https://tinder-rc1o.onrender.com/tinder/habilidad/obtener";
const urlposthabilidad = "https://tinder-rc1o.onrender.com/tinder/habilidad/crear";

class Talentos extends React.Component {

    state = {
        data: [],
        modalInsertar: false,
        modalEliminar: false,
        form: {

            id_habilidad: '',
            id_talento: '',
            identificacion: '',
            nombre: '',
            ciudad: '',
            pais: '',
            correo: '',
            telefono: '',
            valor_hora: '',
            categoria: '',
            area: '',
            descripcion: ''
        }
    }

    peticionGet = () => {
        axios.get(urlgethabilidad).then(response => {
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
        axios.put(urlput + this.state.form.identificacion, this.state.form).then(response => {
            this.modalInsertar();
            this.peticionGet();
        })
    }

    peticionDelete = () => {
        axios.delete(urldelete + this.state.form.identificacion).then(response => {
            this.setState({ modalEliminar: false });
            this.peticionGet();
        })
    }

    modalInsertar = () => {
        this.setState({ modalInsertar: !this.state.modalInsertar });
    }



    seleccionarTalento = (talento) => {
        this.setState({
            tipoModal: 'actualizar',
            form: {
                id_habilidad: talento.id_habilidad,
                id_talento: talento.id_talento,
                identificacion: talento.identificacion,
                nombre: talento.nombre,
                ciudad: talento.ciudad,
                pais: talento.pais,
                correo: talento.correo,
                telefono: talento.telefono,
                valor_hora: talento.valor_hora,
                categoria: talento.categoria,
                area: talento.area,
                descripcion: talento.descripcion
            }
        })
    }
    //HABILIDADES

    

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

                        <h1 className="mb-5">Talentos</h1>

                        <div className="row">

                            <div className="col-md-6">
                                {/* <br /><br /><br />
                                <button className="btn btn-success" striped bordered hover onClick={() => { this.setState({ form: null, tipoModal: 'insertar' }); this.modalInsertar() }}>Agregar Talento</button>
                                <br /><br /> */}
                                <thead>
                                    <tr>
                                        <th scope="col">Id Habilidad</th>
                                        <th scope="col">Id Talento</th>
                                        <th scope="col">Identificacion</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Ciudad</th>
                                        <th scope="col">Pais</th>
                                        <th scope="col">Correo</th>
                                        <th scope="col">Telefono</th>
                                        <th scope="col">Valor Hora</th>
                                        <th scope="col">Categoria</th>
                                        <th scope="col">Area</th>
                                        <th scope="col">Descripcion</th>


                                    </tr>

                                </thead>
                                <tbody>
                                    {this.state.data.map(talento => {
                                        return (
                                            <tr>
                                                <td key="{talento.id_talento}">{talento.id_habilidad}</td>
                                                <td key="{talento.id_talento}">{talento.id_talento}</td>
                                                <td key="{talento.identificacion}">{talento.identificacion}</td>
                                                <td key="{talento.nombre}">{talento.nombre}</td>
                                                <td key="{talento.ciudad}">{talento.ciudad}</td>
                                                <td key="{talento.pais}">{talento.pais}</td>
                                                <td key="{talento.correo}">{talento.correo}</td>
                                                <td key="{talento.telefono}">{talento.telefono}</td>
                                                <td key="{talento.valor_hora}">{talento.valor_hora}</td>
                                                <td key="{talento.categoria}">{talento.categoria}</td>
                                                <td key="{talento.area}">{talento.area}</td>
                                                <td key="{talento.descripcion}">{talento.descripcion}</td>
                                                <td>
                                                    <button className="btn btn-primary" onClick={() => { this.seleccionarTalento(talento); this.modalInsertar() }}><FontAwesomeIcon icon={faEdit} /></button>
                                                    {"   "}
                                                    <button className="btn btn-danger" onClick={() => { this.seleccionarTalento(talento); this.setState({ modalEliminar: true }) }}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                                    {"   "}
                                                    <button className="btn btn-primary" onClick={() => { this.seleccionarHabilidadTalento(talento); this.modalConsultarHabilidad() }}><FontAwesomeIcon icon={faStar} /></button>
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
                                            <label htmlFor="identificacion">identificacion</label>
                                            <input className="form-control" type="text" name="identificacion" id="identificacion" onChange={this.handleChange} value={form ? form.id : ''} />
                                            <br />
                                            <label htmlFor="nombre">Nombre</label>
                                            <input className="form-control" type="text" name="nombre" id="nombre" onChange={this.handleChange} value={form ? form.nombre : ''} />
                                            <br />
                                            <label htmlFor="ciudad">ciudad</label>
                                            <input className="form-control" type="text" name="ciudad" id="ciudad" onChange={this.handleChange} value={form ? form.ciudad : ''} />
                                            <br />
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
                                            <br />
                                            <label htmlFor="valor_hora">valor_hora</label>
                                            <input className="form-control" type="text" name="valor_hora" id="valor_hora" onChange={this.handleChange} value={form ? form.valor_hora : ''} />
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
                                        Estás seguro que deseas eliminar al talento {form && form.nombre}
                                    </ModalBody>
                                    <ModalFooter>
                                        <button className="btn btn-danger" onClick={() => this.peticionDelete()}>Sí</button>
                                        <button className="btn btn-secundary" onClick={() => this.setState({ modalEliminar: false })}>No</button>
                                    </ModalFooter>
                                </Modal>
                                {/* INICIO MODAL HABILIDADES CONSULTA */}

                                <Modal isOpen={this.state.modalConsultarHabilidad}>
                                    <ModalHeader style={{ display: 'block' }}>
                                        <span style={{ float: 'right' }} onClick={() => this.modalConsultarHabilidad()}></span>
                                    </ModalHeader>
                                    <ModalBody>
                                        <thead>
                                            <tr>
                                                <th scope="col">categoria</th>
                                                <th scope="col">area</th>
                                                <th scope="col">descripcion</th>


                                            </tr>

                                        </thead>
                                        <tbody>
                                            {this.state.data.map(talento => {
                                                return (
                                                    <tr>
                                                        <td key="{talento.categoria}">{talento.categoria}</td>
                                                        <td key="{talento.area}">{talento.area}</td>
                                                        <td key="{talento.descripcion}">{talento.descripcion}</td>

                                                    </tr>
                                                )
                                            })}
                                        </tbody>

                                    </ModalBody>

                                    <ModalFooter>
                                        {this.state.tipoModal == 'insertar' ?
                                            <button className="btn btn-success" onClick={() => this.peticionPostHab()}>
                                                Insertar
                                            </button> : <button className="btn btn-primary" onClick={() => this.peticionPut()}>
                                                Actualizar
                                            </button>
                                        }
                                        <button className="btn btn-danger" onClick={() => this.modalConsultarHabilidad()}>Cancelar</button>
                                    </ModalFooter>
                                </Modal>

                                {/* FIN MODAL HABILIDADES CONSULTA */}






                            </div>
                        </div>

                    </div>


                </main >

                <Footer />

            </>




        )

    }


}
export default Talentos;
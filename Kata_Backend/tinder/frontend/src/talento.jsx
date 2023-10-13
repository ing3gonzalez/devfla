import { useContext, useEffect, useState } from "react"
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Form, Button, Table } from 'react-bootstrap'


export default function Talents() {

    const [talents, setTalents] = useState([]);

    const getTalents = () => {
        return axios.get("https://tinder-rc1o.onrender.com/tinder/talento/obtener")
            .then((response) => setTalents(response.data));
    }

    useEffect(() => {
        getTalents();
    }, [])

    const FormularioTalento = () => {
        const [formulario, setFormulario] = useState({
            id_talento: '',
            identificacion: '',
            nombre: '',
            ciudad: '',
            pais: '',
            correo: '',
            telefono: '',
            valor_hora: ''
        });
    
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormulario({ ...formulario, [name]: value });
        }}
    
        const enviarFormulario = () => {
            axios.put('https://tinder-rc1o.onrender.com/tinder/talento/actualizar/', formulario)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
            }

  return (
     <section>
        <h1 className="text-center">Talentos</h1>
        <div className="container mt-5">
    <form id="formulario">
        <div className="form-group">
            <Form.Label>  Identificación:</Form.Label>
            <Form.Control  type="text"  id="identificacion" className="identificacion" required />
        </div>

        <div className="form-group">
            <Form.Label>  Nombre:</Form.Label>
            <Form.Control   type="text"  id="nombre" className="nombre" required />
        </div>

        <div className="form-group">
            <Form.Label>  Ciudad:</Form.Label>
            <Form.Control  type="text"  id="ciudad" className="ciudad" required />
        </div>

        <div className="form-group">
            <Form.Label>  País:</Form.Label>
            <Form.Control  type="text"  id="pais" className="pais" required />
        </div>

        <div className="form-group">
        <Form.Label> Correo:</Form.Label>
            <Form.Control type="email"  id="correo" className="correo" required />
        </div>

        <div className="form-group">
            <Form.Label>  Teléfono:</Form.Label>
            <Form.Control   type="text"  id="telefono" className="telefono" required />
        </div>

        <div className="form-group">
            <Form.Label>  Valor por hora:</Form.Label>
            <Form.Control  type="number"  id="valor_hora" className="valor_hora" required />
        </div>

        <button type="button" className="btn btn-primary" onClick={enviarFormulario} >Enviar</button>
    </form>
</div>




        {/****************** */}
        <Table className="table" striped bordered hover>

            <thead>
                <tr>
                    <th scope="col">Id Talento</th>
                    <th scope="col">Identificacion</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Ciudad</th>
                    <th scope="col">Pais</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">Valor Hora</th>

                </tr>
            </thead>
            <tbody>
                {
                    talents.map(c =>
                        <tr key={c.id_talento}>
                            <th scope="row">{c.id_talento}</th>
                            <td >{c.identificacion}</td>
                            <td>{c.nombre}</td>
                            <td >{c.ciudad}</td>
                            <td>{c.pais}</td>
                            <td >{c.correo}</td>
                            <td>{c.telefono}</td>
                            <td>{c.valor_hora}</td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    </section>
  );
}
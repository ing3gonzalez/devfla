import { useContext,useEffect, useState } from "react"
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Form, Button, Table } from 'react-bootstrap'
import { UserContext } from "./context/UserContext"
//import { useNavigate } from "react-router-dom";


export default  function Talents() {

    state = {
        identificacion: '',nombre: '',ciudad: '', pais: '',correo: '',telefono: '',valor_hora: ''
    }

    identtalento = e => {
        this.setState({identificacion: e.target.value})
    }

    nombretalento = e => {
        this.setState({nombre: e.target.value})
    }
    ciudadtalento = e => {
        this.setState({ciudad: e.target.value})
    }
    paistalento = e => {
        this.setState({pais: e.target.value})
    }
    correotalento = e => {
        this.setState({correo: e.target.value})
    }
    telefonotalento = e => {
        this.setState({telefono: e.target.value})
    }
    valor_horatalento = e => {
        this.setState({valor_hora: e.target.value})
    }


//seccion de consulta de informacion
    const [talents, setTalents] = useState([]);

    const getTalents = () => {
        return axios.get("https://tinder-rc1o.onrender.com/tinder/talento/obtener")
            .then((response) => setTalents(response.data));
    }

    useEffect(() => {
        getTalents();
    }, [])

//////////////////////////////////
//Ingresar Talentos//
nuevotalento = async (e) => {
    e.preventDefault(); 

    const {identificacion, nombre,ciudad,pais,correo,telefono,valor_hora } = this.state;
    if(identificacion === '' || nombre === ''|| ciudad === ''|| pais === ''|| correo === ''|| telefono === ''|| valor_hora === ''){
        this.setState({error: true});
        return;
    }
    this.setState({error: false})

    let url = `https://tinder-rc1o.onrender.com/tinder/talento/crear`;
    await axios.post(url,{
        identificacion: identificacion,
        nombre: nombre,
        ciudad: ciudad,
        pais: pais,
        telefono: telefono,
        valor_hora: valor_hora

    })
    .then(function (response){
        console.log(response);
    })
    .catch(function (error){
        console.log(error)
    })
    window.location = "/"
}





    return <section>
        <h1 className="text-center">Talentos</h1>
<Form onSubmit={this.nuevotalento}>
<Form.Group >
<Form.Label>Identificacion</Form.Label>
<Form.Control className="identificacion" type='number' placeholder='Ingrese la identificacion' required />

<Form.Label>Nombre</Form.Label>
<Form.Control className="nombre" type='text' placeholder='Ingrese el nombre del talento' required />

<Form.Label>Ciudad</Form.Label>
<Form.Control className="Ciudad" type='text' placeholder='Ingrese la ciudad de residencia' required />

<Form.Label>Pais</Form.Label>
<Form.Control className="Pais" type='text' placeholder='Ingrese el pais de residencia' required />

<Form.Label>Correo</Form.Label>
<Form.Control className="Correo" type='email' placeholder='Ingrese un correo valido' required />

<Form.Label>Teléfono</Form.Label>
<Form.Control className="Telefono" type='text' placeholder='Ingrese un telefono valido con codigo de pais' required />

<Form.Label>Valor Hora</Form.Label>
<Form.Control className="v_hora" type='number' placeholder='Ingrese el valor de la hora de trabajo' required />

</Form.Group>

<br />
                                      
                <Button type="submit">Add user</Button>

        

</Form>
      
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
                            <td>  <Button onClick={() => handleEdit(u)}>Edit User </Button> </td>
                            <td>  <Button onClick={() => deleteUser(u.id)}>Delete User </Button> </td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    </section>
};
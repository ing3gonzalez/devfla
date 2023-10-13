import { useContext, useEffect, useState } from "react"
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Form, Button, Table } from 'react-bootstrap'
import { TalentContext } from "./context/TalentContext"
//import { useNavigate } from "react-router-dom";


export default function Talents() {

    const [talents, setTalents] = useState([]);

    const getTalents = () => {
        return axios.get("https://tinder-rc1o.onrender.com/tinder/talento/obtener")
            .then((response) => setTalents(response.data));
    }

    useEffect(() => {
        getTalents();
    }, [])



    let { addUser, deleteUser, updateUser } = useContext(TalentContext)
    const [update, setUpdate] = useState(false)
    const [currentId, setCurrentId] = useState(null)
    const [currentName, setCurrentName] = useState(null)
    const [currentCity, setCurrentCity] = useState(null)
    const [currentCountry, setCurrentCountry] = useState(null)
    const [currentEmail, setCurrentEmail] = useState(null)
    const [currentPhone, setCurrentPhone] = useState(null)
    const [currentVhour, setCurrentVhour] = useState(null)

    let [id, setId] = useState(null)
    let [name, setName] = useState(null)
    let [city, setCity] = useState(null)
    let [country, setCountry] = useState(null)
    let [email, setEmail] = useState(null)
    let [phone, setPhone] = useState(null)
    let [vhour, setVhour] = useState(null)

    let idRef = useRef(null)
    let nameRef = useRef(null)
    let cityRef = useRef(null)
    let countryRef = useRef(null)
    let emailRef = useRef(null)
    let phoneRef = useRef(null)
    let vhourRef = useRef(null)

    let handleUsers = (e) => {
        e.preventDefault()

        let id = Date.now()
        let user =
        {
            id, name, city, country, email, phone, vhour
        }
        addUser(user)
        idRef.current.value = ""
        nameRef.current.value = ""
        cityRef.current.value = ""
        countryRef.current.value = ""
        emailRef.current.value = ""
        phoneRef.current.value = ""
        vhourRef.current.value = ""

    };

    let handleEdit = (user) => {
        setUpdate(true);
        setCurrentId(user.id)
        setCurrentName(user.name)
        setCurrentCity(user.city)
        setCurrentCountry(user.country)
        setCurrentEmail(user.email)
        setCurrentPhone(user.phone)
        setCurrentVhour(user.vhour)

        idRef.current.value = user.id
        nameRef.current.value = user.name
        cityRef.current.value = user.city
        countryRef.current.value = user.country
        emailRef.current.value = user.email
        phoneRef.current.value = user.phone
        vhourRef.current.value = user.vhour


    };
    let handleUpdate = (e) => {
        e.preventDefault()

        updateUser(currentId, currentName, currentCity, currentCountry, currentEmail, currentPhone, currentVhour)
        setCurrentId(null)
        setCurrentName(null)
        setCurrentCity(null)
        setCurrentCountry(null)
        setCurrentEmail(null)
        setCurrentPhone(null)
        setCurrentVhour(null)

        setName(null)
        setCountry(null)
        setCity(null)
        setEmail(null)
        setPhone(null)
        setVhour(null)


        setUpdate(false)
        nameRef.current.value = ""
        cityRef.current.value = ""
        countryRef.current.value = ""
        emailRef.current.value = ""
        phoneRef.current.value = ""
        vhourRef.current.value = ""



    }




    return <section>
        <h1 className="text-center">Talentos</h1>

        {/****************** */}
        {update ? (
            <Form onSubmit={handleUpdate}>
                <Form.Group>
                    <Form.Label>Identificacion</Form.Label>
                    <Form.Control type='number'
                        onChange={(e) => setCurrentId(e.target.value)}
                        ref={nameRef} placeholder='Enter name' required />

                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type='text'
                        onChange={(e) => setCurrentName(e.target.value)}
                        ref={ageRef} placeholder='Enter age' required />

                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control type='text'
                        onChange={(e) => setCurrentCity(e.target.value)}
                        ref={nameRef} placeholder='Enter name' required />

                    <Form.Label>Pais</Form.Label>
                    <Form.Control type='number'
                        onChange={(e) => setCountry(e.target.value)}
                        ref={ageRef} placeholder='Enter age' required />

                    <Form.Label>Correo</Form.Label>
                    <Form.Control type='text'
                        onChange={(e) => setEmail(e.target.value)}
                        ref={nameRef} placeholder='Enter name' required />

                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type='number'
                        onChange={(e) => setPhone(e.target.value)}
                        ref={ageRef} placeholder='Enter age' required />

                    <Form.Label>Valor Hora</Form.Label>
                    <Form.Control type='text'
                        onChange={(e) => setVhour(e.target.value)}
                        ref={nameRef} placeholder='Enter name' required />


                </Form.Group>

                <br />
                <Button type="submit">Update user</Button>


            </Form>


        ) : (<Form onSubmit={handleUsers}>
            <Form.Group>

                <Form.Label>Identificacion</Form.Label>
                <Form.Control type='text'
                    onChange={(e) => setCurrentId(e.target.value)}
                    ref={nameRef} placeholder='Enter name' required />

                <Form.Label>Nombre</Form.Label>
                <Form.Control type='text'
                    onChange={(e) => setName(e.target.value)}
                    ref={nameRef} placeholder='Enter name' required />

                <Form.Label>Ciudad</Form.Label>
                <Form.Control type='text'
                    onChange={(e) => setCity(e.target.value)}
                    ref={nameRef} placeholder='Enter name' required />

                <Form.Label>Pais</Form.Label>
                <Form.Control type='text'
                    onChange={(e) => setCountry(e.target.value)}
                    ref={nameRef} placeholder='Enter name' required />

                <Form.Label>Correo</Form.Label>
                <Form.Control type='text'
                    onChange={(e) => setEmail(e.target.value)}
                    ref={nameRef} placeholder='Enter name' required />

                <Form.Label>Teléfono</Form.Label>
                <Form.Control type='text'
                    onChange={(e) => setPhone(e.target.value)}
                    ref={nameRef} placeholder='Enter name' required />

                <Form.Label>Valor Hora</Form.Label>
                <Form.Control type='number'
                    onChange={(e) => setVhour(e.target.value)}
                    ref={ageRef} placeholder='Enter age' required />

            </Form.Group>

            <br />
            <Button type="submit">Add user</Button>


        </Form>)

        }

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
                        <tr key={c._id}>
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
};
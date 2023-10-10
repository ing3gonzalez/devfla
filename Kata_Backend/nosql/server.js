const express = require('express')
const mongoose = require('mongoose')
const TaskRoutes = require('./routes/TaskRoutes')

const PORT = 3000

const server = express()




server.use(express.json())

server.use('/api/v1/task',TaskRoutes)

const mongooseConnect = async () => {

try
{

await mongoose.connect('mongodb+srv://camilocardenas5027:pruebas2000@cluster0.6kmbjxd.mongodb.net/TaskApp?retryWrites=true&w=majority')
console.log('Conexion exitosa')
}

catch(error)
{
    console.error(error)
}

}
mongooseConnect()

server.listen(PORT, () => {
      console.log(`Escuchando en el puerto ${PORT}`)})
const express = require('express');
const router = express.Router();
const {clientcontroller} = require('./../controllers/clientcontroller')



//router.get('/', ()=>{"client"});

// router.get('/', (clientcontroller,getClients) =>  res.status(200).send({
//     message:"Clientes"
// }));


//obtenemos todos los clientes
router.get('/', clientcontroller.getClients);

//insertamos un solo cliente
router.post('/', clientcontroller.insertClient);

// Actualizamos un cliente
router.put('/:id', clientcontroller.updateClient)

// Eliminar un cliente
router.delete('/:id',clientcontroller.removeClient)

// Obtener un solo cliente
router.get('/:id',clientcontroller.getClient)


module.exports = router;
const express = require('express');
const router = express.Router();

//router.get('/', ()=>{"product"});

router.get('/', (req, res) =>  res.status(200).send({
    message:"Productos"
}));

module.exports=router;
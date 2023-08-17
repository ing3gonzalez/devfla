const express = require('express');
const router = express.Router();

//router.get('/', ()=>{"sale"});

router.get('/', (req, res) =>  res.status(200).send({
    message:"Ventas"
}));

module.exports=router;
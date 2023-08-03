const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Respuesta al get: Hello world!');
  });

module.exports = router;
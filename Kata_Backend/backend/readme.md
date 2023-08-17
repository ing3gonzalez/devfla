#Backend

1. Crear carpeta
2. Por terminal ubicarse en la carpeta 
3. Inicializar proyecto comando nom init -y
4. archivo .gitignore con la linea node_modules/ https://github.com/github/gitignore/blob/main/Node.gitignore 
5. archivo server.js
5.1 Instalar express => npm i express
5.2 crear codigo base para api con express

5.3 probar api

comando en terminal "node server.js" or "nodemon server.js"

5.4 llenar los archivos con la estructura basica

ej:

const express = require('express');
const router = express.Router();

router.get('/', ()=>{});

module.exports=router;

6. Importar en el index.js de routes de la carpeta routes a todos los modulos 

const clientroutes = require('./clientroutes');
const productroutes = require('./productroutes');
const saleroutes = require('./saleroutes');

module.exports = {

    clientroutes,
    productroutes,
    saleroutes
}


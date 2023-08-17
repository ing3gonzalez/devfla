const express = require('express');
const server = express();
const port = 3000;

const Routes=require ('./routes')

server.use('/api/client',Routes.clientroutes)

server.use('/api/product',Routes.productroutes)

server.use('/api/sale',Routes.saleroutes)

server.listen(port,() =>
{
    console.log(`API escuchando en puerto ${port}.`);
})
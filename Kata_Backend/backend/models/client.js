const connection = require("../knexfile")['development'];
const database = require('knex')(connection);

const getAllClients = () => {
    return database('clients');
};

const getClient = (idClient) => {
    return database('clients')
        .where( { id: idClient });
};

const createClient = (client) => {
    return database('clients')
        .insert(client);
};


const updateClient = (id,client) =>{
    return database('clients')
        .where('id','==',id)
        .update(client
            

module.exports = {
    getAllClients,
    getClient,
    createClient,
}
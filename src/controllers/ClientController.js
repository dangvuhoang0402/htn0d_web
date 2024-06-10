const { json } = require("express")
const ClientService = require('../services/ClientService')

const createClient = async (req,res ,next)=>{
    console.log("Client Controller: create client")
    const client = await ClientService.createClient(req.body)
    req.responseData = {
        status: 201, 
        message: 'Success', 
        data: client 
    };
    next();
}

const getAllClient =async (req,res ,next)=>{
    console.log("Client Controller: get all clients")
    const clients= await ClientService.getAllClient()
    req.responseData = {
        status: 200, 
        message: 'Success', 
        data: clients 
    };
    next();
}

const getClientbyId = async (req,res ,next)=>{
    console.log("Client Controller: get client by Id")
    const client = await ClientService.getClientbyId(req.params.id)
    req.responseData = {
        status: 200, 
        message: 'Success', 
        data: client 
    };
    next();
}

const updateClient = async (req,res ,next)=>{
    console.log("Client Controller: update client")
    const client = await ClientService.updateClient(req.params.id,req.body)
    req.responseData = {
        status: 200, 
        message: 'Success', 
        data: client 
    };
    next();
}

const deleteClient = async (req,res ,next)=>{
    console.log("Client Controller: delete client")
    const client = await ClientService.deleteClient(req.params.id)
    req.responseData = {
        status: 200, 
        message: 'Success', 
        data: client 
    };
    next();
}

module.exports = {
    getAllClient,
    getClientbyId,
    updateClient,
    deleteClient,
    createClient
}
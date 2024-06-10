const CustomError = require("../error/CustomError");
const clientRepo = require("../repo/ClientRepo");
const cardRepo=require("../repo/CardRepo")

require("express-async-errors");

const getAllClient = async() => {
  console.log("Client Service: get All clients");
  const clients = await clientRepo.getAllClient();
  return clients;
};

const createClient = async(clientData) => {
  console.log("Client Service: create client");
  const client = await clientRepo.createClient(clientData);
  await cardRepo.createCardByDefault(client._id);
  return client;
};

const getClientbyId = async(id) => {
  console.log("Client Service: get client by id");
  const client = await clientRepo.getClientbyId(id);
  if (!client) throw new CustomError('Client not found');
  return client;
};

const updateClient = async(id, clientData) => {
  console.log("Client Service: update client");
  const client = await clientRepo.updateClient(id, clientData);
  if (!client) throw new CustomError('Client not found');
  return client;
};

const deleteClient = async(id) => {
  console.log("Client Service: delete client");
  const client = await clientRepo.deleteClient(id);
  if (!client) throw new CustomError('Client not found');
  return client;
};

module.exports = {
  getAllClient,
  getClientbyId,
  updateClient,
  deleteClient,
  createClient
};
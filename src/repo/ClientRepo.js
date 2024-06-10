const Client = require("../models/Client");
require("express-async-errors");

const createClient = async (clientData) => {
  const newClient = await Client.create(clientData);
  return newClient;
};

const getAllClient = async () => {
  const allClients = await Client.find();
  return allClients;
};

const getClientById = async (id) => {
  const client = await Client.findById(id);
  if (!client) {
    throw new Error("Client not found");
  }
  return client;
};

const updateClient = async (id, updatedData) => {
  const updatedClient = await Client.findByIdAndUpdate(id, updatedData, {
    new: true,
  });
  return updatedClient;
};

const deleteClient = async (id) => {
  const deletedClient = await Client.findByIdAndDelete(id);
  if (!deletedClient) {
    throw new Error("Client not found");
  }
  return deletedClient;
};

module.exports = {
  createClient,
  getAllClient,
  getClientById,
  updateClient,
  deleteClient,
};
const Card = require("../models/Card");
require("express-async-errors");

const createCard = async (cardData) => {
  const newCard = await Card.create(cardData);
  return newCard;
};

const getCardbyCardUID = async (cardUid) => {
  return await Card.findOne({ CardUid: cardUid });
};

const getAllCard = async () => {
  const allCards = await Card.find().populate("Client");
  return allCards;
};

const getCardByClientId = async (clientId) => {
  const card = await Card.findOne({
    Client: clientId,
  });
  if (!card) {
    throw new Error("Card not found");
  }
  return card;
}

const getCardById = async (id) => {
  const card = await Card.findById(id);
  if (!card) {
    throw new Error("Card not found");
  }
  return card;
};

const updateCard = async (id, updatedData) => {
  const updatedCard = await Card.findByIdAndUpdate(id, updatedData, {
    new: true,
  });
  return updatedCard;
};

const deleteCard = async (id) => {
  const deletedCard = await Card.findByIdAndDelete(id);
  if (!deletedCard) {
    throw new Error("Card not found");
  }
  return deletedCard;
};

const createCardByDefault = async (ClientObjectId) => {
  console.log("Card repo: create Card");
  const newCard = await Card.create({
    Client: ClientObjectId,
    Lock: false,
  });
  return newCard;
};

module.exports = {
  createCard,
  getAllCard,
  getCardById,
  updateCard,
  deleteCard,
  createCardByDefault,
  getCardByClientId,
  getCardbyCardUID
};
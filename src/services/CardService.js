const CustomError = require("../error/CustomError");
const cardRepo = require("../repo/CardRepo");

require("express-async-errors");
const createCard = async(cardData) => {
  console.log("Card Service: create card");
  const card = await cardRepo.createCard(cardData);
  return card;
};

const getCardbyId = async(id) => {
  console.log("Card Service: get card by id");
  const card = await cardRepo.getCardById(id);
  if (!card) throw new CustomError('Card not found');
  return card;
};

const getCardbyCardUID = async(cardData) => {
  console.log("Card Service: get card by CardUID");
  if (!cardData.CardUid){
    const card= await cardRepo.getAllCard();
    return card;
  }
  const CardUid = cardData.CardUid;
  const card = await cardRepo.getCardbyCardUID(CardUid);
  if (!card) throw new CustomError('Card not found');
  return card;
};

const updateCard = async(id, cardData) => {
  console.log("Card Service: update card");
  const card = await cardRepo.updateCard(id, cardData);
  if (!card) throw new CustomError('Card not found');
  return card;
};

const deleteCard = async(id) => {
  console.log("Card Service: delete card");
  const card = await cardRepo.deleteCard(id);
  if (!card) throw new CustomError('Card not found');
  return card;
};

module.exports = {
  getCardbyId,
  updateCard,
  deleteCard,
  createCard,
  getCardbyCardUID
};
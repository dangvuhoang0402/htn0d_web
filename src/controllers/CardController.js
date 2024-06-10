const CardService = require('../services/CardService')
const getAllCard =async (req,res ,next)=>{
    console.log("CardController: getAllCard");
    const Cards = await CardService.getAllCard()
    req.responseData = {
        status: 200, 
        message: 'Success',
        data: Cards 
    };
    next();
}

const getCardbyCardUID = async (req,res ,next)=>{
    console.log("CardController: getCardbyCardUID");
    const Card = await CardService.getCardbyCardUID(req.body)
    req.responseData = {
        status: 200, 
        message: 'Success',
        data: Card 
    };
    next();
}

const getCardbyId = async (req,res ,next)=>{
    console.log("CardController: getCardbyId");
    const Card = await CardService.getCardbyId(req.params.id)
    req.responseData = {
        status: 200, 
        message: 'Success',
        data: Card 
    };
    next();
}
const createCard = async (req,res ,next)=>{
    console.log("CardController: createCard");
    const Card = await CardService.createCard(req.body)
    req.responseData = {
        status: 201, // Status mặc định là 201
        message: 'Success', // Message mặc định là 'Success'
        data: Card // Dữ liệu trả về từ controller
    };
    next();
}
const updateCard = async (req,res ,next)=>{
    console.log("CardController: updateCard");
    const Card = await CardService.updateCard(req.params.id,req.body)
    req.responseData = {
        status: 200, 
        message: 'Success',
        data: Card 
    };
    next();
}
const deleteCard = async (req,res ,next)=>{
    console.log("CardController: deleteCard");
    const Card = await CardService.deleteCard(req.params.id)
    req.responseData = {
        status: 200, 
        message: 'Success',
        data: Card 
    };
    next();
}
module.exports = {
    getAllCard,
    createCard,
    getCardbyId,
    updateCard,
    deleteCard,
    getCardbyCardUID
}
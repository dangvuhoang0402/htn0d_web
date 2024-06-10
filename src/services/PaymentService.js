const CustomError = require("../error/CustomError");
const paymentRepo = require("../repo/PaymentRepo");
const CardRepo= require("../repo/CardRepo");

require("express-async-errors");

const createPayment = async (paymentData) => {
  console.log("Attendance service: create attendance");
  paymentData.Date= new Date(Date.now());
  const payment = await paymentRepo.createPayment(paymentData);
  return payment;
};

const makePayment= async (paymentData) => {
  console.log("Attendance service: make payment");
  paymentData.Date= new Date(Date.now());
  const amount=paymentData.Amount;
  const clientCard=await CardRepo.getCardbyCardUID(paymentData.ClientCard);
  const merchantCard=await CardRepo.getCardbyCardUID(paymentData.MerchantCard);
  if (clientCard.Balance<amount){
    paymentData.Status="Failed";
    paymentData.Reason="Insufficient balance";
  }
  else if (clientCard.Lock==true || merchantCard.Lock==true){
    paymentData.Status="Failed";
    paymentData.Reason="Card is locked";
  }
  else
  {
    paymentData.Status="Success";
    clientCard.Balance-=amount;
    merchantCard.Balance+=amount;
    await CardRepo.updateCard(clientCard._id,clientCard);
    await CardRepo.updateCard(merchantCard._id,merchantCard);
  }
  paymentData.ClientCard=clientCard._id;
  paymentData.MerchantCard=merchantCard._id;
  const payment = await paymentRepo.createPayment(paymentData);
  return payment;
}

const getAllPayment = async () => {
  console.log("Attendance service: get all attendance");
  const payments = await paymentRepo.getAllPayment();
  return payments;
}

const getAllPaymentByClient = async (paymentId) => {
  console.log("Attendance service: get all attendance by student");
  const payments = await paymentRepo.getAllPaymentByClient(paymentId);
  return payments;
};

const getPaymentById = async (id) => {
  console.log("Attendance service: get attendance by id");
  const payment = await paymentRepo.getPaymentById(id);
  return payment;
};

const updatePayment = async (id, paymentData) => {
  console.log("Attendance service: update attendance");
  const payment = await paymentRepo.updatePayment(id, paymentData);
  return payment;
};

const deletePayment = async (id) => {
  console.log("Attendance service: delete attendance");
  await paymentRepo.deleteAttendance(id);
};

module.exports = {
  createPayment,
  getAllPaymentByClient,
  getPaymentById,
  updatePayment,
  deletePayment,
  getAllPayment,
  makePayment
};
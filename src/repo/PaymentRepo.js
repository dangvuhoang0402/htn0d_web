const Payment = require("../models/Payment");
require("express-async-errors");

const createPayment = async (paymentData) => {
  const newPayment = await Payment.create(paymentData);
  return newPayment;
};

const getAllPayment = async () => {
  const allPayments = await Payment.find()
    .populate('ClientCard', 'CardUid') // only return CardUid field from ClientCard
    .populate('MerchantCard', 'CardUid'); // only return Uid field from MerchantCard
  return allPayments;
};

const getPaymentById = async (id) => {
  const payment = await Payment.findById(id);
  if (!payment) {
    throw new Error("Payment not found");
  }
  return payment;
};

const updatePayment = async (id, updatedData) => {
  const updatedPayment = await Payment.findByIdAndUpdate(id, updatedData, {
    new: true,
  });
  return updatedPayment;
};

const deletePayment = async (id) => {
  const deletedPayment = await Payment.findByIdAndDelete(id);
  if (!deletedPayment) {
    throw new Error("Payment not found");
  }
  return deletedPayment;
};

module.exports = {
  createPayment,
  getAllPayment,
  getPaymentById,
  updatePayment,
  deletePayment,
};
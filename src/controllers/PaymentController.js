const PaymentService = require('../services/PaymentService')

const createPayment = async (req, res, next) => {
    console.log("Attendance Controller: create attendance");
    const payment = await PaymentService.createPayment(req.body);
    req.responseData = {
        status: 201,
        message: 'Success',
        data: payment
    };
    next();
}

const makePayment = async (req, res, next) => {
    console.log("Attendance Controller: make payment");
    const payment = await PaymentService.makePayment(req.body);
    req.responseData = {
        status: 201,
        message: 'Success',
        data: payment
    };
    next();
}

const getAllPaymentByClient = async (req, res, next) => {
    console.log("Attendance Controller: get all attendance by student");
    const payments = await PaymentService.getAllPaymentByClient(req.params.id);
    req.responseData = {
        status: 200,
        message: 'Success',
        data: payments
    };
    next();
}

const getAllPayment = async (req, res, next) => {
    console.log("Attendance Controller: get all attendance");
    const payments = await PaymentService.getAllPayment();
    req.responseData = {
        status: 200,
        message: 'Success',
        data: payments
    };
    next();
}

const getPaymentById = async (req, res, next) => {
    console.log("Attendance Controller: get attendance by id");
    const payment = await PaymentService.getPaymentById(req.params.id);
    req.responseData = {
        status: 200,
        message: 'Success',
        data: payment
    };
    next();
}

const updatePayment = async (req, res, next) => {
    console.log("Attendance Controller: update attendance");
    const payment = await PaymentService.updatePayment(req.params.id, req.body);
    req.responseData = {
        status: 200,
        message: 'Success',
        data: payment
    };
    next();
}

const deletePayment = async (req, res, next) => {
    console.log("Attendance Controller: delete attendance");
    await PaymentService.deletePayment(req.params.id);
    req.responseData = {
        status: 204,
        message: 'Success',
        data: null
    };
    next();
}

module.exports = {
    createPayment,
    getAllPaymentByClient,
    getAllPayment,
    getPaymentById,
    updatePayment,
    deletePayment,
    makePayment
}
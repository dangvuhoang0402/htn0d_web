const paymentController = require("../controllers/PaymentController");
const express = require("express");
const router = express.Router();

router.get("/", paymentController.getAllPayment);
router.get("/client/:id", paymentController.getAllPaymentByClient);
router.post("/", paymentController.createPayment);
router.post("/make_payment", paymentController.makePayment);
router
  .route("/:id")
  .delete(paymentController.deletePayment)
  .put(paymentController.updatePayment)
  .get(paymentController.getPaymentById);

module.exports = router;

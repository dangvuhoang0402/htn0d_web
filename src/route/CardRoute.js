const cardController = require("../controllers/CardController");
const express = require("express");

const router = express.Router();

router.get("/", cardController.getCardbyCardUID);
router.post("/", cardController.createCard);

router
  .route("/:id")
  .delete(cardController.deleteCard)
  .put(cardController.updateCard)
  .get(cardController.getCardbyId);

module.exports = router;

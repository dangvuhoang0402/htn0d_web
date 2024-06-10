const clientController = require("../controllers/ClientController");
const express = require("express");

const router = express.Router();

router.get("/", clientController.getAllClient);
router.post("/", clientController.createClient);

router
  .route("/:id")
  .delete(clientController.deleteClient)
  .put(clientController.updateClient)
  .get(clientController.getClientbyId);

module.exports = router;

const router = require("express").Router();
const realtorController = require("../../controllers/realtorController");

// Matches with "/api/google"
router
  .route("/")
  .get(realtorController.findAll);

module.exports = router;

const express = require("express");
const router = express.Router();

const DonationController = require("./controllers/DonationController");

router.get("/", DonationController.list);
router.post("/donation", DonationController.create);

module.exports = router;

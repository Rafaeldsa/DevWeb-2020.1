const express = require("express");
const router = express.Router();

const DonationController = require("./controllers/DonationController");

router.get("/", DonationController.list);
router.post("/donation", DonationController.create);
router.delete("/:id", DonationController.delete);

module.exports = router;

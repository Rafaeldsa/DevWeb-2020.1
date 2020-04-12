const express = require("express");
const router = express.Router();

const DonationController = require("./controllers/DonationController");
const UserController = require("./controllers/UserController");
const LoginController = require("./controllers/LoginController");

router.get("/donations", LoginController.verifyJWT, DonationController.list);
router.post("/donations", LoginController.verifyJWT, DonationController.create);
router.delete("/:id", DonationController.delete);

router.get("/users", UserController.index);
router.post("/users", UserController.create);

router.post("/login", LoginController.login);

module.exports = router;

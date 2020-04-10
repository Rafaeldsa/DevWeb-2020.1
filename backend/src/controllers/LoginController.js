const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const requireDir = require("require-dir");
require("dotenv").config();
requireDir("../models");

const User = mongoose.model("User");

module.exports = {
  async login(req, res) {
    const { emailUser, senhaUser } = req.body;

    try {
      const authUser = await User.findOne({ email: emailUser });

      if (authUser === null) {
        return "Usuario não encontrado!";
      }

      var token = jwt.sign({ senhaUser }, process.env.SECRET, {
        expiresIn: 604800, // expires in 1 week
      });

      res.json({ authorization: token });
    } catch (error) {
      res.status(500).send({ message: "Erro ao realizar login" });
    }
  },
};

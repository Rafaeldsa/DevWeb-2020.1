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
        res.json({ message: "Usuario não encontrado!" });
      }
      const { whatsapp } = authUser;
      var token = jwt.sign({ whatsapp }, process.env.SECRET, {
        expiresIn: 604800, // expires in 1 week
      });

      res.json({ authorization: token });
    } catch (error) {
      res.status(500).send({ message: "Erro ao realizar login" });
    }
  },

  verifyJWT(req, res, next) {
    var token = req.headers["authorization"];
    if (!token)
      return res
        .status(401)
        .send({ auth: false, message: "No token provided." });

    jwt.verify(token, process.env.SECRET, function (err, decoded) {
      if (err)
        return res
          .status(500)
          .send({ auth: false, message: "Failed to authenticate token." });

      // se tudo estiver ok, salva no request para uso posterior
      req.userWhatsapp = decoded.whatsapp;
      next();
    });
  },
};

const mongoose = require("mongoose");
const requireDir = require("require-dir");

requireDir("../models");

const User = mongoose.model("User");

module.exports = {
  async index(req, res) {
    const users = await User.find(
      {},
      "name tipoSanguineo email senha whatsapp cidade uf -_id"
    );
    return res.json(users);
  },
  async create(req, res) {
    const {
      name,
      tipoSanguineo,
      email,
      senha,
      whatsapp,
      cidade,
      uf,
    } = req.body;
    const existUser = await User.findOne({ email: email });
    if (existUser !== null) {
      res.json({ message: "Usuário já existe!" });
    }
    const user = new User({
      name,
      tipoSanguineo,
      email,
      senha,
      whatsapp,
      cidade,
      uf,
    });

    try {
      await user.save();
      res.status(200).send({
        message: "Cadastro realizado com sucesso!",
      });
    } catch (error) {
      res.status(500).send({ message: "Falha ao cadastrar, tente novamente." });
    }
  },
};

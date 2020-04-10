const mongoose = require("mongoose");
const requireDir = require("require-dir");

requireDir("../models");

const Donation = mongoose.model("Donation");

module.exports = {
  async list(req, res) {
    const { page = 1 } = req.query;

    const count = await Donation.countDocuments({});

    const donations = await Donation.find(
      {},
      "doador tipoSanguineo hospital data -_id"
    )
      .limit(5)
      .skip((page - 1) * 5);

    res.header("X-Total-Count", count);
    return res.json(donations);
  },

  async create(req, res) {
    const { doador, tipoSanguineo, hospital } = req.body;
    const donation = new Donation({
      doador,
      tipoSanguineo,
      hospital,
    });
    const { id } = await donation.save();

    res.json({ id });
  },

  async delete(req, res) {
    try {
      await Donation.findOneAndRemove(req.params.id);
      res.status(200).send({
        message: "Doação removida com sucesso!",
      });
    } catch (error) {
      res.status(500).send({ message: "Falha ao remover a doação." });
    }
  },
};

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
    );

    res.header("X-Total-Count", count);
    return res.json(donations);
  },

  async create(req, res) {
    const donation = new Donation({
      doador: req.body.doador,
      tipoSanguineo: req.body.tipoSanguineo,
      hospital: req.body.hospital,
    });
    await donation.save();

    const { doador } = donation;

    res.send(doador);
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

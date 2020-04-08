const mongoose = require("mongoose");
const requireDir = require("require-dir");

requireDir("../models");
const Donation = mongoose.model("Donation");

module.exports = {
  async list(req, res) {
    const donations = await Donation.find();

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
};

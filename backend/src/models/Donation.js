const mongoose = require("mongoose");
const moment = require("moment");
const Schema = mongoose.Schema;

const DonationSchema = new Schema({
  doador: {
    type: String,
    required: true,
  },
  tipoSanguineo: {
    type: String,
    required: true,
  },
  hospital: {
    type: String,
    requires: true,
  },
  data: {
    type: String,
    default: moment().format("L"),
  },
});

module.exports = mongoose.model("Donation", DonationSchema);

const mongoose = require("mongoose");
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
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Donation", DonationSchema);

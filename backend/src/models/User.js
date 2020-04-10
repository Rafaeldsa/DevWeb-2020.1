const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  tipoSanguineo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
  whatsapp: {
    type: String,
    required: true,
  },
  cidade: {
    type: String,
    required: true,
  },
  uf: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", UserSchema);

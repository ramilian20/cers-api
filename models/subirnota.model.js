const { Schema, model } = require("mongoose");

const notaSchema = Schema({
  identificacion: {
    type: Number,
    required: [true, "la identificacion es obligatoria"],
  },

  modulo: {
    type: String,
    required: [true, "el nombre del modulo es obligatorio"],
  },

  nota: {
    type: Number,
    required: [true, "la nota es requerida"],
  },

  estado: {
    type: Boolean,
    default: true,
    required: true,
  },
});

module.exports = model("Nota", notaSchema);

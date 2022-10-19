const { Schema, model } = require("mongoose");

const inscripcioneswebSchema = Schema({
  identificacion: {
    type: Number,
    required: [true, "la identificacion es obligatoria"],
    unique: true,
  },

  nombre: {
    type: String,
    required: [true, "el nombre  es obligatorio"],
  },

  apellido: {
    type: String,
    required: [true, "el apellido es obligatorio"],
  },

  programa: {
    type: String,
    required: [true, "el programa es obligatorio"],
  },

  telefono: {
    type: Number,
    required: [true, "el telefono es obligatorio"],
  },

  correo: {
    type: String,
    required: [true, "el correo es obligatorio"],
    unique: true,
  },

  estado: {
    type: Boolean,
    default: true,
    required: true,
  },
});

module.exports = model("Inscripcionesweb", inscripcioneswebSchema);

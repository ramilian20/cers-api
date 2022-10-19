const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inscritosSchema = new Schema({
  identificacion: Number,
  nombre: String,
  apellido: String,
  programa: String,
  telefono: Number,
  correo: String,
});

//crear el modelo
const Inscritos = mongoose.model("inscritos", inscritosSchema);
module.exports = Inscritos;

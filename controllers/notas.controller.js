const { response } = require("express");
const Nota = require("../models/subirnota.model");
const Inscrito = require("../models/inscripciones.model");

const peticion = async (req, res = response) => {
  const cedula = req.body.identificacion;
  console.log(cedula);
  try {
    const nombresDB = await Inscrito.find({ identificacion: cedula });
    const notasDB = await Nota.find({ identificacion: cedula });
    console.log(notasDB);
    console.log(nombresDB);
    res.render("notas", {
      arrayNombresDB: nombresDB,
      arrayNotasDB: notasDB,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { peticion };

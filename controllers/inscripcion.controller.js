const { response } = require("express");
const Inscripcione = require("../models/inscripciones.model");

const inscripcionpost = async (req, res = response) => {
  const body = req.body;
  console.log(body);

  //guardar en DB
  try {
    const inscripcionesDB = new Inscripcione(body);
    await inscripcionesDB.save();
    res.redirect("inscripciones");
  } catch (error) {
    console.log(error);
  }
  // res.status(201).json(Nota);
};

module.exports = {
  inscripcionpost,
};

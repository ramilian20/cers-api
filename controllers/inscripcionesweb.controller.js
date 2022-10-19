const { response } = require("express");
const Inscripcionesweb = require("../models/inscripcionesweb.model");

const inscripcionwebpost = async (req, res = response) => {
  const body = req.body;
  console.log(body);

  //guardar en DB
  try {
    const inscripcioneswebDB = new Inscripcionesweb(body);
    await inscripcioneswebDB.save();
    res.redirect("inscripcionesweb");
  } catch (error) {
    console.log(error);
  }
  // res.status(201).json(Nota);
};

module.exports = {
  inscripcionwebpost,
};

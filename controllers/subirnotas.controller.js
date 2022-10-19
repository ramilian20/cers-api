const { response } = require("express");
const Nota = require("../models/subirnota.model");

const crearnota = async (req, res = response) => {
  const body = req.body;

  //guardar en DB
  try {
    const notasDB = new Nota(body);
    await notasDB.save();
    res.redirect("subirnotas");
  } catch (error) {
    console.log(error);
  }
  // res.status(201).json(Nota);
};

module.exports = {
  crearnota,
};

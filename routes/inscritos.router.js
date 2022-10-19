const { Router } = require("express");
const router = Router();
const Inscripcione = require("../models/inscripciones.model");

router.get("/", async (req, res) => {
  try {
    const arrayInscritosDB = await Inscripcione.find();
    res.render("inscritos", {
      arrayInscritos: arrayInscritosDB,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

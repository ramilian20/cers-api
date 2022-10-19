const { Router } = require("express");
const router = Router();
const Inscripcionesweb = require("../models/inscripcionesweb.model");

router.get("/", async (req, res) => {
  try {
    const arrayInscritoswebDB = await Inscripcionesweb.find();
    res.render("inscritosweb", {
      arrayInscritosweb: arrayInscritoswebDB,
    });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const inscritoDB = await Inscripcionesweb.findByIdAndDelete({ _id: id });
    if (inscritoDB) {
      res.json({
        estado: true,
        mensaje: "eliminado",
      });
    } else {
      res.json({
        estado: false,
        mensaje: "error al eliminar",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

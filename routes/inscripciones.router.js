const { Router } = require("express");
const router = Router();
const { inscripcionpost } = require("../controllers/inscripcion.controller");

router.get("/", (req, res) => {
  res.render("inscripciones");
});

router.post("/", inscripcionpost);

module.exports = router;

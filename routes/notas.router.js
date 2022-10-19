const { Router } = require("express");
const { peticion } = require("../controllers/notas.controller");
const router = Router();

router.get("/", (req, res) => {
  res.render("notas");
});

router.post("/", peticion);

module.exports = router;

const { Router } = require("express");
const router = Router();
const { crearnota } = require("../controllers/subirnotas.controller");

router.get("/", (req, res) => {
  res.render("subirnotas");
});

router.post("/", crearnota);

module.exports = router;

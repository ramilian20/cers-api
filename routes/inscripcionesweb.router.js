const { Router } = require("express");
const router = Router();
const {
  inscripcionwebpost,
} = require("../controllers/inscripcionesweb.controller");

router.get("/", (req, res) => {
  res.render("inscripcionesweb");
});

router.post("/", inscripcionwebpost);

module.exports = router;

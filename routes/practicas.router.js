const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("practicas");
});

module.exports = router;

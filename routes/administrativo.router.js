const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("administrativo");
});

module.exports = router;

const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("politicassst");
});

module.exports = router;

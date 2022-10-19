const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("proposito");
});

module.exports = router;

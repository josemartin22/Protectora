const router = require("express").Router();

router.post("/register", (req, res) => {
  res.send("token");
});

router.post("/login", (req, res) => {
  res.send("token");
});

module.exports = router;

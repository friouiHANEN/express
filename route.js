const dbUsers = require("./db");
const express = require("express");
const router = express.Router();

router.get("/getall", (req, res) => {
  res.send({ msg: "successfully geted", response: dbUsers });
});
router.get("/students", (req, res) => {
  res.send("hello");
});
router.post("/adduser", (req, res) => {
  res.send(dbUsers.concat(req.body));
});

module.exports = router;

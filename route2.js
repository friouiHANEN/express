const products = require("./db2");
const express = require("express");
const productrouter = express.Router();

productrouter.get("/getall", (req, res) => {
  res.send({ msg: "successfully geted", response: products });
});
module.exports = productrouter;

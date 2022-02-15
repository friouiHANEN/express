const express = require("express");
//initialisation
const app = express();
const router = require("./route");
const productrouter = require("./route2");
app.use(express.json());
app.use("/users", router);
app.use("/product", productrouter);

app.listen(4500, (err) => {
  err ? console.log(err) : console.log("server is running");
});

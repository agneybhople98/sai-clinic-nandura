const express = require("express");

const app = express();

app.listen(8000, () => {
  console.log("Successfully started server !");
});
app.route("/api/cats/:name").get((req, res) => {
  const requestedCatName = req.params["name"];
  res.send({ name: requestedCatName });
});

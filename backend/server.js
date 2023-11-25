const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const mongoString =
  "mongodb+srv://agneybhople70:Ezc8xFd5I1hlO1BY@cluster0.bagte4c.mongodb.net/?retryWrites=true&w=majority";

const port = 3000;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
const app = express();
app.use(cors());
app.use(express.json());

const routes = require("./routes/patient-routes");

app.use("/api", routes);

app.listen(3000, () => {
  console.log(`Server Started at ${port}`);
});

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const uri =
  "mongodb+srv://eronariodito:<db_password>@lab1id2333.rswu3.mongodb.net/?retryWrites=true&w=majority&appName=Lab1ID2333";

mongoose.connect(uri);

app.use(express.json());

const dataRouter = require("./routes/data");
app.use("/data", dataRouter);

app.listen(3000, () => console.log("server started"));

const express = require("express");

const clock = require("./routes/clock");

const app = express();

app.use("/api/v1/clock", clock);

module.exports = app;

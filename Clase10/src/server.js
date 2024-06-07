const express = require("express");
const kodersRouter = require("./routes/koders.router");
const authRouter = require("./routes/auth.router");
const mentorsRouter = require("./routes/mentors.router");
const generationsRouter = require("./routes/generations.router");
const cors = require("cors");
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.use("/koders", kodersRouter);
app.use("/auth", authRouter);
app.use("/mentors", mentorsRouter);
app.use("/generations", generationsRouter);
app.get("/", (request, response) => {
  response.json({
    message: "API koders",
  });
});

module.exports = app;

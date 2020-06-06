require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }))

// Template Engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: app,
  noCache: true
});

// Routers
const Router = require("./routes");

// Routes
app.use("/", Router);

//Server
app.listen(process.env.BACKEND_PORT, (error) => {
  if (!error) {
    console.log("🏁 Server started: on http://locahost:" + process.env.BACKEND_PORT + "/");
  } else {
    console.log("🚩 Server error: please restart!");
  }
});

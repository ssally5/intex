const express = require("express");
const path = require("path");

const app = express();

let bodyParser = require("body-parser");
let session = require("express-session");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"), { index: false }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {

  res.render("index", {
    message: "Hello from your Xenos starter project!"
  });
  
});

app.get("/", (req, res) => {

  res.render("index", {
    message: "Hello from your Xenos starter project!"
  });
  
});

app.get("/new", (req, res) => {

  res.render("new");
  
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
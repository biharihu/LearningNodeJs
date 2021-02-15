const path = require("path");
const express = require("express");

const app = express();

const publickDirectoryPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");
app.use(express.static(publickDirectoryPath));

app.get("/", (req, res) => {
  res.render("index");
});

//
app.get("/weather", (req, res) => {
  res.send({
    forcast: "It is snowing",
    location: "HSR Layout",
  });
});

// Start server
app.listen(5000, () => {
  console.log("Server is up on port 5000.");
});

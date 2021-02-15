const express = require("express");

console.log(__dirname);
console.log(__filename);

const app = express();

//
app.get("/", (req, res) => {
  res.send("<h1>Weather</h1>");
});

app.get("/help", (req, res) => {
  res.send({
    name: "Akash",
    age: 27,
  });
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});

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

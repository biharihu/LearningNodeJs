const fs = require("fs");
// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
// };

// const bookJson = JSON.stringify(book);

// fs.writeFileSync("1-json.json", bookJson);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();

const data = JSON.parse(dataJSON);

data.name = "Akash Singh";

const stData = JSON.stringify(data);

fs.writeFileSync("1-json.json", stData);

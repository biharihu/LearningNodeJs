const fs = require("fs");

fs.writeFileSync("notes.txt", "My name is Akash.");

fs.appendFileSync("notes.txt", "\nHere i am again");

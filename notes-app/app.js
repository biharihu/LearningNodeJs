const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command(
  "add",
  "Add a new note",
  {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  function (argv) {
    notes.addNote(argv.title, argv.body);
  }
);

// Create remove command
yargs.command(
  "remove",
  "Remove a note",
  {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  function (argv) {
    notes.removeNote(argv.title);
  }
);

// Create list command
yargs.command("list", "Listing your notes", function () {
  console.log("Listing out all notes!");
});

// Create read command
yargs.command("read", "Read a note", function () {
  console.log("Reading a note!");
});

yargs.parse();

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');
let argv = yargs.argv;
let command = process.argv[2]
console.log("command: ", command)
if (command === 'add') {
    let note = notes.addNotes(argv.title, argv.body);
    if (note) {
        console.log("note successfully created");
        notes.logNote(note);
    }
    else {
        console.log("the title of the note has  already been taken!")
    }
}
///////remove
else if (command === 'remove') {
    let noteRemoved = notes.removeNotes(argv.title);
    let message = noteRemoved ? 'Note successfully removed' : 'Note not found';
    console.log(message);
}
/////////read
else if (command === 'read') {
    var note = notes.readNotes(argv.title);
    if (note) {
        console.log("note found");
        notes.logNote(note);
    }
    else {
        console.log("note not found");
    }
}
////////listing
else if (command === 'list') {
    let allNotes=notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach(note => {
        notes.logNote(note);
    });
}
else {
    console.log("invalid command")
}
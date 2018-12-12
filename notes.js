 const fs = require('fs');

 fetchNotes = () => {
   try {
      let noteString =  fs.readFileSync('notes-data.json');
      return JSON.parse(noteString);
   }
   catch (e) {
      return [];
   }
};
/////////////// Add notes
let saveNotes = (notes) => {
   fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};
let addNotes = (title, body) => {
   let notes = fetchNotes();
   let note = {
      title,
      body
   };
   let duplicateNotes = notes.filter((note)=>note.title === title);
   if (duplicateNotes.length === 0) {
      notes.push(note);
      saveNotes(notes);
      return note;
   }
};
//////////Remove notes
let removeNotes = (title) => {
   //fetch notes
   let notes = fetchNotes();
   //filter
   let filteredNotes = notes.filter((note)=>
   {return note.title != title});
   //save new notes in notes array
   saveNotes(filteredNotes);
   console.log(filteredNotes);
   console.log(notes);
  return notes.length !== filteredNotes.length;
};
////////////Read notes
let readNotes = (title) => {
   let notes = fetchNotes();
   let filteredNotes = notes.filter((note)=>
   {
      return note.title === title;
   });
   return filteredNotes[0];
};
let logNote = (note)=>{
   console.log("----");
   console.log("Title:  "+ note.title + " Body: " + note.body );
};
///////////listing notes
let getAll = () => {
  return fetchNotes();
};

module.exports = { addNotes, removeNotes, readNotes, getAll ,logNote}

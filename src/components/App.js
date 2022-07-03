import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

// Start with App and giving the note attributes
// Go to notes.js in components and take the hard coded data and assign to the attributes
//refresh live and you can see in note component you can see 3 props being passed now available to see in Note.js
// now Note.js is ready to receive properties.  Add them
// add export defaultnotes to notes.js and import notes from "../notes"
// now we can log notes in app.js with console.log(notes);
// go into App.js and make a map function
//make a function that takes a noteItem and returns a note component
//pass that function into the map
// simplify function from
/*
function createNotes(noteItem){
  return <Note
  key={noteItem.key}
  title={noteItem.title}
  content={noteItem.content}
  />
}
*/

//replace where you called the function in the map with the whole function
//change into anonymous function by removing name
//then turn into arrow function by removing function word and adding fat arrow
//since only one thing is being returned you can remove return word and curly braces that enclose it
console.log(notes);

function App() {
  return (
    <div>
      <Header />
      {notes.map((noteItem) => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Footer />
    </div>
  ); // this closing paren belongs to the return
}

export default App;

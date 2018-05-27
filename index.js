const fs = require('fs');
const os = require('os');
const myNodesApp = require('./notes');
const yargs=require('yargs');
const myArrayModule = require('./arrayDemo');
const lodash=require('lodash');

console.log('starging node js app.');
const argv=yargs.argv;

console.log(argv);

let command = process.argv[2];
/*
console.log('MyArrayModule ', myArrayModule);
myArrayModule.addItem(10);
myArrayModule.listItems();

myArrayModule.removeItem();
myArrayModule.removeItem();
myArrayModule.removeItem();
console.log('After removing the item from the array ');
myArrayModule.listItems();
*/
//console.log('Command ', command);
//console.log('Yargs', argv);
//console.log('Command', process.argv);
/*fs.appendFile("hello.txt", "Hello world from Nodejs application", (error) =>{
    if (error){
      console.log(error);
      console.log("There was an error while writing to the file");
  }  
});


fs.readFile('hello.txt','utf8', (error, data)=>{
    if(error){
       console.log(error);
    }
  //console.log(data);
})

//console.log(os.userInfo().username);

console.log("Printing this statement to make sure that this is a non-blocking ..");
console.log('Module info:  ',myNodesApp);
*/
if (command === 'add'){
  console.log('Adding a new note');
  let note={}
  note.title = argv.title;
  note.body = argv.body;
  myNodesApp.addNote(note);
} else if (command === 'list'){
  console.log('list all the notes');
  let notesArray = myNodesApp.listNotes();
  lodash.forEach(notesArray, (note)=>{
    console.log('Title:'+ note.title);
    console.log('body:'+note.body);
  })
} else if (command === 'read'){
  console.log('Reading note');
} else if (command === 'remove'){
  console.log('Removing note');
} else {
 // console.log('Command not recognized');
}
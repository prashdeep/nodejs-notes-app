console.log('Inside the notes application');
const fs=require('fs');

module.exports.name='MyNotes app';


module.exports.addNote=function(note){
    console.log('Adding note');
    
    let myNotes = fs.readFileSync('notes.txt', 'utf8');
    myNotes = JSON.parse(myNotes);
    console.log(myNotes);  
    console.log('printing the myNotes');
   
    myNotes.push(note);


    fs.writeFile("notes.txt", JSON.stringify(myNotes), (error) =>{
        if (error){
          console.log(error);
          console.log("There was an error while writing to the file");
      } 
    });
    return "Note added";
}

module.exports.listNotes=function(){
    let myNotes = fs.readFileSync('notes.txt', 'utf8');
    myNotes = JSON.parse(myNotes);
    return myNotes;
}

module.exports.deleteNotes=function(){
    console.log("delete notes");
}

module.exports.updateNotes=function(){
    console.log("update notes");
}


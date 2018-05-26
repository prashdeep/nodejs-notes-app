console.log('Inside the notes application');

module.exports.name='MyNotes app';
module.exports.addNote=function(){
    console.log('Adding note');
    return "Note added";
}

module.exports.listNotes=function(){
    console.log("list notes");
}

module.exports.deleteNotes=function(){
    console.log("delete notes");
}

module.exports.updateNotes=function(){
    console.log("update notes");
}


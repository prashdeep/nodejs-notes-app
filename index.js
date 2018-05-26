const fs = require('fs');
const os = require('os');
const myNodesApp = require('./notes')

console.log('starging node js app.');

/*fs.appendFile("hello.txt", "Hello world from Nodejs application", (error) =>{
    if (error){
      console.log(error);
      console.log("There was an error while writing to the file");
  }  
});
*/

fs.readFile('hello.txt','utf8', (error, data)=>{
    if(error){
       console.log(error);
    }
  //console.log(data);
})

//console.log(os.userInfo().username);

console.log("Printing this statement to make sure that this is a non-blocking ..");
console.log('Module info:  ',myNodesApp);
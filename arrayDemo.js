console.log('Inside the arrayDemo module');

const myArray=[21,4,5,6,7];

let addItem=function(i){
    myArray.push(i);
}

let listItems=function(){
    for(var i = 0; i < myArray.length; i ++ ){
       console.log("The item is "+ myArray[i]);
    }
}



let removeItem = function(){
    myArray.pop();
}

module.exports={
    myArray,
    addItem,
    listItems,
    removeItem
}
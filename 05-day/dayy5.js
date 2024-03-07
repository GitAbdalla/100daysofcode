/* some built in functions in array */

let colors = [ "blue" , "Green" , "yellow" , "Red" , "black" ];

colors.push("grey");  // add item

colors.shift();  // delete first index

colors.pop();   // delete last index


colors.splice(2,2);  // delete index 2 and 3 


if(colors.indexOf("Green") === -1){
    console.log("item not exist !");         // check if item exists
}else{
    console.log("item exists");
}



console.log(colors);

// global scope
var data= 5;

//block scope
{
    console.log(data); // can be called in block scope
    var data=6; // can be redeclared in block scope
}
//function scope
function func_name(){
    console.log(data); // can be called in function scope
    var data=7; // will let to undefined
}
func_name();
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
//*********************************//
const id =12;

{
    console.log(id); // can be called in block scope
}
function fuunc_name(){
    console.log(id); // can be called in function scope
}
fuunc_name();

//*********************************//

{
    const x=13; // const in block scope
}

    console.log(x); // cant be called in global scope -> error

function x_name(){
    console.log(x); // cant be called in function scope -> error
}
x_name();
//*********************************//
function y_name(){
    const y=14;
    console.log(y);    // only call in function scope
}
y_name();

console.log(y); // cant be called in global scope -> error

{
    console.log(y); // cany be called in block scope -> error
}


/* functions : ways of writing function */

 const add=function(num1,num2){   // doesn`t  make hoisting when add(2,4); is above it
    console.log(num1+num2);
}
const add=(num1,num2) => {   // doesn`t  make hoisting when add(2,4); is above it
    console.log(num1+num2);
}

const add=(num1,num2) => console.log(num1+num2); {   // doesn`t  make hoisting when add(2,4); is above it
    
}

const add = num1 => console.log (num1+ 10); {   // doesn`t  make hoisting when add(2); is above it
    
}
function add(num1,num2){
    let result = num1+num2;       // make hoisting when add(2,4); is above it
    console.log( result);
}

add(2,4);
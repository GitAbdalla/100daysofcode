// template literals 

// tag function

function format(string, ...values){
    return `${string[0]} ${values[0].toLocaleString()} ${string[1]}`;
}
let num = 988767334;

console.log( format `the number is${num}.`);


for(let i=0; i<5; i++){
    for(let j=0; j<3; j++){
        console.log(`(${i}+${j}) = ${i+j}`); // ${} placeholder
    }
}


let firstName = "Ahmed";
let accNumber ="654532";
let expiryDate ="2024-10-4";

let message = 
` Dear: ${firstName},
We hope this message find you well.
we want to inform you that:
your account "${accNumber}"
will be expire on ${expiryDate}`;

console.log(message);
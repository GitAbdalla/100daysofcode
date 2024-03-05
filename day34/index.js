const myValidator = require("validator")
let userEmail="abdalla472002@gmail.com"
if(myValidator.isEmail(userEmail)){
    console.log("Valid Email")
}else{
    console.log("Not Valid Email")
}
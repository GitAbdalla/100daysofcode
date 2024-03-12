import express from 'express'
import bcrypt from 'bcrypt'

const app = express()
const port =3002
 const users =[]

 app.use(express.json())


 app.post('/register' , (req,res) => {
    try {
        const { email,password } = req.body
        //find user
        const findUser = users.find((data) => email == data.email)
        if (findUser){
            res.status(400).send("wrong email or password !")
        }
        // hash password
        
        
    } catch (error) {
        res.status(500).send((message: error.message ))
    }
 })

 app.listen(port , ()=>{
    console.log("server is running on port 3002")
 })
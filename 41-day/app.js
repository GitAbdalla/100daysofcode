import express from 'express'
import bcrypt from 'bcrypt'

const app = express()
const port =3002
 const users =[]

 app.use(express.json())


 app.post('/register' , async (req,res) => {
    try {
        const { email,password } = req.body
        //find user
        const findUser = users.find((data) => email == data.email)
        if (findUser){
            res.status(400).send("wrong email or password !")
        }
        // hash password
        const hashPssword = await bcrypt.hash(password,10)
        users.push({email,password: hashPssword})
        console.log(users)
        res.status(201).send("registered successfully")
        
    } catch (error) {
        res.status(500).send({message: error.message })
    }
 })

 app.post("/login", async (req ,res) => {
    try {
        const { email,password } = req.body
        //find user
        const findUser = users.find((data) => email == data.email)
        if (!findUser){
            res.status(400).send("wrong email or password !")
        }
        const passwordMatch = await bcrypt.compare(password , findUser.password)
        if (passwordMatch){
            res.status(200).send("Logged in successfully")
        }else{
            res.status(400).send("wrong email or password !")
        }
    } catch (error) {
        res.status(500).send({message: error.message })
    }
 })

 app.listen(port , ()=>{
    console.log("server is running on port 3002")
 })
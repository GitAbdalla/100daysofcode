const express = require("express")
const router = express.Router()
const Task= require("../models/schema")

router.get("/tasks", async(request,response) =>{
    try {
        const tasks = await Task.find()
        response.status(200).json(tasks)
    } catch (err) {
        response.status(500).json({error: err.message})
    }
})
router.post("/tasks", async(request,response) =>{
    try {
        const task = new Task(request.body)
        await task.save()
        response.status(200).json({message:"Added successfuly",task})
    } catch (err) {
        response.status(400).json({error:err.message})
    }
})
router.put("/tasks/:id",async (request,response) =>{
    try {
        const{id} = request.params
        const dataToUpdte = request.body
        const task = await Task.findByIdAndUpdate(id,dataToUpdte,{new:true})
        response.status(200).json({message:"Updated Successfuly!",task})
    } catch (err) {
        response.status(400).json({error: err.message})
    }
})
router.delete("/tasks/:id",async(request,response) =>{
    try {
        const {id} = request.params
        await Task.findByIdAndUpdate(id)
        response.status(200).json({message:"Deleted succesfully"})
    } catch (err) {
        response.status(400).json({error:err.message})
    }
})

module.exports=router
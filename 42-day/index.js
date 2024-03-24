const express = require('express')
const mongoose = require('mongoose')
const tasksRoutes = require('./routes/tasks')

const app = express()
const port = 3001

// Middleware
app.use(express.json())

// DB Connection
mongoose.connect('mongodb://localhost:27017/task/todo')

const db = mongoose.connection;

db.on('error', () => {
    console.log("Connection Error!")
})

db.once('open', () => {
    console.log('Connected to DB!')
})

app.use(tasksRoutes)

app.listen(port, () => {
    console.log("Server started on port 3000")
})

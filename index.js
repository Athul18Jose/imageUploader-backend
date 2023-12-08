require('dotenv').config()

const express = require('express')
const cors = require('cors')
const router = require('./Router/routes')
const db = require('./db/connection')

//backend server
const server = express()

server.use(cors())
server.use(express.json())
server.use(router)
server.use('/uploads',express.static('./uploads'))

//defining ports
const PORT = 4000 || process.env.PORT

server.listen((PORT),(req,res)=>{
    console.log(`Server listening on Port ${PORT}...!`);
})

server.get('/',(req,res)=>{
    return res.send("Get method")
})

server.post('/',(req,res)=>{
   return res.send("post method")
})
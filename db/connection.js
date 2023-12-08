const mongoose = require('mongoose')

const connectionString = process.env.database

mongoose.connect(connectionString).then(()=>{
    console.log("db connection established...!");
}).catch((err)=>{
    console.log("db connection failed "+err);
})
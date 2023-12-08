const mongoose = require('mongoose')

//schema
const imageSchema = new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    userId: {
        type: String,
        required: true
    }
})

const images = mongoose.model("images",imageSchema)
module.exports=images
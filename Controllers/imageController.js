const images = require('../Models/imageModel')

//add image
exports.addImage = async(req,res)=>{
    console.log("Inside the Add image");
    //userId
    const userId = req.payload
    console.log(userId);

    const image = req.file.filename

    const {title, description} = req.body
    console.log(title, description,image);
    try{
        const newImage = new images({title, description, image,userId})
        await newImage.save()
        return res.status(200).json(newImage)
        


    }catch(err){
        return res.status(401).json("Request Failed "+err)
    }
}

//get user project
exports.userImages = async(req,res)=>{
    const userId = req.payload
    try{
        const userImages = await images.find({userId})
        return res.status(200).json(userImages)
    }
    catch(err){
        return res.status(401).json("Request Failed "+err)
    }
}

//get all projects
exports.allImages = async(req,res)=>{
    try{
        const allImages = await images.find()
        return res.status(200).json(allImages)
    }
    catch(err){
        return res.status(401).json("Request Failed "+err)
        }
}
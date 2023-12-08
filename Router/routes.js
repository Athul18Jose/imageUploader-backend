const express = require('express')

//router object
const router = new express.Router()

//import jwtMiddleware
const jwtMiddleware =require('../Middleware/jwtMiddleware')

const userController = require('../Controllers/userController')
const imageController = require('../Controllers/imageController')
const multerConfig = require('../Middleware/multerMiddleware')

//register
router.post('/user/register',userController.register)

//login
router.post('/user/login',userController.login)

//add images
router.post('/image/add',jwtMiddleware,multerConfig.single("image"),imageController.addImage)

//get user images
router.get("/user/images",imageController.userImages)

//get all images
router.get("/images",imageController.allImages)

module.exports = router
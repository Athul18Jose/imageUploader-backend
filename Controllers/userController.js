const users = require('../Models/userModel')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    console.log('Inside register');

    const { userName, email, password } = req.body;
    console.log(userName, email, password);
    try {
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            return res.status(400).json("Email already exists.Please Login..!")
        } else {
            const newUser = new users({
                userName: userName,
                email: email,
                password: password
            })

            await newUser.save()

            return res.status(200).json(newUser)
        }
    } catch (err) {
        return res.status(500).json(`Register Api failed ${err}`)
    }

}

exports.login = async (req, res) => {
    console.log('inside login');
    const { email, password } = req.body;
    console.log(email, password);
    try {
        const existingUser = await users.findOne({ email, password });
        if (existingUser) {
            const token = jwt.sign({userId:existingUser._id},"superkey2023")
            return res.status(200).json({existingUser,token})
        } 
        else {
            return res.status(401).json("Invalid Email or Password");
        }
    }
    catch(err){
        return res.status(500).json(`Login api failed ${err}`);
    }
}
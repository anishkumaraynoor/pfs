





const users = require('../models/userModel')
const jwt = require('jsonwebtoken')

//register
exports.register = async(req, res)=>{
    console.log("inside Register API")
    const {uname, email, password} = req.body
    console.log(uname, email, password);
    try {
        const existingUser = await users.findOne({email})
        console.log(existingUser);
        if(existingUser){
            res.status(406).json("Account already exists... please login")
        }else{
            const newUser = new users({
                uname,email,password,profile:"",github:"",linkedin:""
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.login = async (req, res)=>{
    console.log("Inside login API");
    const {email, password} = req.body
    console.log(email, password);
    try {
        const existingUser = await users.findOne({email, password})
        console.log(existingUser);
        if(existingUser){
            const token = jwt.sign({userId:existingUser._id},process.env.JWT_SECRET_KEY)
            res.status(200).json({existingUser,token})
        }else{
            res.status(404).json("Username / Password incorrect")
        }
    } catch (err) {
        console.log(err);
    }
}
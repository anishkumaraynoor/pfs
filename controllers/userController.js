





const users = require('../models/userModel')
exports.register = (req, res)=>{
    console.log("inside Register API")
    const {uname, email, password} = req.body
    console.log(uname, email, password);
    res.status(200).send(uname+email+password)
}
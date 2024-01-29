






require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/router')
require('./db/connection')
const pfServer = express()
pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)
const PORT = 3000
pfServer.listen(PORT, ()=>{
    console.log(`Server started Port:${PORT}`);
})

pfServer.get('/',(req,res)=>{
    res.send("hello world")
})

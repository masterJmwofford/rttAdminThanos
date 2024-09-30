require('dotenv').config()
const express = require('express')
const app =express()
const PORT = process.env.PORT || 3000
const connectToDb = require('./config/connectToDb')
connectToDb()







app.listen(PORT,()=>{
    console.log(`ServerConnected: ${PORT}`)
})


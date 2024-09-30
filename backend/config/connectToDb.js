// Connect to Database --> Export server
require('dotenv').config()
const mongoose = require('mongoose')

const connectToDb = async() => {
    await mongoose.connect(process.env.DB_URL)
    console.log("Database Connected")
}

module.exports = connectToDb
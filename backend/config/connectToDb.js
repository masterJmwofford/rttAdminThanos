// Connect to Database --> Export server

const mongoose = require('mongoose')

const connectToDb = async() => {
    await mongoose.connect()
    console.log("Database Connected")
}

module.exports = connectToDb
// Establish Data Structure (Schema) for a particular model 
const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    title: String,
    body: String
})
// This is where schema and properties are created

const Note = mongoose.model("Note",noteSchema)

module.exports = Note;
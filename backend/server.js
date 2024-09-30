require('dotenv').config()
const express = require('express')
const app =express()
const PORT = process.env.PORT || 3000
const connectToDb = require('./config/connectToDb')
connectToDb()
const notesController = require('./controllers/notesController')

app.use(express.json())
// -------------------------------------------------[Routes  (HTTP)=> GET POST PUT PATCH DELETE]
app.get('/notes',notesController.fetchNotes)
// -->Retrieve all note in DB
app.get('/notes/:id',notesController.fetchNote)
// -->Retrieve Specific note in DB
app.post('/notes',notesController.createNote)
// --> Add a Note to DB
app.put('/notes/:id',notesController.updateNote)
// --> Edit a Existing Note in DB
app.delete('/notes/:id',notesController.deleteNote)
// --> Delete a Existing Note in DB

app.listen(PORT,()=>{
    console.log(`ServerConnected: ${PORT}`)
})


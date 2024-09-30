// Controller Controlling? Functionality of Data based of HTTP methods and REST routing
const Note = require("../models/note");

// CRUD ---> find() findByID() findByIdAndUpdate() findByIdAndDelete()

const fetchNotes = async (req, res) => {
  const notes = await Note.find();
  res.json({ notes: notes });
};
// -------------------------[READ]

const fetchNote = async (req, res) => {
  const noteId = req.params.id;
  const note = await Note.findById(noteId);
  res.json({ note: note });
};
// -------------------------[READ for :id]
const createNote = async (req, res) => {
  const { title, body } = req.body;
  const note = await Note.create({
    title: title,
    body: body,
  });
  res.json({ note: note });
};
// -------------------------[CREATE]
const updateNote = async (req, res) => {
  const noteId = req.params.id;
  const { title, body } = req.body;
  const note = await Note.findByIdAndUpdate(noteId, {
    title: title,
    body: body,
  });

  const updatedNote = Note.findById(noteId);

  res.json({ note: updateNote });
};
// -------------------------[UPDATE]
const deleteNote = async (req, res) => {
  const noteId = req.params.id 
  await Note.deleteOne({
    _id: noteId,
  })
  res.json({success: "Record is OuuuutttaaHeehhhhh!"})
};
// -------------------------[DELETE]

module.exports = {
  fetchNotes,
  fetchNote,
  createNote,
  updateNote,
  deleteNote,
};

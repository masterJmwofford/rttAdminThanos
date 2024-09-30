import { useEffect, useState } from "react";
import axios from "axios";
// axios > fetch()
import "./App.css";
import Index from "./components/Index";

function App() {
  const [notes, setNotes] = useState(null);
  // Goal: Make request to Backend (localhost:3000/notes) ---> GET notes --> save Notes to State

  const [createForm, setCreateForm] = useState({
    title: "",
    body: "",
  });
  // ---> CreateForm allows input to be leveraged against state{...notes}

  const [updateForm, setUpdateForm] = useState({
    _id: null,
    title: "",
    body: "",
  });

  const fetchNotes = async () => {
    // 1.Make Request to DB
    const response = await axios.get("http://localhost:3000/notes");
    const info = await response.data;
    await setNotes(info.notes);
    console.log("Noted Fetched from DB");
    console.log("State Available: NOTES[{}]");
  };

  const createNote = async (e) => {
    e.preventDefault();
    // stops default behavior of submit button
    const res = await axios.post("http://localhost:3000/notes",createForm);
    // res === {data:}--> {notes:} =>[]notes
    setNotes(() => [res.data.note, ...notes]);
    // once state is updated, we no longer need it in inputs so we clear vv
    setCreateForm(() => ({
      title: "",
      body: "",
    }));
  };
  // because of input...use event.. use preventDefult()

  const updateCreateFormField = (e) => {
    const { name, value } = e.target;
    // take vals off inout
    console.log({ name, value });

    setCreateForm(() => ({
      ...createForm,
      [name]: value,
    }));
  };

  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <>
      <div className="formMajor">
        <form onSubmit={createNote}>
          <input
            type="text"
            className="newFm"
            name="title"
            value={createForm.title}
            placeholder="Enter Title"
            onChange={updateCreateFormField}
          />
          <input
            type="text"
            className="newFm"
            name="body"
            value={createForm.body}
            placeholder="Enter Body"
            onChange={updateCreateFormField}
          />

          <button type="submit"> Note(+)</button>
        </form>
      {/*
       ----------------------------------NEW 
        <hr />
        <p>Edit Form</p>
        <hr />
        <p>Update Form</p>
        {/* Update form  */}
      </div>

      {notes ? <Index info={notes} /> : <p>No Notes Available</p>}
    </>
  );
}

export default App;

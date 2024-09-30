import { useEffect, useState } from 'react'
import axios from 'axios'
// axios > fetch() 
import './App.css'

function App() {
  const [notes,setNotes] = useState([])
  // Goal: Make request to Backend (localhost:3000/notes) ---> GET notes --> save Notes to State

  const fetchNotes = async() => {
    // 1.Make Request to DB
    const response = await axios.get("http://localhost:3000/notes")
    const info = await response.data
    await setNotes(info.notes)
    console.log("Noted Fetched from DB")
    console.log("State Available: NOTES[{}]")
  }

  useEffect(()=>{
    fetchNotes()
  },[])
  return (
    <>
     
    </>
  )
}

export default App

import noteService from '../services/notes'
import { useState } from 'react'

const NoteForm = ({ notes, setNotes, setErrorMessage, noteFormRef }) => {
  const [newNote, setNewNote] = useState('')

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    }

    noteFormRef.current.toggleVisibility()
    
    noteService
      .create(noteObject)
        .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
        .catch ((exception) => {
          setErrorMessage(`Oops, something went wrong : ${exception}`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
  }

  return (
    <div>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default NoteForm;

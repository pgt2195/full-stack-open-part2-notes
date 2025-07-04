const NoteForm = ({ user, handleNoteChange, addNote, newNote}) => (
    <div>
        <p>{user.name} logged in</p>
        <form onSubmit={addNote}>
            <input value={newNote} onChange={handleNoteChange} />
            <button type="submit">save</button>
        </form>  
    </div>
  )

export default NoteForm
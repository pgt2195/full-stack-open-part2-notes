const logout = (setUser) => {
    window.localStorage.removeItem('loggedNoteappUser')
    setUser(null)
}

const NoteForm = ({ user, setUser, handleNoteChange, addNote, newNote}) => (
    <div>
        <p>{user.name} is logged in <button onClick={() => logout(setUser)}>logout</button></p>
        <form onSubmit={addNote}>
            <input value={newNote} onChange={handleNoteChange} />
            <button type="submit">save</button>
        </form>  
    </div>
  )

export default NoteForm
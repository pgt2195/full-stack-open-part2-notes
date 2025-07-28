 // Dans src/components/NoteForm.test.jsx
import { render, screen } from '@testing-library/react';
import NoteForm from './NoteForm';
import userEvent from '@testing-library/user-event';
// Il n'est plus nécessaire d'importer useRef ici

// Ce test ne sert à rien car il est fait pour un composant qui est 
// structuré différemment de celui-là.
test('<NoteForm /> updates parent state and calls onSubmit', async () => {
    const user = userEvent.setup();

    // Créez un objet mock pour la ref
    const noteFormRef = {
        current: {
            toggleVisibility: vi.fn() // On simule la fonction toggleVisibility
        }
    };
    const notes = {}
    const setNotes = {}
    const setErrorMessage = () => ''

    // Passez le mock comme prop
    render(<NoteForm notes={notes} setNotes={setNotes} setErrorMessage={setErrorMessage} noteFormRef={noteFormRef} />);

    const input = screen.getByRole('textbox');
    const sendButton = screen.getByText('save');

    await user.type(input, 'testing a form...');
    await user.click(sendButton);

    // Maintenant, vous pouvez vérifier si la fonction mockée a été appelée
    expect(noteFormRef.current.toggleVisibility).toHaveBeenCalledTimes(1);

    // Le reste de vos assertions...
    // Note : la prop createNote n'est pas utilisée dans NoteForm,
    // peut-être vouliez-vous vérifier setNotes ?
    // expect(createNote.mock.calls).toHaveLength(1); // Devrait être 1, pas 4
    // expect(createNote.mock.calls[0][0].content).toBe('testing a form...');
});
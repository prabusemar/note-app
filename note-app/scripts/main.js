document.addEventListener('DOMContentLoaded', () => {
    const notesList = document.querySelector('.notes-list');

    // Memuat data dummy
    window.notesData.forEach(data => {
        const noteItem = document.createElement('note-item');
        noteItem.noteData = data;
        if (data.archived) {
            noteItem.setAttribute('archived', '');
        }
        notesList.appendChild(noteItem);
    });

    // Menangani penambahan catatan baru
    const noteForm = document.getElementById('note-form');
    noteForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!noteForm.checkValidity()) {
            event.stopPropagation();
            noteForm.classList.add('was-validated');
            return;
        }

        const title = event.target.title.value;
        const body = event.target.body.value;

        const newNote = { title, body, archived: false };
        const noteItem = document.createElement('note-item');
        noteItem.noteData = newNote;
        notesList.appendChild(noteItem);

        noteForm.reset();
        noteForm.classList.remove('was-validated');
    });
});

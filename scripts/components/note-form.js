class NoteForm extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <form id="note-form" class="needs-validation" novalidate>
                <div class="form-group">
                    <label for="title">Judul:</label>
                    <input type="text" class="form-control" id="title" name="title" required>
                    <div class="invalid-feedback">
                        Judul tidak boleh kosong.
                    </div>
                </div>
                <div class="form-group">
                    <label for="body">Isi:</label>
                    <textarea class="form-control" id="body" name="body" rows="3" required></textarea>
                    <div class="invalid-feedback">
                        Isi catatan tidak boleh kosong.
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Tambah Catatan</button>
            </form>
        `;

        const form = this.querySelector('#note-form');
        const inputs = form.querySelectorAll('input, textarea');

        // Real-time validation
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                if (input.checkValidity()) {
                    input.classList.remove('is-invalid');
                    input.classList.add('is-valid');
                } else {
                    input.classList.remove('is-valid');
                    input.classList.add('is-invalid');
                }
            });
        });

        form.addEventListener('submit', (event) => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                form.classList.remove('was-validated');
            }
            form.classList.add('was-validated');
        });
    }
}

customElements.define('note-form', NoteForm);

class NoteItem extends HTMLElement {
    static get observedAttributes() {
        return ['archived'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    set noteData(data) {
        this._data = data;
        this.render();
    }

    get noteData() {
        return this._data;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'archived') {
            this.render();
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    background-color: ${this.hasAttribute('archived') ? '#f0f0f0' : '#ffff88'};
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    padding: 1rem;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    transition: transform 0.2s;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    margin: 1rem;
                    box-sizing: border-box;
                }
                .card:hover {
                    transform: translateY(-5px);
                }
                .card-title {
                    font-size: 1.25rem;
                    margin-bottom: 0.5rem;
                    color: #333;
                }
                .card-text {
                    font-size: 1rem;
                    color: #666;
                }
            </style>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${this._data.title}</h5>
                    <p class="card-text">${this._data.body}</p>
                </div>
            </div>
        `;
    }
}

customElements.define('note-item', NoteItem);

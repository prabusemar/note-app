class AppBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <h1><i class="fas fa-sticky-note"></i> Prabusemar's Note</h1>
            </header>
        `;
    }
}

customElements.define('app-bar', AppBar);

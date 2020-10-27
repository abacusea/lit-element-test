import { LitElement, html } from 'https://unpkg.com/lit-element/lit-element.js?module';
import '../../components/login-cover'


export class CorporateLogin extends LitElement {

    render() {
        return html`<login-cover></login-cover>`
    }

    static get properties() {
        return {
            eg: {
                type: String,
            },
        };
    }
    constructor() {
        super();
    }
}

customElements.define('corporate-login', CorporateLogin);
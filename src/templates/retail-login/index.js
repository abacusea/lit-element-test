import { LitElement, html } from 'https://unpkg.com/lit-element/lit-element.js?module';
import { router } from 'lit-element-router';
import '../../components/header/'
import '../../components/login-cover'
import '../../components/footer/'


export class RetailLogin extends LitElement {

    render() {
        return html`<header-element></header-element>
        <login-cover></login-cover>
        <footer-element></footer-element>`
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

customElements.define('retail-login', RetailLogin);
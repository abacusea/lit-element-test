import { LitElement, html } from 'https://unpkg.com/lit-element/lit-element.js?module';
import { router } from 'lit-element-router';
import './src/templates/corporate-login/'
import './src/templates/retail-login/'
import './src/templates/main-outlet/'




export class SibApp extends router(LitElement) {
    static get properties() {
        return {
            route: { type: String },
            params: { type: Object },
            query: { type: Object }
        }
    }

    static get routes() {
        return [
            {
                name: 'retail',
                pattern: '/dev/',
                data: { title: 'SIB Retail | Home' }
            },
            {
                name: 'corporate',
                pattern: '/dev/corporate'
            },
            {
                name: "not-found",
                pattern: "*",
            }
        ]
    }

    constructor() {
        super();
        this.route = '';
        this.params = {};
        this.query = {};
    }

    router(route, params, query, data) {
        this.route = route;
        this.params = params;
        this.query = query;
        console.log(route, params, query, data);
    }

    render() {
        return html`
        <app-main active-route=${this.route}>
          <retail-login route="retail"></retail-login>
          <corporate-login route="corporate"></corporate-login>
          <h1 route="not-found">Not Found</h1>
        </app-main>
        `;
    }
}

customElements.define('sib-app', SibApp);

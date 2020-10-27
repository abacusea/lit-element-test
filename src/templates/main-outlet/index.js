import { LitElement, html } from 'https://unpkg.com/lit-element/lit-element.js?module';
import { outlet } from 'lit-element-router';

class Main extends outlet(LitElement) {
  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define('app-main', Main)
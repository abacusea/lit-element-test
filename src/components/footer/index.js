import { LitElement, html } from 'https://unpkg.com/lit-element/lit-element.js?module';
import { footerStyle } from './style';

export class Footer extends LitElement {
    static styles = [footerStyle]

    render() {
        return html`<footer class="desktop-only">
            <div class="container">
              <p>Copyright © 2020 Sharjah Islamic Bank. All Rights Reserved.</p>
              <ul>
                <li>
                  <a href="javascript:;">
                    <oe-i18n-msg msgid="privacy_and_terms">Privacy &amp; Terms</oe-i18n-msg>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <oe-i18n-msg msgid="disclaimer">Disclaimer</oe-i18n-msg>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <oe-i18n-msg msgid="security_tips">Security Tips</oe-i18n-msg>
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        `;
    }

}

customElements.define('footer-element', Footer);

import { LitElement, html } from 'https://unpkg.com/lit-element/lit-element.js?module';
import { navigator } from 'lit-element-router';
import { loginCoverStyle } from './style';


export class LoginCover extends navigator(LitElement)  {
    static styles = [loginCoverStyle]
    

    render() {
        return html`<section class="cover-banner pt60 page-login desktop-only" style="background-image: url(./assets/images/bg-banner-login.jpg);">
        <div class="container summary-wrap container-wide">
          <div class="row">
            <div class="sib-col c8">

              <div class="card card-rows highlight">
                <div class="card-row">
                  <div class="form-wrap">
                    <h5 class="h5">Login</h5>
                    <form action="20.1.2-corporate-login.html" autocomplete="off" novalidate="">
                      <div class="form-group radio-field">
                        <div class="field-wrap form-check-inline">
                          <div class="form-check" @click=${this.linkRetail}>
                            <input type="radio" class="form-check-input" id="retail" name="fileCat">
                            <label class="form-check-label" for="retail">Retail</label>
                          </div>
                          <div class="form-check" @click=${this.linkCorporate}>
                            <input type="radio" class="form-check-input" id="corporate" name="fileCat" checked="">
                            <label class="form-check-label" for="corporate">Corporate</label>
                          </div>
                        </div>
                      </div>
                      <div class="row form-row">
                        <div class="col s12 mt30">
                          <div class="form-group input-field">
                            <input class="form-control validate" type="text" maxlength="30" id="corpotateId" required="">
                            <label for="corpotateId">Enter corporate ID</label>
                            <span class="field-icon"> <i class="icon icon-ico-corporate-id"></i> </span>
                            <span class="helper-text" data-error="Please enter corporate ID.">Please enter corporate
                              ID.</span>
                          </div>
                          <a href="#" class="primary-link flex-end mt10">Forgot corporate ID?</a>
                        </div>
                        <div class="col s12 mt20">
                          <div class="form-group input-field">
                            <input class="form-control validate input-invert" type="text" maxlength="30" id="enterUserId" required="">
                            <label for="enterUserId">Enter user ID</label>
                            <span class="field-icon"> <i class="icon icon-ico-user-placeholder-2"></i> </span>
                            <span class="helper-text" data-error="Please enter your user ID.">Please enter your user
                              ID.</span>
                          </div>
                          <a href="#" class="primary-link flex-end mt10">Forgot user ID?</a>
                        </div>
                      </div>
                      <div class="btn-wrap wide mt30">
                        <button class="btn btn-blue-gradient">Secure login</button>
                      </div>

                      <div class="link-btn-wrap mt20">
                        Not yet registered for Online Banking? <a href="#" class="btn-link" onclick="document.location.href = './20.2.1-corp-registration-new-corp-1.html'">Register now</a>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="card-row card-footer">
                  <h5 class="h5">New to SIB? </h5>
                  <ul class="listing">
                    <li>Phasellus eget sollicitudin dui</li>
                    <li>Our SIB Banking app</li>
                    <li>Lorem ipsum dolor amsit</li>
                  </ul>
                  <div class="btn-wrap wide">
                    <button class="btn-yellow">Open new account</button>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>`;
    }
    linkRetail(event) {
        event.preventDefault();
        this.navigate('/dev/');
    }
    linkCorporate(event) {
        event.preventDefault();
        this.navigate('/dev/corporate');
    }
   
}


customElements.define('login-cover', LoginCover)
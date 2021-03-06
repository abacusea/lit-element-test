﻿import { LitElement, html } from 'https://unpkg.com/lit-element/lit-element.js?module';
import { headerStyle } from './style';

export class Header extends LitElement {
    static styles = [headerStyle]

    render() {
        return html`<header class="no-bg">
            <div class="main-menu">
                <div class="container">
                    <div class="logo-wrapper">
                        <a href="#">
                            <img src="./assets/images/logo.svg" class="desktop" alt="logo">
                        </a>
                       
                    </div>
                    <div class="right-menu desktop-only">
                        <div class="switcher">
                            <a href="#">العربية</a>
                        </div>
                        <div class="secure">
                            <i class="icon icon-ico-secure"></i>
                            <span>Secure</span>
                        </div>
                    </div>
                    <div class="menu-toggler" id="menutoggler"><span></span></div>
                </div>
            </div>
            <div id="mobilemenu">
                <div class="wrapper">
                    <div class="menu-header">
                        <div class="profile-image-wrapper"><img src="./assets/images/user-photo.jpg" alt="SIB"></div>
                        <h5 class="user-name">Hakam Abdelqader</h5>
                        <a href="javascript:;" class="profile-settings-mobile">
                            <img src="./assets/images/profile-settings.svg" alt="SIB"><span>
                                <oe-i18n-msg msgid="profile_and_settings">Profile &amp; Settings</oe-i18n-msg>
                            </span>
                        </a>
                    </div>
                    <div class="menu-content" id="mobilemenucontent">
                        <ul>
                            <li class="has-link">
                                <a href="#/en/dashboard"><img src="./assets/images/ico-home.svg" alt="sib">Home</a>
                            </li>
                            <li class="has-submenu">
                                <a><img src="./assets/images/accounts.svg" alt="SIB">Accounts</a>
                                <div class="dropdown" style="max-height: 200px;">
                                    <ul>
                                        <li class="has-link">
                                            <a href="#/en/accounts">
                                                <span>View All</span>
                                            </a>
                                        </li>
                                        <li class="has-link">
                                            <a href="javascript:;">
                                                <span>Current</span>
                                            </a>
                                        </li>
                                        <li class="has-link">
                                            <a href="javascript:;">
                                                <span>Savings</span>
                                            </a>
                                        </li>
                                        <li class="has-link">
                                            <a href="javascript:;">
                                                <span>Credit Cards</span>
                                            </a>
                                        </li>
                                        <li class="has-link">
                                            <a href="javascript:;">
                                                <span>Finance</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="has-submenu">
                                <a><img src="./assets/images/payment.svg" alt="sib">Payments</a>
                                <div class="dropdown" style="max-height: 200px;">
                                    <ul>
                                        <li class="has-link">
                                            <a href="#/en/my-payments">
                                                <span>My Payments</span>
                                            </a>
                                        </li>
                                        <li class="has-link">
                                            <a href="#/en/my-bills">
                                                <span>My Bills</span>
                                            </a>
                                        </li>
                                        <li class="has-link">
                                            <a href="#/en/add-bill">
                                                <span>Add Bill</span>
                                            </a>
                                        </li>
                                        <li class="has-link">
                                            <a href="#/en/my-details">
                                                <span>My Details</span>
                                            </a>
                                        </li>
                                        <li class="has-link">
                                            <a href="#/en/pay-bill">
                                                <span>Pay Bills</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="has-submenu">
                                <a><img src="./assets/images/transfers.svg" alt="SIB">Transfers</a>
                                <div class="dropdown" style="max-height: 120px;">
                                    <ul>
                                        <li class="has-link">
                                            <a href="#/en/new-transfer">
                                                <span>New transfer</span>
                                            </a>
                                        </li>
                                        <li class="has-link">
                                            <a href="#/en/my-transfers">
                                                <span>My transfers</span>
                                            </a>
                                        </li>
                                        <li class="has-link">
                                            <a href="#/en/my-beneficiaries">
                                                <span>My beneficiaries</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="has-submenu">
                                <a><img src="./assets/images/more.svg" alt="sib">More</a>
                                <div class="dropdown" style="max-height: 200px;">
                                    <ul>
                                        <li class="has-link">
                                            <a href="#/en/accounts">
                                                <span>View All</span>
                                            </a>
                                        </li>
                                        <li class="has-link">
                                            <a href="javascript:;">
                                                <span>Current</span>
                                            </a>
                                        </li>
                                        <li class="has-link">
                                            <a href="javascript:;">
                                                <span>Savings</span>
                                            </a>
                                        </li>
                                        <li class="has-link">
                                            <a href="javascript:;">
                                                <span>Credit Cards</span>
                                            </a>
                                        </li>
                                        <li class="has-link">
                                            <a href="javascript:;">
                                                <span>Finance</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li id="sign-out-mobile">
                                <a href="javascript:;">
                                    <img src="./assets/images/sign-out-mobile.svg" alt="SIB">
                                    <oe-i18n-msg msgid="signout">Sign out</oe-i18n-msg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        `;
    }

}

customElements.define('header-element', Header);

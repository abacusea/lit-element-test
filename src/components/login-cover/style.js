import { css } from 'lit-element'

export const loginCoverStyle = css`
:host @font-face {
  font-family: 'icomoon';
  src:  url('../../assets/fonts/icomoon.eot?raprpl');
  src:  url('../../assets/fonts/icomoon.eot?raprpl#iefix') format('embedded-opentype'),
    url('.././assets/fonts/icomoon.ttf?raprpl') format('truetype'),
    url('../../assets/fonts/icomoon.woff?raprpl') format('woff'),
    url('../../assets/fonts/icomoon.svg?raprpl#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
:host .cover-banner {
    background-size: cover;
    background-position: left center;
    background-repeat: no-repeat;
    height: 827px;
}
:host .desktop-only {
    display: block;
}
:host .pt60 {
    padding-top: 60px;
}
:host section {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
}
:host * {
    -webkit-tap-highlight-color: transparent;
	box-sizing: border-box;
}
:host .btn {
    cursor: pointer;
    text-transform: capitalize;
    -webkit-box-shadow: none;
    box-shadow: none;
    font-family: Rubik,sans-serif;
}
:host .btn, .btn-large, .btn-small {
    text-decoration: none;
    color: #fff;
    background-color: #26a69a;
    text-align: center;
    letter-spacing: .5px;
    -webkit-transition: background-color .2s ease-out;
    transition: background-color .2s ease-out;
    cursor: pointer;
}
@media (max-width: 767px) {
	 :host .page-login .container.container-wide {
		 padding-left: 10px;
		 padding-right: 10px;
		 margin: 0 auto;
		 max-width: calc(100vw - 30px) !important;
	}
}
 @media (max-width: 560px) {
	 :host .page-login .container.container-wide {
		 margin-left: auto;
		 margin-right: auto;
		 max-width: 100% !important;
		 padding: 0;
	}
}
 @media (max-width: 767px) {
	 :host .page-login .container.container-wide .card {
		 border-radius: 4px;
	}
}
 @media (max-width: 560px) {
	 :host .page-login .container.container-wide .card {
		 border-radius: 0px;
	}
}
 :host .page-login .card-row + .card-row {
	 padding: 50px 35px 35px;
	 border-radius: 0 0 4px 4px;
}
 @media (max-width: 767px) {
	 :host .page-login .card-row + .card-row {
		 padding: 30px 15px 30px 15px;
	}
}
 :host .page-login .card-rows .card-header {
	 padding: 0;
}
 :host .page-login.retail-login .card-row + .card-row {
	 padding: 50px 35px 35px;
	 border-radius: 0 0 4px 4px;
}
 @media (max-width: 767px) {
	 :host .page-login.retail-login .card-row + .card-row {
		 padding: 30px 15px 30px 15px;
	}
}
 :host .page-login.retail-login .card-row .form-wrap .form-row.form-row {
	 margin-left: 0;
	 margin-right: 0;
}
 :host .page-login.login-second-step .card-rows .card-row {
	 padding: 40px 32px 35px;
}
 @media (max-width: 767px) {
	 :host .page-login.login-second-step .card-rows .card-row {
		 padding: 30px 15px 30px 15px;
	}
}
 :host .page-login.login-second-step-returning-customer .nested-card {
	 padding: 30px 25px;
}
 :host .page-login .card-rows {
	 width: 408px;
}
 @media (max-width: 991px) {
	 :host .page-login .card-rows {
		 margin: auto;
	}
}
 @media (max-width: 560px) {
	 :host .page-login .card-rows {
		 width: 100%;
	}
}
 :host .page-login .radio-field .form-check .form-check-label {
	 width: 164px;
}
 @media (max-width: 767px) {
	 :host .page-login .radio-field .form-check .form-check-label {
		 width: 100%;
	}
}
 :host .page-login + footer {
	 margin-top: 0;
}
 :host .page-login .link-btn-wrap, :host .page-login .link-btn-wrap a.btn-link {
	 font-size: 14px;
	 font-weight: normal;
	 font-stretch: normal;
	 font-style: normal;
	 line-height: normal;
	 letter-spacing: normal;
	 color: #0b1d81;
	 display: flex;
	 align-items: center;
	 height: auto;
}
 :host .page-login .link-btn-wrap a.btn-link, :host .page-login .link-btn-wrap a.btn-link a.btn-link {
	 color: #0061ff;
	 margin-left: 2px;
}
 @media (max-width: 767px) {
	 :host .page-login .link-btn-wrap {
		 flex-flow: column;
	}
}
 :host .page-login h5 + .form-group {
	 margin-top: 15px;
}
 :host .page-login .form-group + .nested-card {
	 margin-top: 18px;
}
 :host .page-login .splash-content .row.form-row {
	 margin: 0 -0.75rem;
}
 @media (max-width: 767px) {
	 :host .page-login .splash-content .btn-wrap {
		 margin: auto;
	}
}
:host .page-wrap, .summary-wrap {
    position: relative;
}
:host .container {
    width: 1200px;
    max-width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    margin: 0 auto;
    box-sizing: border-box;
	display: block;
}
:host .row {
    margin-right: auto;
    margin-bottom: 20px;
	margin-left: auto;
}
:host .sib-col.c8 {
    width: 66.66666%;
}
:host .card.highlight {
    -webkit-box-shadow: 0 8px 10px -5px rgba(156,165,219,.2), 0 6px 30px 5px rgba(156,165,219,.12), 0 16px 24px 2px rgba(156,165,219,.14);
    box-shadow: 0 8px 10px -5px rgba(156,165,219,.2), 0 6px 30px 5px rgba(156,165,219,.12), 0 16px 24px 2px rgba(156,165,219,.14);
}
:host .card {
	position: relative;
    margin: 0;
    border-radius: 4px;
    background-color: #fff;
	-webkit-transition: -webkit-box-shadow .25s;
    transition: -webkit-box-shadow .25s;
    transition: box-shadow .25s;
    transition: box-shadow .25s,-webkit-box-shadow .25s;
}
:host .card-rows .card-row {
    padding: 35px 35px 20px;
}
:host .card-rows h5.h5 {
    font-size: 24px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: normal;
    margin: -6px 0 0;
    opacity: 1;
	font-stretch: normal;
    font-style: normal;
    color: #0b1d81;
}
:host .form-group {
    position: relative;
    width: 100%;
}
:host .radio-field .form-check-inline {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
:host .radio-field .field-wrap {
    margin-top: 15px;
}
:host [type=radio]:checked, [type=radio]:not(:checked) {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
:host [type=checkbox], [type=radio] {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
}
:host input {
	font-family: Rubik,sans-serif;
	font-size: 100%;
    line-height: 1.15;
    margin: 0;
}
:host .radio-field .form-check .form-check-label {
    height: 40px;
    border-radius: 4px;
    border: 1px solid #c3c8ea;
    padding: 10px 15px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    display: block;
    font-size: 16px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 18px;
    letter-spacing: .29px;
    text-align: center;
    color: #0b1d81;
    cursor: pointer;
}
:host .radio-field .form-check .form-check-input:checked+.form-check-label {
    border-width: 2px;
    border-color: #0b1d81;
    font-weight: 400;
}
:host .page-login .radio-field .form-check .form-check-label {
    width: 164px;
}
:host .card-rows .card-row .form-wrap .form-row.form-row {
    margin-left: -.75rem;
    margin-right: -.75rem;
}
:host .card-rows .card-row .form-wrap .form-row {
    margin-bottom: 0;
}
:host .row .col.s12 {
    width: 100%;
}
:host .mt30 {
    margin-top: 30px!important;
}
:host .row .col {
    float: left;
    box-sizing: border-box;
    padding: 0 .75rem;
    min-height: 1px;
}
:host .col.s12 {
    margin-left: auto;
    left: auto;
    right: auto;
}
:host .row:after {
    content: "";
    display: table;
    clear: both;
}
:host .input-field {
    margin: 0;
    position: relative;
    border-bottom: 1px solid rgba(11,29,129,.48);
}
:host .form-group {
    position: relative;
    width: 100%;
    display: block;
}
:host .input-field input.form-control {
    border-bottom: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    box-shadow: none!important;
}
:host .input-field input.form-control {
    margin: 0;
    color: #0b1d81;
    font-weight: 500;
    position: relative;
    z-index: 1;
    height: 45px;
    line-height: 45px;
}
:host input:not([type]), input[type=date]:not(.browser-default), input[type=datetime-local]:not(.browser-default), input[type=datetime]:not(.browser-default), input[type=email]:not(.browser-default), input[type=number]:not(.browser-default), input[type=password]:not(.browser-default), input[type=search]:not(.browser-default), input[type=tel]:not(.browser-default), input[type=text]:not(.browser-default), input[type=time]:not(.browser-default), input[type=url]:not(.browser-default), textarea.materialize-textarea {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #9e9e9e;
    border-radius: 0;
    outline: 0;
    height: 3rem;
    width: 100%;
    font-size: 16px;
    margin: 0 0 8px;
    padding: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    -webkit-transition: border .3s,-webkit-box-shadow .3s;
    transition: border .3s,-webkit-box-shadow .3s;
    transition: box-shadow .3s,border .3s;
    transition: box-shadow .3s,border .3s,-webkit-box-shadow .3s;
}
:host button, hr, input {
    overflow: visible;
}
:host input:not([type]).validate+label, input[type=date]:not(.browser-default).validate+label, input[type=datetime-local]:not(.browser-default).validate+label, input[type=datetime]:not(.browser-default).validate+label, input[type=email]:not(.browser-default).validate+label, input[type=number]:not(.browser-default).validate+label, input[type=password]:not(.browser-default).validate+label, input[type=search]:not(.browser-default).validate+label, input[type=tel]:not(.browser-default).validate+label, input[type=text]:not(.browser-default).validate+label, input[type=time]:not(.browser-default).validate+label, input[type=url]:not(.browser-default).validate+label, textarea.materialize-textarea.validate+label {
    width: 100%;
}
:host .input-field label {
    font-size: 16px;
    line-height: 1.5;
    color: #0b1d81;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    top: 0;
    -webkit-transform-origin: 0 100%!important;
    -ms-transform-origin: 0 100%!important;
    transform-origin: 0 100%!important;
}
:host .input-field>label {
    position: absolute;
    top: 0;
    left: 0;
    cursor: text;
    -webkit-transition: color .2s ease-out,-webkit-transform .2s ease-out;
    transition: color .2s ease-out,-webkit-transform .2s ease-out;
    transition: transform .2s ease-out,color .2s ease-out;
    transition: transform .2s ease-out,color .2s ease-out,-webkit-transform .2s ease-out;
    -webkit-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
    transform-origin: 0 100%;
    text-align: initial;
    -webkit-transform: translateY(12px);
    -ms-transform: translateY(12px);
    transform: translateY(12px);
}
:host .select-wrapper+label:after, input:not([type])+label:after, input[type=date]:not(.browser-default)+label:after, input[type=datetime-local]:not(.browser-default)+label:after, input[type=datetime]:not(.browser-default)+label:after, input[type=email]:not(.browser-default)+label:after, input[type=number]:not(.browser-default)+label:after, input[type=password]:not(.browser-default)+label:after, input[type=search]:not(.browser-default)+label:after, input[type=tel]:not(.browser-default)+label:after, input[type=text]:not(.browser-default)+label:after, input[type=time]:not(.browser-default)+label:after, input[type=url]:not(.browser-default)+label:after, textarea.materialize-textarea+label:after {
    display: block;
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    opacity: 0;
    -webkit-transition: .2s opacity ease-out,.2s color ease-out;
    transition: .2s opacity ease-out,.2s color ease-out;
}
:host .input-field .field-icon {
    color: #0b1d81;
    position: absolute;
    font-size: 18px;
    right: 0;
    top: 12px;
    background: #fff;
    z-index: 1;
    pointer-events: none;
    width: 26px;
    text-align: center;
}
:host [class*=" icon-"], [class^=icon-] {
    font-family: icomoon!important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
:host .icon-ico-corporate-id:before {
    content: "\e930";
}
:host .input-field .helper-text {
    display: none;
    color: #e0182d;
    bottom: -22px;
    position: absolute;
}
:host .input-field .helper-text {
    min-height: 18px;
    font-size: 12px;
}
:host .input-field:after {
    display: block;
    -webkit-transition: .3s all;
    transition: .3s all;
    position: absolute;
    bottom: -1px;
    width: 100%;
    height: 2px;
}
:host .breadcrumb li:last-child:after, .card-number-box .card-number-info .active-success:before, .card-slider .slider .slider-inner:after, .card-table-wrap .status-bar:after, .card.card-dots:after, .custom-select-dropdown:after, .input-field:after {
    content: "";
}
:host .primary-link.flex-end {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
}
:host .primary-link {
    font-size: 14px;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.14;
    letter-spacing: .47px;
    text-align: right;
    color: #0b1d81;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}
:host .primary-link, .refference-info strong {
    font-weight: 400;
}
:host .mt10 {
    margin-top: 10px!important;
}
:host a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    color: #039be5;
    text-decoration: none;
}
:host .mt20 {
    margin-top: 20px!important;
}
:host .btn-wrap.wide {
    width: 100%;
    height: 46px;
}
:host .btn-wrap .btn.btn-blue-gradient, .btn-wrap a.btn-blue-gradient, .btn-wrap button.btn-blue-gradient {
    background-image: -webkit-gradient(linear,right top,left top,from(#1a3eb7),to(#0b1d81));
    background-image: -webkit-linear-gradient(right,#1a3eb7,#0b1d81);
    background-image: linear-gradient(to left,#1a3eb7,#0b1d81);
    background-color: #0b1d81;
    position: relative;
    z-index: 1;
}
:host .btn-wrap.wide a, .btn-wrap.wide button {
    font-size: 15px;
    font-weight: 500;
}
:host .btn-wrap .btn, .btn-wrap a, .btn-wrap button {
    border: none;
    border-radius: 100px;
    color: #fff;
    -webkit-transition: all ease .3s;
    transition: all ease .3s;
    position: relative;
    outline: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    cursor: pointer;
    padding: 1px 15px 0 18px;
    line-height: 100%;
}

:host .card-rows .card-row+.card-row {
    border-top: 1px solid #e7e9f6;
    padding-top: 25px;
}
:host .card-rows .card-footer {
    border: 1px solid #e7e9f6;
    background-color: #f9f9fd;
}
:host .page-login .card-row+.card-row {
    padding: 50px 35px 35px;
    border-radius: 0 0 4px 4px;
}
:host ul:not(.browser-default) {
    padding-left: 0;
    list-style-type: none;
}
:host ul.listing {
    padding: 0;
}
:host ul.listing, ul.listing li, ul.listing li a {
    font-size: 14px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.93;
    letter-spacing: .25px;
    color: #0b1d81;
}
:host ul:not(.browser-default)>li {
    list-style-type: none;
}
:host ul.listing li, ul.listing li a li, ul.listing li li {
    padding-left: 28px;
    position: relative;
}
:host ul.listing li a li:before, ul.listing li li:before, ul.listing li:before {
    position: absolute;
    font-family: icomoon!important;
    content: "\e90c";
    line-height: 25px;
    font-size: 17px;
    left: 0;
}
:host .btn-wrap .btn.btn-yellow, .btn-wrap a.btn-yellow, .btn-wrap button.btn-yellow {
    background: -webkit-gradient(linear,left top,right top,from(#e37d00),to(#faa634));
    background: -webkit-linear-gradient(left,#e37d00 0,#faa634 100%);
    background: linear-gradient(90deg,#e37d00 0,#faa634 100%);
    font-family: Rubik,sans-serif;
}
:host .btn-wrap.wide a, .btn-wrap.wide button {
    font-size: 15px;
    font-weight: 500;
}
`;
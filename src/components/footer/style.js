import { css } from 'lit-element'

export const footerStyle = css`

:host * {
    box-sizing: border-box;
	-webkit-tap-highlight-color: transparent;
}
:host .desktop-only {
    display: block;
}
:host footer {
	 margin-top: 0px;
	 height: 70px;
	 width: 100%;
	 background-color: #fff;
}
 @media (max-width: 767px) {
	 :host footer {
		 display: none;
	}
}
 :host footer .container {
	 display: block;
	 width: 1200px;
	 max-width: 100%;
	 padding-left: 10px;
	 padding-right: 10px;
	 margin: 0 auto;
	 box-sizing: border-box;
	 display: flex;
	 flex-direction: row;
	 justify-content: space-between;
	 align-items: center;
	 height: 100%;
}
 @media (max-width: 1199px) {
	 :host footer .container {
		 width: 960px;
	}
}
 @media (max-width: 767px) {
	 :host footer .container {
		 width: 750px;
		 max-width: calc(100vw - 30px) !important;
	}
	 :host footer .container.container-wide {
		 margin-left: auto;
		 margin-right: auto;
		 max-width: 100% !important;
		 padding: 0;
	}
}
 @media (max-width: 767px) and (max-width: 767px) {
	 :host footer .container.container-mobile {
		 max-width: calc(100vw - 15px) !important;
	}
}
 @media (max-width: 767px) {
	 :host footer .container {
		 width: 100%;
		 max-width: 100%;
	}
}
 @media (max-width: 560px) {
	 :host footer .container {
		 flex-direction: column-reverse;
		 justify-content: center;
		 height: auto;
		 padding: 18px 0 0;
	}
}
 :host footer .container p {
	 opacity: 0.57;
	 font-size: 14px;
	 font-weight: 400;
	 line-height: 24px;
	 letter-spacing: 0.35px;
	 color: #0b1d81;
}
 @media (max-width: 560px) {
	 :host footer .container p {
		 text-align: center;
	}
}
 :host footer .container ul {
	 margin: 0 -10px;
	 padding: 0;
	 list-style: none;
}
 @media (max-width: 991px) {
	 :host footer .container ul {
		 margin: 0;
	}
}
 @media (max-width: 560px) {
	 :host footer .container ul {
		 display: flex;
		 width: 100%;
		 flex-direction: row;
		 justify-content: space-between;
		 align-items: center;
	}
}
 :host footer .container ul li {
	 display: inline-block;
	 padding: 0 10px;
}
 @media (max-width: 560px) {
	 :host footer .container ul li {
		 margin: 0;
	}
}
 :host footer .container ul li a {
	 opacity: 0.87;
	 font-size: 14px;
	 line-height: 24px;
	 letter-spacing: 0.35px;
	 color: #0b1d81;
	 text-decoration: underline;
}
 :host footer.nav-footer {
	 height: auto;
	 background-color: #0b1d81;
}
 :host footer.nav-footer .sib-col.c2 {
	 width: 255px;
}
 @media (max-width: 1199px) {
	 :host footer.nav-footer .sib-col.c2 {
		 width: 22%;
	}
}
 :host footer.nav-footer .sib-col.c4 {
	 width: 200px;
	 margin-left: 145px;
}
 @media (max-width: 1199px) {
	 :host footer.nav-footer .sib-col.c4 {
		 width: 34%;
		 margin-left: 0;
		 text-align: right;
	}
}
 :host footer.nav-footer .logo-wrapper .brand {
	 display: block;
}
 :host footer.nav-footer .logo-wrapper img {
	 width: 200px;
}
 :host footer.nav-footer .logo-wrapper img.ssl {
	 width: 100px;
	 margin-top: 20px;
}
 :host footer.nav-footer h6 {
	 font-size: 16px;
	 font-weight: 500;
	 font-stretch: normal;
	 font-style: normal;
	 line-height: normal;
	 letter-spacing: 0.69px;
	 color: #fff;
	 margin: 0;
	 margin-bottom: 12px;
}
 :host footer.nav-footer ul {
	 opacity: 0.7;
	 font-size: 14px;
	 font-weight: normal;
	 font-stretch: normal;
	 font-style: normal;
	 line-height: 2.36;
	 letter-spacing: 0.6px;
}
 :host footer.nav-footer ul li {
	 margin: 0;
	 display: block;
}
 :host footer.nav-footer ul li a {
	 text-decoration: none;
	 color: #e6e8f2;
}
 `;
import { css } from 'lit-element'

export const headerStyle = css`


:host * {
    box-sizing: border-box;
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
:host a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    color: #039be5;
    text-decoration: none;
}
 @media (max-width: 767px) {
	 :host header {
		 background-image: radial-gradient(circle at 50% 100%, var(--blue-primary), var(--blue-primary) 39%);
		 height: 60px;
	}
}
 :host header .back {
	 display: none;
}
 :host header .back span {
	 display: none;
}
 :host header .back:before {
	 position: absolute;
	 content: "";
	 width: 12px;
	 height: 12px;
	 border-bottom: 2px solid #0b1d81;
	 border-right: 2px solid #0b1d81;
	 transform: rotate(135deg);
}
 @media (max-width: 767px) {
	 :host header .back {
		 display: block;
	}
	 :host header .back:before {
		 border-bottom: 2px solid white;
		 border-right: 2px solid white;
		 bottom: 28px;
	}
}
 :host header .main-menu {
	 box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
	 background-color: #0b1d81;
	 padding: 0 22px;
	 min-height: 64px;
}
 @media (max-width: 767px) {
	 :host header .main-menu {
		 height: 56px;
		 padding: 0 18px;
	}
}
 @media (max-width: 767px) {
	 :host header .main-menu {
		 background: transparent;
		 position: absolute;
		 width: 100%;
		 box-sizing: border-box;
		 box-shadow: none;
	}
}
 :host header .main-menu .container {
	 padding-top: 9px;
	 padding-bottom: 9px;
	 position: relative;
	 display: flex;
	 flex-direction: row;
	 justify-content: space-between;
	 align-items: center;
	width: 1200px;
	max-width: 100%;
	padding-left: 10px;
	padding-right: 10px;
	margin: 0 auto;
	box-sizing: border-box;
}
 @media (max-width: 991px) {
	 :host header .main-menu .container {
		 height: 100%;
	}
}
 @media (max-width: 767px) {
	 :host header .main-menu .container {
		 padding-left: 0;
		 padding-right: 0;
	}
}
 :host header .main-menu .container .search-toggler {
	 color: #fff;
	 font-size: 20px;
	 height: 20px;
	 width: 20px;
	 text-align: center;
	 position: absolute;
	 cursor: pointer;
	 right: 42px;
	 top: 16px;
	 display: none;
}
 @media (max-width: 767px) {
	 :host header .main-menu .container .search-toggler {
		 display: block;
	}
}
 :host header .main-menu .container .logo-wrapper {
	 width: 200px;
	 float: left;
	 height: 100%;
}
 @media (max-width: 767px) {
	 :host header .main-menu .container .logo-wrapper {
		 position: absolute;
		 top: 0;
		 left: 50%;
		 transform: translateX(-50%);
		 width: auto;
		 padding: 5px 0;
	}
}
 :host header .main-menu .container .logo-wrapper img, :host header .main-menu .container .logo-wrapper svg {
	 width: 100%;
}
 :host header .main-menu .container .logo-wrapper img.desktop, :host header .main-menu .container .logo-wrapper svg.desktop {
	 display: block;
}
 @media (max-width: 767px) {
	 :host header .main-menu .container .logo-wrapper img.desktop, :host header .main-menu .container .logo-wrapper svg.desktop {
		 display: none;
	}
}
 :host header .main-menu .container .logo-wrapper img.mobile, :host header .main-menu .container .logo-wrapper svg.mobile {
	 display: none;
	 width: auto;
	 height: 100%;
}
 @media (max-width: 767px) {
	 :host header .main-menu .container .logo-wrapper img.mobile, :host header .main-menu .container .logo-wrapper svg.mobile {
		 display: block;
		 height: 47px;
	}
}
 :host header .main-menu .container .secure {
	 font-size: 14px;
	 font-weight: 400;
	 font-stretch: normal;
	 font-style: normal;
	 line-height: normal;
	 letter-spacing: 0.1px;
	 text-align: center;
	 color: #faa634;
	 display: flex;
	 align-items: center;
}
 :host header .main-menu .container .secure .icon {
	 margin-right: 14px;
	 font-size: 22px;
}
: host .icon-ico-secure:before {
    content: "\e91a";
}
 @media (max-width: 767px) {
	 :host header .main-menu .container .secure .icon {
		 margin-right: 0;
	}
}
 @media (max-width: 767px) {
	 :host header .main-menu .container .secure span {
		 display: none;
	}
}
 :host header .main-menu .container .the-menu {
	 display: flex;
	 flex-direction: row;
	 justify-content: flex-end;
	 align-items: center;
}
 @media (max-width: 767px) {
	 :host header .main-menu .container .the-menu {
		 display: none;
	}
}
 :host header .main-menu .container .the-menu .profile-settings {
	 display: flex;
	 flex-direction: row;
	 justify-content: flex-start;
	 align-items: center;
	 text-decoration: none;
}
 :host header .main-menu .container .the-menu .profile-settings .img-wrapper {
	 width: 28px;
	 height: 28px;
	 overflow: hidden;
	 border-radius: 50%;
	 margin-right: 8px;
}
 :host header .main-menu .container .the-menu .profile-settings .img-wrapper img {
	 display: block;
	 width: 100%;
	 height: 100%;
	 object-fit: cover;
}
 :host header .main-menu .container .the-menu .profile-settings span {
	 color: #fff;
	 font-size: 14px;
	 font-weight: 400;
}
 :host header .main-menu .container .the-menu .notifications {
	 margin-left: 25px;
	 position: relative;
	 cursor: pointer;
	 text-decoration: none;
}
 @media (max-width: 991px) {
	 :host header .main-menu .container .the-menu .notifications {
		 margin-left: 20px;
	}
}
 :host header .main-menu .container .the-menu .notifications .icon {
	 color: #fff;
	 font-size: 24px;
	 margin-right: 8px;
}
 :host header .main-menu .container .the-menu .notifications iron-icon {
	 color: #fff;
	 width: 21px;
	 height: 21px;
}
 :host header .main-menu .container .the-menu .notifications .notification-badge {
	 display: block;
	 text-align: center;
	 width: 17px;
	 height: 16px;
	 border-radius: 5px;
	 line-height: 18px;
	 background-color: #faa635;
	 color: #0b1d81;
	 font-size: 14px;
	 font-weight: 500;
	 position: absolute;
	 top: -4px;
	 right: -11px;
	 transition: all ease 0.2s;
}
 :host header .main-menu .container .the-menu .sign-out {
	 display: flex;
	 flex-direction: row;
	 justify-content: flex-start;
	 align-items: center;
	 margin-left: 33.5px;
	 text-decoration: none;
}
 @media (max-width: 991px) {
	 :host header .main-menu .container .the-menu .sign-out {
		 margin-left: 25px;
	}
}
 :host header .main-menu .container .the-menu .sign-out img {
	 width: 32px;
	 height: 32px;
	 margin-right: 6px;
}
 :host header .main-menu .container .the-menu .sign-out span {
	 color: #fff;
	 font-size: 14px;
	 font-weight: medium;
	 white-space: nowrap;
}
 :host header .main-menu .container .menu-toggler {
	 display: none;
	 position: absolute;
	 right: 0;
	 top: 35px;
	 width: 24px;
	 height: 16px;
}
 @media (max-width: 767px) {
	 :host header .main-menu .container .menu-toggler {
		 display: block;
		 top: 27px;
		 z-index: 1;
	}
}
 :host header .main-menu .container .menu-toggler span {
	 display: block;
	 width: 24px;
	 height: 3px;
	 border-radius: 5px;
	 background: #fff;
	 transition: all ease 0.3s;
}
 :host header .main-menu .container .menu-toggler span:before, :host header .main-menu .container .menu-toggler span:after {
	 content: "";
	 background: #fff;
	 display: block;
	 position: absolute;
	 height: 3px;
	 width: 24px;
	 border-radius: 5px;
	 transition: all ease 0.3s;
}
 :host header .main-menu .container .menu-toggler span:before {
	 width: 20px;
	 top: -7px;
}
 :host header .main-menu .container .menu-toggler span:after {
	 top: 7px;
}
 :host header .main-menu .container .menu-toggler.active {
	 position: fixed;
	 top: 30px;
	 right: 28px;
	 z-index: 10000;
}
 :host header .main-menu .container .menu-toggler.active span {
	 background: transparent;
	 transition: all ease 0.3s;
}
 :host header .main-menu .container .menu-toggler.active span:before, :host header .main-menu .container .menu-toggler.active span:after {
	 width: 24px;
	 top: 0;
	 transform: rotate(45deg);
	 transition: all ease 0.3s;
}
 :host header .main-menu .container .menu-toggler.active span:after {
	 transform: rotate(-45deg);
}
 :host header .user-menu {
	 height: 50px;
	 box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
	 background-color: #fff;
	 padding: 0 22px;
}
 @media (max-width: 767px) {
	 :host header .user-menu {
		 display: none;
	}
}
 :host header .user-menu .container {
	 display: block;
}
 :host header .user-menu .container .user-menu-wrapper {
	 float: left;
}
 :host header .user-menu .container .user-menu-wrapper > ul {
	 list-style: none;
	 margin: 0;
	 padding: 0;
	 display: flex;
	 flex-direction: row;
	 justify-content: flex-start;
	 align-items: center;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li {
	 display: inline-block;
	 padding: 8px 12px 7px;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li:hover {
	 background: #f5f6fb;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li:hover.has-submenu .dropdown {
	 pointer-events: all;
	 opacity: 1;
	 top: 100%;
	 height: 400px;
	 overflow: hidden !important;
	 transition: height ease 0.3s, opacity ease 0.2s;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li:hover.has-submenu .dropdown::-webkit-scrollbar {
	 display: none;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li:hover.has-submenu .dropdown ul li a {
	 padding-left: 28px;
	 opacity: 1;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li:hover.has-submenu .dropdown ul li a:hover span {
	 padding-left: 5px;
	 color: #faa634;
	 transition: all ease 0.15s;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li:hover.has-submenu .dropdown ul li:nth-child(1) a {
	 transition: opacity ease 0.3s 0.2833333333s, padding-left ease 0.3s 0.1833333333s;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li:hover.has-submenu .dropdown ul li:nth-child(2) a {
	 transition: opacity ease 0.3s 0.3666666667s, padding-left ease 0.3s 0.2666666667s;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li:hover.has-submenu .dropdown ul li:nth-child(3) a {
	 transition: opacity ease 0.3s 0.45s, padding-left ease 0.3s 0.35s;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li:hover.has-submenu .dropdown ul li:nth-child(4) a {
	 transition: opacity ease 0.3s 0.5333333333s, padding-left ease 0.3s 0.4333333333s;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li:hover.has-submenu .dropdown ul li:nth-child(5) a {
	 transition: opacity ease 0.3s 0.6166666667s, padding-left ease 0.3s 0.5166666667s;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li:hover.has-submenu .dropdown ul li:nth-child(6) a {
	 transition: opacity ease 0.3s 0.7s, padding-left ease 0.3s 0.6s;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li:hover.has-submenu .dropdown ul li:nth-child(7) a {
	 transition: opacity ease 0.3s 0.7833333333s, padding-left ease 0.3s 0.6833333333s;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li:hover.has-submenu .dropdown ul li:nth-child(8) a {
	 transition: opacity ease 0.3s 0.8666666667s, padding-left ease 0.3s 0.7666666667s;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li:hover.has-submenu .dropdown ul li:nth-child(9) a {
	 transition: opacity ease 0.3s 0.95s, padding-left ease 0.3s 0.85s;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li:hover.has-submenu .dropdown ul li:nth-child(10) a {
	 transition: opacity ease 0.3s 1.0333333333s, padding-left ease 0.3s 0.9333333333s;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li:hover.has-submenu .dropdown ul li:nth-child(11) a {
	 transition: opacity ease 0.3s 1.1166666667s, padding-left ease 0.3s 1.0166666667s;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li:hover.has-submenu .dropdown ul li:nth-child(12) a {
	 transition: opacity ease 0.3s 1.2s, padding-left ease 0.3s 1.1s;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li:not(:first-child) {
	 margin-left: 50px;
}
 @media (max-width: 991px) {
	 :host header .user-menu .container .user-menu-wrapper > ul > li:not(:first-child) {
		 margin-left: 25px;
	}
}
 @media (max-width: 880px) {
	 :host header .user-menu .container .user-menu-wrapper > ul > li:not(:first-child) {
		 margin-left: 10px;
	}
}
 :host header .user-menu .container .user-menu-wrapper > ul > li > a {
	 font-size: 16px;
	 font-weight: 500;
	 font-family: "Rubik", sans-serif;
	 color: #0b1d81;
	 text-decoration: none;
	 position: relative;
	 display: flex;
	 flex-direction: row;
	 justify-content: flex-start;
	 align-items: center;
	 padding-right: 18px;
	 line-height: 35px;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li > a img {
	 margin-right: 10px;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li.has-submenu {
	 position: relative;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li.has-submenu .dropdown {
	 pointer-events: none;
	 width: 214px;
	 opacity: 0;
	 height: 0;
	 overflow: hidden;
	 position: absolute;
	 top: calc(100% - 50px);
	 left: 0;
	 background: #f5f6fb;
	 box-shadow: 0 20px 10px 0 rgba(11, 29, 129, 0.2);
	 z-index: 1000;
	 transition: opacity ease 0.3s 0.32s, height ease 0.3s 0.25s, top ease 0.3s 0.32s;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li.has-submenu .dropdown > ul {
	 list-style-type: none;
	 margin: 0;
	 padding: 8px 0;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li.has-submenu .dropdown > ul > li a {
	 display: block;
	 text-decoration: none;
	 letter-spacing: 0.29px;
	 font-size: 16px;
	 padding: 8px 28px 8px 0;
	 opacity: 0;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li.has-submenu .dropdown > ul > li a span {
	 padding-left: 0px;
	 color: #0b1d81;
	 transition: all ease 0.15s;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li.has-submenu .dropdown > ul > li:nth-child(12) a {
	 transition: opacity ease 0.3s 0.02s, padding-left ease 0.3s 0.02s;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li.has-submenu .dropdown > ul > li:nth-child(11) a {
	 transition: opacity ease 0.3s 0.04s, padding-left ease 0.3s 0.04s;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li.has-submenu .dropdown > ul > li:nth-child(10) a {
	 transition: opacity ease 0.3s 0.06s, padding-left ease 0.3s 0.06s;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li.has-submenu .dropdown > ul > li:nth-child(9) a {
	 transition: opacity ease 0.3s 0.08s, padding-left ease 0.3s 0.08s;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li.has-submenu .dropdown > ul > li:nth-child(8) a {
	 transition: opacity ease 0.3s 0.1s, padding-left ease 0.3s 0.1s;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li.has-submenu .dropdown > ul > li:nth-child(7) a {
	 transition: opacity ease 0.3s 0.12s, padding-left ease 0.3s 0.12s;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li.has-submenu .dropdown > ul > li:nth-child(6) a {
	 transition: opacity ease 0.3s 0.14s, padding-left ease 0.3s 0.14s;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li.has-submenu .dropdown > ul > li:nth-child(5) a {
	 transition: opacity ease 0.3s 0.16s, padding-left ease 0.3s 0.16s;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li.has-submenu .dropdown > ul > li:nth-child(4) a {
	 transition: opacity ease 0.3s 0.18s, padding-left ease 0.3s 0.18s;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li.has-submenu .dropdown > ul > li:nth-child(3) a {
	 transition: opacity ease 0.3s 0.2s, padding-left ease 0.3s 0.2s;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li.has-submenu .dropdown > ul > li:nth-child(2) a {
	 transition: opacity ease 0.3s 0.22s, padding-left ease 0.3s 0.22s;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li.has-submenu .dropdown > ul > li:nth-child(1) a {
	 transition: opacity ease 0.3s 0.24s, padding-left ease 0.3s 0.24s;
}
 :host header .user-menu .container .user-menu-wrapper > ul > li.has-submenu > a:after {
	 content: "";
	 display: block;
	 position: absolute;
	 width: 8px;
	 height: 8px;
	 border-right: 2px solid #faa634;
	 border-bottom: 2px solid #faa634;
	 transform: rotate(45deg);
	 right: 0;
	 top: 12px;
}
 :host header .user-menu .container .user-search-wrapper {
	 float: right;
	 height: 100%;
}
 @media (max-width: 1199px) {
	 :host header .user-menu .container .user-search-wrapper {
		 display: none;
	}
}
 :host header .user-menu .container .user-search-wrapper button {
	 display: flex;
	 align-items: center;
	 justify-content: right;
	 padding: 6px 12px 7px;
	 color: #0b1d81;
	 background: none;
	 height: 50px;
	 min-height: 50px;
	 font-size: 16px;
}
 :host header .user-menu .container .user-search-wrapper button .icon {
	 margin-right: 10px;
	 font-size: 26px;
}
 :host header .user-menu .container .user-search-wrapper button:hover, :host header .user-menu .container .user-search-wrapper button:focus {
	 background: none;
	 color: #0b1d81;
	 background: #f5f6fb;
}
 :host header #mobilemenu {
	 width: 319px;
	 max-width: calc(100% - 56px);
	 position: fixed;
	 left: -320px;
	 top: 0;
	 bottom: 0;
	 height: 100vh;
	 z-index: 1100;
	 transition: left ease 0.2s;
}
 :host header #mobilemenu.active {
	 left: 0;
	 transition: left ease 0.2s;
}
 :host header #mobilemenu.active:before {
	 background: rgba(0, 0, 0, 0.7);
	 z-index: 1098;
	 pointer-events: all;
	 transition: all ease 0.2s;
}
 :host header #mobilemenu.active .wrapper .menu-header .profile-image-wrapper {
	 transform: translateX(0px);
	 opacity: 1;
	 transition: all ease 0.2s 0.1s;
}
 :host header #mobilemenu.active .wrapper .menu-header .user-name {
	 transform: translateX(0px);
	 opacity: 1;
	 transition: all ease 0.2s 0.2s;
}
 :host header #mobilemenu.active .wrapper .menu-header .profile-settings-mobile {
	 transform: translateX(0px);
	 opacity: 1;
	 transition: all ease 0.2s 0.3s;
}
 :host header #mobilemenu.active .wrapper .menu-content ul li {
	 transform: translateX(0px);
	 opacity: 1;
}
 :host header #mobilemenu.active .wrapper .menu-content ul li:nth-child(1) {
	 transition: all ease 0.2s 0.2s;
}
 :host header #mobilemenu.active .wrapper .menu-content ul li:nth-child(2) {
	 transition: all ease 0.2s 0.4s;
}
 :host header #mobilemenu.active .wrapper .menu-content ul li:nth-child(3) {
	 transition: all ease 0.2s 0.6s;
}
 :host header #mobilemenu.active .wrapper .menu-content ul li:nth-child(4) {
	 transition: all ease 0.2s 0.8s;
}
 :host header #mobilemenu.active .wrapper .menu-content ul li:nth-child(5) {
	 transition: all ease 0.2s 1s;
}
 :host header #mobilemenu.active .wrapper .menu-content ul li:nth-child(6) {
	 transition: all ease 0.2s 1.2s;
}
 :host header #mobilemenu.active .wrapper .menu-content ul li:nth-child(7) {
	 transition: all ease 0.2s 1.4s;
}
 :host header #mobilemenu.active .wrapper .menu-content ul li:nth-child(8) {
	 transition: all ease 0.2s 1.6s;
}
 :host header #mobilemenu.active .wrapper .menu-content ul li:nth-child(9) {
	 transition: all ease 0.2s 1.8s;
}
 :host header #mobilemenu.active .wrapper .menu-content ul li:nth-child(10) {
	 transition: all ease 0.2s 2s;
}
 :host header #mobilemenu.active .wrapper .menu-content ul li:nth-child(11) {
	 transition: all ease 0.2s 2.2s;
}
 :host header #mobilemenu.active .wrapper .menu-content ul li:nth-child(12) {
	 transition: all ease 0.2s 2.4s;
}
 :host header #mobilemenu:before {
	 content: "";
	 display: block;
	 position: fixed;
	 left: 0;
	 right: 0;
	 top: 0;
	 bottom: 0;
	 background: rgba(0, 0, 0, 0);
	 z-index: -1;
	 pointer-events: none;
	 transition: all ease 0.5s;
}
 :host header #mobilemenu .wrapper {
	 height: 100%;
	 overflow: scroll;
	 position: relative;
	 z-index: 1100;
	 background: #fff;
}
 :host header #mobilemenu .wrapper::-webkit-scrollbar {
	 display: none;
}
 :host header #mobilemenu .wrapper .menu-header {
	 width: 100%;
	 background-image: linear-gradient(255deg, #5666c2, #2f40a0 38%, #091970);
	 position: relative;
	 display: flex;
	 flex-direction: column;
	 justify-content: center;
	 align-items: flex-start;
	 padding: 20px;
	 box-sizing: border-box;
}
 :host header #mobilemenu .wrapper .menu-header:before {
	 content: "";
	 position: absolute;
	 right: 30px;
	 top: 0;
	 bottom: 0;
	 width: 100px;
	 height: 100%;
	 background: url(./assets/images/menu-header-back.svg) no-repeat;
}
 :host header #mobilemenu .wrapper .menu-header .profile-image-wrapper {
	 width: 48px;
	 height: 48px;
	 overflow: hidden;
	 border-radius: 50%;
	 transform: translateX(-100px);
	 opacity: 0;
	 transition: all ease 0.5s;
}
 :host header #mobilemenu .wrapper .menu-header .profile-image-wrapper img {
	 width: 100%;
	 height: 100%;
	 object-fit: cover;
}
 :host header #mobilemenu .wrapper .menu-header .user-name {
	 color: #fff;
	 font-size: 18px;
	 font-weight: 500;
	 line-height: 1.56;
	 letter-spacing: 0.5px;
	 margin: 5px 0 2px;
	 transform: translateX(-100px);
	 opacity: 0;
	 transition: all ease 0.5s;
}
 :host header #mobilemenu .wrapper .menu-header .profile-settings-mobile {
	 display: flex;
	 flex-direction: row;
	 justify-content: flex-start;
	 align-items: center;
	 text-decoration: none;
	 transform: translateX(-100px);
	 opacity: 0;
	 transition: all ease 0.5s;
}
 :host header #mobilemenu .wrapper .menu-header .profile-settings-mobile span {
	 font-size: 14px;
	 letter-spacing: 0.25px;
	 color: #fff;
	 margin-left: 8px;
	 display: block;
}
 :host header #mobilemenu .wrapper .menu-content > ul {
	 list-style: none;
	 margin: 0;
	 padding: 0;
	 display: flex;
	 flex-direction: column;
	 justify-content: flex-start;
	 align-items: flex-start;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li {
	 display: block;
	 width: 100%;
	 box-sizing: border-box;
	 transform: translateX(-100%);
	 opacity: 0;
	 transition: all ease 0.5s;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li.active {
	 background: #f1f2f9;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li.active.has-submenu .dropdown {
	 pointer-events: all;
	 opacity: 1;
	 top: 100%;
	 height: auto;
	 overflow: scroll;
	 transition: height ease 0.3s, opacity ease 0.2s;
	 border-top: solid 1px #eeeff8;
	 border-bottom: solid 1px #eeeff8;
}
 @media (max-width: 767px) {
	 :host header #mobilemenu .wrapper .menu-content > ul > li.active.has-submenu .dropdown {
		 max-height: inherit !important;
	}
}
 :host header #mobilemenu .wrapper .menu-content > ul > li.active.has-submenu .dropdown::-webkit-scrollbar {
	 display: none;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li.active.has-submenu .dropdown ul li a {
	 padding-left: 50px;
	 opacity: 1;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li.active.has-submenu .dropdown ul li a:hover span {
	 color: #faa634;
	 transition: all ease 0.15s;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li.active.has-submenu .dropdown ul li:nth-child(1) a {
	 transition: opacity ease 0.3s 0.2833333333s, padding-left ease 0.3s 0.1833333333s;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li.active.has-submenu .dropdown ul li:nth-child(2) a {
	 transition: opacity ease 0.3s 0.3666666667s, padding-left ease 0.3s 0.2666666667s;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li.active.has-submenu .dropdown ul li:nth-child(3) a {
	 transition: opacity ease 0.3s 0.45s, padding-left ease 0.3s 0.35s;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li.active.has-submenu .dropdown ul li:nth-child(4) a {
	 transition: opacity ease 0.3s 0.5333333333s, padding-left ease 0.3s 0.4333333333s;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li.active.has-submenu .dropdown ul li:nth-child(5) a {
	 transition: opacity ease 0.3s 0.6166666667s, padding-left ease 0.3s 0.5166666667s;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li.active.has-submenu .dropdown ul li:nth-child(6) a {
	 transition: opacity ease 0.3s 0.7s, padding-left ease 0.3s 0.6s;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li.active.has-submenu .dropdown ul li:nth-child(7) a {
	 transition: opacity ease 0.3s 0.7833333333s, padding-left ease 0.3s 0.6833333333s;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li.active.has-submenu .dropdown ul li:nth-child(8) a {
	 transition: opacity ease 0.3s 0.8666666667s, padding-left ease 0.3s 0.7666666667s;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li.active.has-submenu .dropdown ul li:nth-child(9) a {
	 transition: opacity ease 0.3s 0.95s, padding-left ease 0.3s 0.85s;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li.active.has-submenu .dropdown ul li:nth-child(10) a {
	 transition: opacity ease 0.3s 1.0333333333s, padding-left ease 0.3s 0.9333333333s;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li.active.has-submenu .dropdown ul li:nth-child(11) a {
	 transition: opacity ease 0.3s 1.1166666667s, padding-left ease 0.3s 1.0166666667s;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li.active.has-submenu .dropdown ul li:nth-child(12) a {
	 transition: opacity ease 0.3s 1.2s, padding-left ease 0.3s 1.1s;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li > a {
	 font-size: 16px;
	 font-weight: 500;
	 font-family: "Rubik", sans-serif;
	 color: #0b1d81;
	 text-decoration: none;
	 position: relative;
	 display: flex;
	 flex-direction: row;
	 justify-content: flex-start;
	 align-items: center;
	 line-height: 35px;
	 padding: 12px 16px;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li > a img {
	 margin-right: 10px;
	 max-width: 24px;
	 max-height: 24px;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li.has-submenu {
	 position: relative;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li.has-submenu .dropdown {
	 background: #f5f6fb;
	 pointer-events: none;
	 width: 100%;
	 height: 0;
	 overflow: hidden;
	 position: relative;
	 background: #f5f6fb;
	 transition: height ease 0.3s 0.25s;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li.has-submenu .dropdown > ul {
	 list-style-type: none;
	 margin: 0;
	 padding: 0px;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li.has-submenu .dropdown > ul > li a {
	 display: block;
	 text-decoration: none;
	 letter-spacing: 0.29px;
	 font-size: 16px;
	 padding: 10px 28px 10px 0;
	 opacity: 0;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li.has-submenu .dropdown > ul > li a span {
	 padding-left: 0px;
	 color: #0b1d81;
	 transition: all ease 0.15s;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li.has-submenu .dropdown > ul > li:nth-child(12) a {
	 transition: opacity ease 0.3s 0.02s, padding-left ease 0.3s 0.02s;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li.has-submenu .dropdown > ul > li:nth-child(11) a {
	 transition: opacity ease 0.3s 0.04s, padding-left ease 0.3s 0.04s;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li.has-submenu .dropdown > ul > li:nth-child(10) a {
	 transition: opacity ease 0.3s 0.06s, padding-left ease 0.3s 0.06s;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li.has-submenu .dropdown > ul > li:nth-child(9) a {
	 transition: opacity ease 0.3s 0.08s, padding-left ease 0.3s 0.08s;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li.has-submenu .dropdown > ul > li:nth-child(8) a {
	 transition: opacity ease 0.3s 0.1s, padding-left ease 0.3s 0.1s;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li.has-submenu .dropdown > ul > li:nth-child(7) a {
	 transition: opacity ease 0.3s 0.12s, padding-left ease 0.3s 0.12s;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li.has-submenu .dropdown > ul > li:nth-child(6) a {
	 transition: opacity ease 0.3s 0.14s, padding-left ease 0.3s 0.14s;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li.has-submenu .dropdown > ul > li:nth-child(5) a {
	 transition: opacity ease 0.3s 0.16s, padding-left ease 0.3s 0.16s;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li.has-submenu .dropdown > ul > li:nth-child(4) a {
	 transition: opacity ease 0.3s 0.18s, padding-left ease 0.3s 0.18s;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li.has-submenu .dropdown > ul > li:nth-child(3) a {
	 transition: opacity ease 0.3s 0.2s, padding-left ease 0.3s 0.2s;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li.has-submenu .dropdown > ul > li:nth-child(2) a {
	 transition: opacity ease 0.3s 0.22s, padding-left ease 0.3s 0.22s;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li.has-submenu .dropdown > ul > li:nth-child(1) a {
	 transition: opacity ease 0.3s 0.24s, padding-left ease 0.3s 0.24s;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li.has-submenu > a:after {
	 content: "";
	 display: block;
	 position: absolute;
	 width: 5px;
	 height: 5px;
	 border-right: 2px solid #faa634;
	 border-bottom: 2px solid #faa634;
	 transform: rotate(45deg);
	 right: 16px;
	 top: 25px;
}
 :host header #mobilemenu .wrapper .menu-content > ul > li#sign-out-mobile {
	 border-top: 1px solid #eeeff8;
}
 :host header #mobilemenu.pre-login.active:before {
	 background-color: #4958a2;
}
 :host header #mobilemenu.pre-login ul li {
	 position: relative;
}
 :host header #mobilemenu.pre-login ul li + li {
	 border-top: solid 1px #e7e9f6;
}
 :host header #mobilemenu.pre-login ul li mark.notification-badge {
	 background-color: #faa634;
	 color: #0b1d81;
	 font-size: 14px;
	 font-weight: 500;
	 padding: 1px 5px;
	 margin-left: 10px;
}
 :host header #mobilemenu.pre-login .social-icons ul li + li {
	 border-top: none;
}
 :host header.dashboard .user-search-wrapper {
	 display: none;
}
 @media (max-width: 767px) {
	 :host header.dashboard {
		 background: none;
		 position: absolute;
		 z-index: 2;
		 width: 100%;
	}
}
 @media (max-width: 767px) {
	 :host header.dashboard .user-search-wrapper {
		 display: block;
		 margin-right: 45px;
		 margin-top: 4px;
	}
}
 :host header.dashboard .user-search-wrapper button {
	 padding: 0px;
	 font-size: 20px;
	 background: none;
	 margin: 0px;
	 padding: 0px;
	 color: #fff;
}
 @media (max-width: 1199px) {
	 :host header.dashboard.multiple-search-box .main-menu .user-search-wrapper {
		 display: block;
	}
}
 @media (max-width: 1199px) {
	 :host header.dashboard.multiple-search-box .main-menu .the-menu {
		 position: absolute;
		 right: 50px;
	}
}
 @media (min-width: 1201px) {
	 :host header.dashboard.multiple-search-box .user-menu .user-search-wrapper {
		 display: block;
	}
}
 :host header.dashboard .back {
	 display: none;
}
 @media (max-width: 767px) {
	 :host header.dashboard .back {
		 display: block;
	}
	 :host header.dashboard .back:before {
		 bottom: 30px;
	}
}
 :host header.offer-header {
	 top: 0px;
}
 :host header.secure-menu .back {
	 position: absolute;
	 bottom: -35px;
	 display: block;
}
 @media (max-width: 767px) {
	 :host header.secure-menu .back {
		 position: relative;
		 bottom: 0;
	}
}
 :host header.secure-menu .back:before {
	 position: absolute;
	 content: "";
	 width: 12px;
	 height: 12px;
	 border-bottom: 2px solid #0b1d81;
	 border-right: 2px solid #0b1d81;
	 transform: rotate(135deg);
	 top: 1px;
}
 @media (max-width: 767px) {
	 :host header.secure-menu .back:before {
		 border-bottom: 2px solid #fff;
		 border-right: 2px solid #fff;
		 bottom: -6px;
	}
}
 :host header.secure-menu .back span {
	 padding-left: 18px;
	 margin-top: -4px;
	 display: block;
	 font-size: 14px;
	 font-weight: 500;
	 font-stretch: normal;
	 font-style: normal;
	 line-height: 1.71;
	 letter-spacing: 0.13px;
	 color: #0b1d81;
}
 @media (max-width: 767px) {
	 :host header.secure-menu .back span {
		 display: none;
	}
}
 @media (max-width: 767px) {
	 :host header.secure-menu .back {
		 display: block;
		 position: relative;
	}
	 :host header.secure-menu .back span {
		 display: none;
	}
}
 @media (max-width: 767px) {
	 :host header.secure-menu {
		 height: 56px;
		 background-image: radial-gradient(circle at 50% 100%, var(--blue-primary), var(--blue-primary) 39%);
	}
}
 :host header.secure-menu .container .logo-wrapper img.mobile {
	 width: 30px;
}
 @media (max-width: 767px) {
	 :host header.language-switcher .back {
		 opacity: 0;
		 visibility: hidden;
	}
}
 @media (max-width: 767px) {
	 :host header.language-switcher .switcher {
		 position: absolute;
		 left: 0;
	}
}
 @media (max-width: 991px) {
	 :host header .user-menu .container .user-menu-wrapper > ul > li.has-submenu:last-child .dropdown {
		 left: auto;
		 right: 0px;
	}
	 :host header .user-menu .container .user-menu-wrapper > ul {
		 margin-left: -15px;
		 margin-right: 0px;
	}
	 :host header .user-menu .container .user-menu-wrapper > ul > li:not(:first-child) {
		 margin-left: 0px;
	}
}
 :host header .right-menu {
	 display: flex;
}
 :host header .right-menu .switcher {
	 padding-right: 50px;
	 @import url('https://fonts.googleapis.com/css?family=Mada:400,500&display=swap');
	 font-family: 'Mada', sans-serif;
	 font-weight: 500;
	 z-index: 1;
}
 :host header .right-menu .switcher a {
	 color: white;
	 position: relative;
	 padding-right: 15px;
	 display: block;
}
 :host header .right-menu .switcher a:after {
	 content: "";
	 display: block;
	 position: absolute;
	 width: 8px;
	 height: 8px;
	 border-right: 2px solid #faa634;
	 border-bottom: 2px solid #faa634;
	 -webkit-transform: rotate(45deg);
	 -ms-transform: rotate(45deg);
	 transform: rotate(45deg);
	 right: 0;
	 top: 5px;
	 left: auto;
	 margin-left: -8px;
	 box-sizing: inherit;
}
 @media (max-width: 767px) {
	 :host body header.no-bg .right-menu .switcher {
		 position: relative;
		 top: 13px !important;
		 padding-right: 0;
	}
}
 @media (max-width: 320px) {
	 :host body header.no-bg .right-menu .switcher {
		 top: 0 !important;
	}
}
 :host body .main-menu .notification-tray {
	 z-index: 0;
	 position: absolute;
	 top: 56px;
	 width: 100%;
	 height: auto;
	 opacity: 0;
	 visibility: hidden;
	 transition: 0.3s all;
}
 :host body .main-menu .notification-tray .notification-list {
	 background: #fff;
	 right: 0px;
	 width: 376px;
	 height: auto;
	 top: 0px;
	 position: absolute;
	 z-index: 1;
	 border-top-left-radius: 3px;
	 border-top-right-radius: 3px;
	 opacity: 0;
	 transition: 0.1s all;
	 visibility: hidden;
	 transform-origin: top center;
	 transform: scaleY(0.8);
	 transition-delay: 0.1s;
}
 :host body .main-menu .notification-tray .notification-list .notification-header {
	 padding: 18px 20px;
	 position: relative;
	 box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
}
 :host body .main-menu .notification-tray .notification-list .notification-header .close {
	 position: absolute;
	 right: 12px;
	 top: 15px;
	 width: 0px;
	 height: 30px;
	 width: 30px;
	 display: flex;
	 align-items: center;
	 justify-content: center;
	 color: #0b1d81;
}
 :host body .main-menu .notification-tray .notification-list .notification-header h4, :host body .main-menu .notification-tray .notification-list .notification-header .h4 {
	 font-size: 20px;
	 font-weight: 500;
	 font-stretch: normal;
	 font-style: normal;
	 line-height: normal;
	 letter-spacing: 0.15px;
	 margin: 0px;
}
 :host body .main-menu .notification-tray .notification-list .notification-body {
	 height: 462px;
	 overflow: auto;
}
 :host body .main-menu .notification-tray .notification-list .notification-body .notification-item {
	 display: flex;
	 padding: 22px 20px;
	 border-bottom: solid 1px #eeeff8;
}
 :host body .main-menu .notification-tray .notification-list .notification-body .notification-item .icon-wrap {
	 height: 32px;
	 width: 32px;
	 display: flex;
	 align-items: center;
	 justify-content: center;
}
 :host body .main-menu .notification-tray .notification-list .notification-body .notification-item .msg-wrap {
	 margin-left: 15px;
}
 :host body .main-menu .notification-tray .notification-list .notification-body .notification-item .msg-wrap h6 {
	 font-size: 14px;
	 font-weight: normal;
	 font-stretch: normal;
	 font-style: normal;
	 line-height: normal;
	 letter-spacing: 0.25px;
	 color: #0b1d81;
	 width: 100%;
	 margin: 0px;
}
 :host body .main-menu .notification-tray .notification-list .notification-body .notification-item .msg-wrap h6 strong {
	 font-weight: 500;
}
 :host body .main-menu .notification-tray .notification-list .notification-body .notification-item .msg-wrap .date-time {
	 font-size: 14px;
	 font-weight: normal;
	 font-stretch: normal;
	 font-style: normal;
	 line-height: normal;
	 letter-spacing: 0.25px;
	 color: rgba(11, 29, 129, 0.57);
	 width: 100%;
	 display: block;
}
 :host body .main-menu .notification-tray .notification-list .notification-body .notification-item .msg-wrap .btn-wrap {
	 min-width: 124px;
	 display: inline-flex;
	 margin-top: 10px;
	 width: auto;
}
 :host body .main-menu .notification-tray .notification-list .notification-body .notification-item .msg-wrap .btn-wrap .btn-outline-primary {
	 font-size: 14px;
	 font-weight: 500;
	 font-stretch: normal;
	 font-style: normal;
	 line-height: normal;
	 letter-spacing: 0.13px;
	 text-align: center;
	 background: none;
	 border: 1px solid #0b1d81;
	 color: #0b1d81;
}
 :host body .main-menu .notification-tray .notification-list .notification-body .notification-item .msg-wrap .btn-wrap .btn-outline-primary:hover, :host body .main-menu .notification-tray .notification-list .notification-body .notification-item .msg-wrap .btn-wrap .btn-outline-primary:focus {
	 background: #0b1d81;
	 color: #fff;
}
 :host body .main-menu .notification-tray .notification-list .notification-body .notification-item:hover {
	 background: #f5f6fb;
}
 :host body .main-menu .notification-tray .notification-list .notification-item {
	 cursor: pointer;
}
 :host body .main-menu .notification-tray .overlay {
	 content: "";
	 position: fixed;
	 z-index: 0;
	 transition: 0.3s all;
	 background: rgba(11, 29, 129, 0.8);
	 display: block;
	 top: 0px;
	 bottom: 0px;
	 left: 0px;
	 right: 0px;
}
 :host body .search-panel-wrap {
	 opacity: 0;
	 visibility: hidden;
	 position: absolute;
	 top: 64px;
	 left: 0px;
	 right: 0px;
	 display: flex;
	 flex-direction: column;
	 transition: 0.3s all;
}
 :host body .search-panel-wrap .overlay {
	 content: "";
	 position: fixed;
	 z-index: 0;
	 transition: 0.3s all;
	 background: rgba(11, 29, 129, 0.8);
	 display: block;
	 top: 0px;
	 bottom: 0px;
	 left: 0px;
	 right: 0px;
}
 :host body .search-panel-wrap .search-input-wrap, :host body .search-panel-wrap .search-result-wrap {
	 background: #fff;
	 position: relative;
	 z-index: 1;
}
 :host body .search-panel-wrap .search-input-wrap {
	 box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
	 height: 50px;
	 display: block;
	 z-index: 2;
}
 :host body .search-panel-wrap .search-input-wrap .container {
	 position: relative;
}
 @media (max-width: 767px) {
	 :host body .search-panel-wrap .search-input-wrap .container {
		 padding-left: 0px;
		 padding-right: 0px;
	}
}
 :host body .search-panel-wrap .search-input-wrap .input-field {
	 height: 100%;
	 border: 0px;
}
 :host body .search-panel-wrap .search-input-wrap .input-field:after {
	 display: none;
}
 :host body .search-panel-wrap .search-input-wrap .input-field .field-icon {
	 position: absolute;
	 font-size: 18px;
	 left: 0px;
	 top: 14px;
	 z-index: 1;
}
 :host body .search-panel-wrap .search-input-wrap .input-field .field-icon .icon {
	 font-weight: bold;
}
 :host body .search-panel-wrap .search-input-wrap .input-field .form-control {
	 padding-left: 50px;
	 height: 50px;
	 line-height: 50px;
	 width: calc(100% - 50px);
	 font-size: 20px;
	 font-weight: 500;
	 font-stretch: normal;
	 font-style: normal;
	 line-height: normal;
	 letter-spacing: normal;
}
 @media (max-width: 560px) {
	 :host body .search-panel-wrap .search-input-wrap .input-field .form-control {
		 padding-left: 35px;
		 width: calc(100% - 35px);
		 font-size: 18px;
	}
}
 :host body .search-panel-wrap .search-input-wrap .close {
	 color: #0b1d81;
	 position: absolute;
	 font-size: 12px;
	 right: 0px;
	 top: 0px;
	 height: 50px;
	 width: 50px;
	 display: flex;
	 align-items: center;
	 justify-content: center;
	 cursor: pointer;
	 z-index: 1;
}
 @media (max-width: 560px) {
	 :host body .search-panel-wrap .search-input-wrap .close {
		 right: -15px;
		 font-size: 14px;
	}
}
 :host body .search-panel-wrap .search-result-wrap {
	 opacity: 0;
	 transition: 0.1s all;
	 visibility: hidden;
	 transform-origin: top center;
	 transform: scaleY(0.8);
	 transition-delay: 0.1s;
}
 @media (max-width: 767px) {
	 :host body .search-panel-wrap .search-result-wrap .container {
		 padding-left: 0px;
		 padding-right: 0px;
	}
}
 :host body .search-panel-wrap .search-result-wrap.active {
	 transform: scaleY(1);
	 visibility: visible;
	 opacity: 1;
}
 :host body .search-panel-wrap .search-result-wrap.active + .overlay {
	 visibility: visible;
	 opacity: 1;
}
 :host body .search-panel-wrap .search-result-wrap .search-result-grp-wrap {
	 padding-left: 100px;
	 padding-right: 100px;
	 padding-bottom: 60px;
	 padding-top: 15px;
}
 @media (max-width: 1199px) {
	 :host body .search-panel-wrap .search-result-wrap .search-result-grp-wrap {
		 padding-left: 0px;
		 padding-right: 0px;
	}
}
 @media (max-width: 560px) {
	 :host body .search-panel-wrap .search-result-wrap .search-result-grp-wrap {
		 padding-top: 0px;
		 padding-bottom: 50px;
	}
}
 :host body .search-panel-wrap .search-result-wrap .search-result-grp-wrap .result-group + .result-group {
	 margin-top: 40px;
}
 @media (max-width: 560px) {
	 :host body .search-panel-wrap .search-result-wrap .search-result-grp-wrap .result-group + .result-group {
		 margin-top: 30px;
	}
}
 :host body .search-panel-wrap .search-result-wrap .search-result-grp-wrap .result-group h6 {
	 font-size: 14px;
	 font-weight: 500;
	 font-stretch: normal;
	 font-style: normal;
	 line-height: normal;
	 letter-spacing: 0.25px;
	 color: #9ca5db;
	 margin-top: 0px;
	 margin-bottom: 0px;
}
 :host body .search-panel-wrap .search-result-wrap .search-result-grp-wrap .result-group ul.list {
	 color: #0b1d81;
	 line-height: 30px;
	 margin-top: 5px;
	 margin-bottom: 0px;
	 width: 100%;
	 display: flex;
	 flex-wrap: wrap;
	 justify-content: space-between;
	 padding-left: 0px;
	 padding-right: 0px;
}
 :host body .search-panel-wrap .search-result-wrap .search-result-grp-wrap .result-group ul.list.last-2-items li:nth-last-of-type(-n+2) {
	 border-bottom: none;
}
 :host body .search-panel-wrap .search-result-wrap .search-result-grp-wrap .result-group ul.list li {
	 padding: 0px;
	 margin: 0px;
	 box-shadow: none;
	 background: none;
	 border-bottom: solid 1px #e7e9f6;
	 max-width: 477px;
	 position: relative;
	 display: flex;
	 align-items: center;
	 width: 100%;
	 border-radius: 0;
}
 @media (max-width: 1199px) {
	 :host body .search-panel-wrap .search-result-wrap .search-result-grp-wrap .result-group ul.list li {
		 max-width: 457px;
	}
}
 @media (max-width: 991px) {
	 :host body .search-panel-wrap .search-result-wrap .search-result-grp-wrap .result-group ul.list li {
		 max-width: 49%;
	}
}
 @media (max-width: 767px) {
	 :host body .search-panel-wrap .search-result-wrap .search-result-grp-wrap .result-group ul.list li {
		 max-width: 100%;
	}
}
 :host body .search-panel-wrap .search-result-wrap .search-result-grp-wrap .result-group ul.list li:after {
	 position: absolute;
	 font-family: 'icomoon' !important;
	 content: "\e916";
	 display: flex;
	 align-items: center;
	 justify-content: center;
	 font-size: 13px;
	 color: #faa634;
	 transform: rotate(90deg);
	 margin-top: -10px;
	 height: 20px;
	 width: 20px;
	 right: 12px;
	 top: 50%;
}
 :host body .search-panel-wrap .search-result-wrap .search-result-grp-wrap .result-group ul.list li a {
	 display: flex;
	 justify-content: flex-start;
	 color: #0b1d81;
	 font-size: 16px;
	 font-weight: normal;
	 font-stretch: normal;
	 font-style: normal;
	 line-height: normal;
	 letter-spacing: 0.15px;
	 padding: 13px 0px;
	 max-width: calc(100% - 50px);
	 transition: 0.2s all;
	 width: 100%;
}
 @media (max-width: 560px) {
	 :host body .search-panel-wrap .search-result-wrap .search-result-grp-wrap .result-group ul.list li a {
		 font-size: 14px;
		 letter-spacing: 0.13px;
	}
}
 :host body .search-panel-wrap .search-result-wrap .search-result-grp-wrap .result-group ul.list li a strong {
	 margin-left: 5px;
	 margin-right: 5px;
}
 :host body .search-panel-wrap .search-result-wrap .search-result-grp-wrap .result-group ul.list li a:hover, :host body .search-panel-wrap .search-result-wrap .search-result-grp-wrap .result-group ul.list li a:focus {
	 color: #faa634;
}
 :host body.search-active header {
	 position: relative;
	 z-index: 999;
}
 :host body.search-active header .main-menu, :host body.search-active header .user-menu {
	 position: relative;
}
 :host body.search-active header .main-menu {
	 z-index: 2;
}
 :host body.search-active header .user-menu {
	 z-index: 1;
}
 :host body.search-active .search-panel-wrap {
	 visibility: visible;
	 opacity: 1;
}
 :host body.notification-active .main-menu {
	 position: relative;
	 z-index: 3;
}
 :host body.notification-active .main-menu .notifications .icon {
	 color: #faa634 !important;
}
 :host body.notification-active .notification-tray {
	 opacity: 1;
	 z-index: -1;
	 visibility: visible;
}
 :host body.notification-active .notification-tray .notification-list {
	 opacity: 1;
	 visibility: visible;
	 transform: scaleY(1);
}
 :host body.notification-read header .main-menu .container .the-menu .notifications .notification-badge {
	 display: none;
}
 @media (max-width: 767px) {
	 :host .main-menu .notification-tray {
		 top: 0px !important;
		 bottom: 0px !important;
		 left: 0px !important;
		 right: 0px !important;
		 z-index: -1;
		 position: fixed !important;
		 background: #fff;
	}
	 :host .search-panel-wrap {
		 top: 0px !important;
		 bottom: 0px !important;
		 left: 0px !important;
		 right: 0px !important;
		 z-index: -1;
		 position: fixed !important;
		 background: #fff;
	}
	 :host body.notification-active .main-menu .notification-tray {
		 z-index: 999;
	}
	 :host body.notification-active .main-menu .notification-tray .notification-list {
		 border-top-right-radius: 0px;
		 border-top-left-radius: 0px;
		 width: 100%;
		 height: 100%;
	}
	 :host body.notification-active .main-menu .notification-tray .notification-list .notification-body {
		 height: calc(100% - 60px);
	}
	 :host body.search-active .search-panel-wrap {
		 z-index: 999;
	}
}
 @media (max-width: 767px) and (max-width: 767px) {
	 :host body.search-active .search-panel-wrap .overlay {
		 background-color: white;
	}
} 
`;

import React from "react";

import classes from "./styles/Footer.module.css";

import Logo from "../assets/logo.png";

function Footer() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <img src={Logo} width="100" />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"> All Rights Reserved © 2022</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Footer;

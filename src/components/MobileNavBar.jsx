import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";

function MobileNavbar() {
  const [dropMenu, setDropMenu] = useState(false);

  function navMenu(event) {
    setDropMenu(!dropMenu);
  }

  return (
    <div>
      <a href="#top" className="toggle-button">
        <MenuIcon fontSize="large" onClick={navMenu} />
      </a>

      {dropMenu && (
        <>
          <div className="navbar-links-mobile">
            <ul>
              <li className="navbar-list">
                <a href="#top" onClick={navMenu}>
                  About
                </a>
              </li>
              <li className="navbar-list">
                <a href="#mywork" onClick={navMenu}>
                  Work
                </a>
              </li>
              <li className="navbar-list">
                <a href="#footer1" onClick={navMenu}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <span className="navbar-social">
            <a
              href="https://www.instagram.com/jonaspenaso/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/jonas-penaso-086aa4134/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              href="https://github.com/jonas0915"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </span>
        </>
      )}
    </div>
  );
}

export default MobileNavbar;

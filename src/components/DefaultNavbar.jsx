import React from "react";

function DefaultNavbar() {
  return (
    <div>
      <div className="navbar-links">
        <ul>
          <li className="navbar-list">
            <a href="#top">About</a>
          </li>
          <li className="navbar-list">
            <a href="#middle">Work</a>
          </li>
          <li className="navbar-list">
            <a href="#footer1">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DefaultNavbar;

import React from "react";
import DefaultNavbar from "./MobileNavBar";
import MobileNavbar from "./DefaultNavbar";

// import navStyle from "./Navigate.module.css";
// import MenuIcon from "@material-ui/icons/Menu";

function Navigate() {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 150) {
      document.querySelector(".navbar").style.opacity = 0.9;
    } else {
      document.querySelector(".navbar").style.opacity = 1;
    }
  });

  return (
    <div id="top">
      <nav className="navbar">
        <div id="jonas">
          <a href="#top">jonaspenaso</a>
        </div>
        <DefaultNavbar />
        <MobileNavbar />
      </nav>

      <div className="intro">
        <div className="container">
          <p className="my-name">Hello there! I'm Jonas Penaso...</p>
          <p id="about-me">
            - Culinary & Tech Professional looking for opportunities in Culinary
            and Web Development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navigate;

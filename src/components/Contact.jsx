import React from "react";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import Button from "@material-ui/core/Button";
import TechDev from "../photos/Jonas-Penaso-Cv.pdf";

function Contact() {
  return (
    <div>
      <div className="container">
        <ul className="contactList">
          <li className="contact">
            <ContactMailIcon fontSize="large" />{" "}
          </li>
          <li className="email">
            <a href="mailto:edciljonas15@yahoo.com">edciljonas15@yahoo.com</a>
          </li>
          <li className="resume">
            {" "}
            <Button variant="contained" color="primary">
              <a href={TechDev} target="#">
                RESUME
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;

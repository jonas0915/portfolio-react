import React from "react";
import ContactMailIcon from "@material-ui/icons/ContactMail";

function Contact() {
  return (
    <div className="container">
      <div id="contact">
        <ContactMailIcon fontSize="large" />
        <div className="eAdd">
          <a href="mailto:edciljonas15@yahoo.com" id="email">
            edciljonas15@yahoo.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;

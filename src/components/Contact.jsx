import React from "react";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import Button from "@material-ui/core/Button";
import TechDev from "../photos/Jonas-Penaso-Cv.pdf";
// import { grey } from "@material-ui/core/colors";
// import { createTheme, withStyles, theme } from "@material-ui/styles";

// const ColorButton = withStyles((theme) => {
//   const Newtheme = createTheme({
//     palette: {
//       primary: grey
//     }
//   });
// });

function Contact() {
  return (
    <div>
      <div className="container">
        <div className="contact">
          <ContactMailIcon fontSize="large" />
        </div>
        <div className="email">
          <a href="mailto:edciljonas15@yahoo.com">edciljonas15@yahoo.com</a>
        </div>
        <div className="resume">
          <Button variant="contained" color="primary">
            <a href={TechDev} target="#">
              RESUME
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;

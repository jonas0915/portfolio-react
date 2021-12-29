import React from "react";
import MyPic from "../photos/Prof.jpg";

function Introduction() {
  return (
    <div className="container">
      <div id="background">
        <div className="pic-box">
          <img className="picMe" src={MyPic} alt="myPhoto" />
        </div>
        <div>
          <p>
            - I'm a Web Develper solving real world problems using
            <span className="language">
              JavaScript, React, NodeJS, Express, & MongoDB!
            </span>
            With that I have years of experience in the Culinary field. Always
            seeking to improve what's around me. Passionate about food, creating
            new things and travel.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;

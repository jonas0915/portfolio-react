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
            - I am a Full Stack Web Develper with experience <space></space>
            <span className="language">
              JavaScript, React, NodeJS, Express, HTML & CSS, and MongoDB.
            </span>
            My background is in the Culinary Industry with teams in a fast-paced
            high quality work environment.
          </p>
        </div>
      </div>
      <span id="middle"></span>
    </div>
  );
}

export default Introduction;

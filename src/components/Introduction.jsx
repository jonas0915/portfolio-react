import React from "react";
import MyPic from "../photos/JonasProfile.jpg";

function Introduction() {
  return (
    <div className="container">
      <div id="background">
        <div id="pic-box">
          <img className="picMe" src={MyPic} alt="myPhoto" />
        </div>
        <div>
          <p>
            - I am a Full Stack Web Develper with experience <space></space>
            <span className="language">
              HTML & CSS, JavaScript, React, NodeJS, Express, SQL, Mongoose,
              Mongoose. <br />
            </span>
            My background is in the Culinary Industry working with teams in a
            fast-paced high quality work environment.
          </p>
        </div>
      </div>
      <span id="middle"></span>
    </div>
  );
}

export default Introduction;

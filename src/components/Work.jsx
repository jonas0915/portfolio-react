import TibetanBaker from "../photos/Project1.png";
import ToDoList from "../photos/Project2.png";

import React from "react";

function Work() {
  return (
    <div className="container">
      <h2 id="mywork" className="container">
        <span></span>
        My Work
      </h2>
      <div className="work-content">
        <div className="grid">
          <div>
            <a href="https://tibetanbaker.com/ " target="#">
              <img id="project-image" src={TibetanBaker} alt="TibetanBaker" />
            </a>
          </div>
          <div></div>
          <div></div>
          <div id="image-2">
            <a href="https://calm-harbor-17597.herokuapp.com/" target="#">
              <img id="project-image" src={ToDoList} alt="TodoList" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;

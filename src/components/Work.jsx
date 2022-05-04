import TibetanBaker from "../photos/Project1.png";
// import ToDoList from "../photos/Project2.png";
import OrderApp from "../photos/Project3.png";

import React from "react";

function Work() {
  return (
    <div className="container">
      <h2 id="mywork">
        <span></span>
        My Work
      </h2>

      <div className="grid">
        <div>
          <a href="https://tibetanbaker.com/ " target="#">
            <img id="project-image" src={TibetanBaker} alt="TibetanBaker" />
          </a>
          <h2 id="work-desc">First website made for a small business</h2>
        </div>
        <div></div>
        <div></div>
        {/* <div id="image-2">
          <a href="https://calm-harbor-17597.herokuapp.com/" target="#">
            <img id="project-image" src={ToDoList} alt="TodoList" />
          </a>
        </div> */}

        <div id="image-2">
          <a href="https://order-app-jp.herokuapp.com/" target="#">
            <img id="project-image" src={OrderApp} alt="Order App" />
          </a>
          <h2 id="work-desc">A Food Ordering App</h2>
        </div>
      </div>
    </div>
  );
}

export default Work;

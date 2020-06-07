import React, { Component } from "react";
import "./containers.scss";
import Badge from "../UI/Badge.jsx";

class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <Badge fsize="20px">
          <div className="gradientText">Projects</div>
        </Badge>
        <div className="projects">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;

class ProjectCard extends Component {
  render() {
    return (
      <div className="projectCard">
        <div className="projectImage"></div>
        <div className="projectText">
          <h3>
            <a>Project Title</a>
          </h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          vitae. Consequuntur molestias maiores alias laborum.
        </div>
        <div className="learnMore">
          <a href="#" className="fa fa-github-alt"></a>{" "}
          <a href="">Learn More</a>
        </div>
      </div>
    );
  }
}

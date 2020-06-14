import React, { Component, Fragment } from "react";
import "./containers.scss";
import Badge from "../UI/Badge";

class Projects extends Component {
  render() {
    return (
      <Fragment>
        <Badge fsize="20px">
          <div className="gradientText">Projects</div>
        </Badge>
        <div className="projects">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </Fragment>
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
          <a href="#" className="fab fa-github-alt"></a>{" "}
          <a href="">Learn More</a>
        </div>
      </div>
    );
  }
}

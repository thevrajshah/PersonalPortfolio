import React, { Component, Fragment } from "react";
import "./containers.scss";
import Badge from "../UI/Badge";

class Projects extends Component {
  render() {
    return (
      <Fragment>
        <div className="projects">
          <ProjectCard Name="Lawda Website" />
          <ProjectCard Name="Lassun App" />
          <ProjectCard Name="Falana Project" />
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
            <a>{this.props.Name}</a>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            vitae. Consequuntur molestias maiores alias laborum.
          </p>
        </div>
        <div className="tools">
          <span className="fab fa-html5" />
          <span className="fab fa-css3-alt" />
          <span className="fab fa-js-square" />
          <span className="fab fa-react" />
        </div>
        <div className="learnMore">
          <a href="#" className="fab fa-github-alt"></a>{" "}
          <a href="">Learn More</a>
        </div>
      </div>
    );
  }
}

import React, { Component, Fragment } from "react";
import "./containers.scss";
import Badge from "../UI/Badge";

class Projects extends Component {
  render() {
    return (
      <Fragment>
        <div className="projects">
          {projectData.map((data, key) => {
            return (
              <ProjectCard
                key={key}
                Name={data.Name}
                Description={data.Description}
                Tools={data.Tools}
              />
            );
          })}
          {/* <ProjectCard Name="Lawda Website" />
          <ProjectCard Name="Lassun App" />
          <ProjectCard Name="Falana Project" /> */}
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
          <p>{this.props.Description}</p>
        </div>
        <div className="tools">
          <i>{this.props.Tools}</i>
        </div>
        <div className="learnMore">
          <a href="#" className="fab fa-github-alt"></a>{" "}
          <a href="">Learn More</a>
        </div>
      </div>
    );
  }
}

const projectData = [
  {
    Name: "Lawda Project",
    Description: "Lorem ipsum lawda lassun",
    Tools: "JavaSrcipt, HTML",
  },
  { Name: "Falana Project", Description: "Lorem ipsum lawda lassun" },
  { Name: "Lassun Project", Description: "Lorem ipsum lawda lassun" },
];

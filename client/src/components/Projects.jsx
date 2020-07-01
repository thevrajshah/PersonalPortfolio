import React, { Component, Fragment } from "react";
import "./components.scss";

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
        <div className="projectImage">
          <img src="#" alt="" />
        </div>
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
          <a href="">Learn More</a>
        </div>
      </div>
    );
  }
}

const projectData = [
  {
    Name: "Some Random Project",
    Description:
      "Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Tools: "JavaSrcipt, HTML",
    Url: "",
  },
  {
    Name: "Some Other Project",
    Description:
      "Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    Name: "Someone Else's Project",
    Description:
      "Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

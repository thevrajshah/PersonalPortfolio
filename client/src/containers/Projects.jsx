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
    Name: "Some Random Project",
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dui justo, rhoncus quis aliquam a, tempor ac enim. Donec nec luctus arcu. Pellentesque in enim maximus, pulvinar tellus quis, pharetra lorem. Vivamus finibus velit nec elit varius imperdiet sed ac tortor. Vestibulum convallis libero a enim malesuada blandit.",
    Tools: "JavaSrcipt, HTML",
  },
  { Name: "Some Other Project", Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dui justo, rhoncus quis aliquam a, tempor ac enim. Donec nec luctus arcu. Pellentesque in enim maximus, pulvinar tellus quis, pharetra lorem. Vivamus finibus velit nec elit varius imperdiet sed ac tortor. Vestibulum convallis libero a enim malesuada blandit." },
  { Name: "Someone Else's Project", Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dui justo, rhoncus quis aliquam a, tempor ac enim. Donec nec luctus arcu. Pellentesque in enim maximus, pulvinar tellus quis, pharetra lorem. Vivamus finibus velit nec elit varius imperdiet sed ac tortor. Vestibulum convallis libero a enim malesuada blandit." },
];

import React, { Component, Fragment } from "react";
import "./components.scss";
import { GreySection } from "./Containers";

class Projects extends Component {
  render() {
    return (
      <GreySection paddingLR='0 2rem'>
        <div className='projects'>
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
      </GreySection>
    );
  }
}

export default Projects;

class ProjectCard extends Component {
  render() {
    return (
      <div className='projectCard'>
        <div className='projectImage'>
          <img src='#' alt='' />
        </div>
        <div className='projectText'>
          <h5>{this.props.Name}</h5>
          <p>{this.props.Description}</p>
        </div>
        <div className='tools'>
          <i>{this.props.Tools}</i>
        </div>
        <div className='projectOptions'>
          <a
            target='_blank'
            className='fab fa-github-alt'
            href='https://github.com/thevrajshah'
            rel='noopener noreferrer'
          />
          <a id='veiwLive' href=''>
            Veiw
          </a>
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
    GitUrl: "",
    LiveUrl: "",
  },
  {
    Name: "Someone Else's Project",
    Description:
      "Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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

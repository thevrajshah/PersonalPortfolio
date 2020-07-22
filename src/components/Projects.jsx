import React, { Component, Fragment } from "react";
import "./components.scss";
import { WhiteSection } from "./Containers";
import { projects } from "../assets/Data.json";

class Projects extends Component {
  render() {
    return (
      <WhiteSection textAlign='center' paddingLR='0 2.5rem'>
        <h1>Development</h1>
        <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>

        <div id='projects'>
          {projects.map((data, key) => {
            return (
              <ProjectCard
                key={key}
                ImgUrl={data.img}
                Name={data.name}
                Description={data.desc}
                GitUrl={data.giturl}
                LiveUrl={data.liveurl}
              />
            );
          })}
          <span id='swipe'>
            <i className='fa fa-long-arrow-left' />
            swipe
          </span>
        </div>
      </WhiteSection>
    );
  }
}

export default Projects;

class ProjectCard extends Component {
  render() {
    return (
      <div id='projectCard'>
        <img id='projectImage' src={this.props.ImgUrl} alt='' />

        <div className='projectText'>
          <h5>{this.props.Name}</h5>
          <p>{this.props.Description}</p>
        </div>
        <div className='tools'>
          <u>{this.props.Tools}</u>
        </div>
        <div className='projectOptions'>
          <a
            target='_blank'
            className='fab fa-github-alt'
            href={this.props.GitUrl}
          />
          <a target='_blank' id='veiwLive' href={this.props.LiveUrl}>
            Veiw
          </a>
        </div>
      </div>
    );
  }
}

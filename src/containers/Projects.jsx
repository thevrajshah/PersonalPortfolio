import React, { Component } from "react";
import "./containers.css";
import Badge from "../UI/Badge";
import Card from "../UI/Card";

class Projects extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Badge fsize="26px">
          <div className="gradientText">Projects</div>
        </Badge>
        <div className="projects">
          <Card align="left">
            <h3>Project Name</h3>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;

import React, { Component } from "react";
import "./containers.css";
import Badge from "../UI/Badge";

class Projects extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Badge>
          <div className="gradientText">Projects</div>
        </Badge>
      </React.Fragment>
    );
  }
}

export default Projects;

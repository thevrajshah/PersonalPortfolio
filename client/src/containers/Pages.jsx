import React, { Component, Fragment } from "react";
import "./containers.scss";
import Hero from "../components/Hero";
import Section from "../UI/Section";
import Card from "../UI/Card";
import Loader from "../UI/Loader";
import Projects from "./Projects";
import Gallery from "./Gallery";

export class About extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <Section>
          <div className="intro">
            <div style={{ textAlign: "right" }}>
              <h2>Looks like you found my Website.</h2>
              <p>
                On this site you will find a collection of my work, thoughts and
              </p>
            </div>
            <div style={{ textAlign: "left" }}>
              <h2>Looks like you found my Website.</h2>
              <p>
                On this site you will find a collection of my work, thoughts and
              </p>
            </div>
          </div>
        </Section>
      </Fragment>
    );
  }
}

export class Work extends Component {
  render() {
    return (
      <Fragment>
        <Section>
          <h2>Developement</h2>
          <p>
            Hey, looks like you found my site. In case you're wondering I've
            created this place in order to put together all my work, thoughts &
            information all in one place for no specific reason (Just wanted to
            have something like this). Anyone who visits this site can get
            inside my mind once I'm completely done with the building process.
          </p>
        </Section>
        <Projects />

        <Gallery />
      </Fragment>
    );
  }
}

export class Contact extends Component {
  render() {
    return (
      <Fragment>
        <Section>
          <h1>Contact</h1>
        </Section>
      </Fragment>
    );
  }
}

export class IDCard extends Component {
  render() {
    return <Card>Vraj Shah</Card>;
  }
}

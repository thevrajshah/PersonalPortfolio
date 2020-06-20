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
          <h2>A Little About Me</h2>
          <p>
            Hey! My name is <b>Vraj Shah</b> and it seems you stumbled into my
            website. To tell you a bit about myself, I love tech in general! I
            really enjoy everything from designing images with coloured text to
            working with websites. This website compiles all I love in one
            place, I hope you have a good time exploring it.
          </p>
        </Section>
        <div className="moreAbout">
          <img />
          <div>
            <h2>A Little More</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              non, explicabo libero voluptas inventore labore fugit debitis qui
              saepe esse temporibus commodi reiciendis corporis necessitatibus
              fuga nesciunt quibusdam ratione placeat?
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export class Work extends Component {
  render() {
    return (
      <Fragment>
        <Section>
          <h2>Programming</h2>
          <p>
            One must consider programming as an Art which is how I feel like
            working all the time
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
          <h1>Get in Touch</h1>
          <table></table>
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

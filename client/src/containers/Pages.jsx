import React, { Component, Fragment } from "react";
import "./containers.scss";
import Hero from "../components/Hero";
import Design from "../containers/Design";
import { Section, GreySection } from "../UI/Section";
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
          <h1>A Little About Me</h1>
          <p>
            Hey! My name is <b>Vraj Shah</b> and it seems you stumbled into my
            website. To tell you a bit about myself, I love tech in general! I
            really enjoy everything from designing images with coloured text to
            working with websites. This website compiles all I love in one
            place, I hope you have a good time exploring it.
          </p>
        </Section>
        <GreySection>
          <div id="moreAbout">
            <div id="profile"></div>
            <div id="moreAboutText">
              <h1>A Little More</h1>
              <p>
                I'm 18 Years old, based in Vadodara, Gujarat. I'm in my 2
                <sup>nd</sup> Year of Computer Engineering at SVIT, Vasad.
              </p>
              <p>
                Minima non, explicabo libero voluptas inventore labore fugit
                debitis qui saepe esse temporibus commodi reiciendis corporis
                necessitatibus fuga nesciunt quibusdam ratione placeat?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, minima natus excepturi maiores
              </p>
            </div>
          </div>
        </GreySection>
        <Section>
          <h1>Get into my brain</h1>
          <p>I write about tech and politics.</p>
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
          <h1>Programming</h1>
          <p>
            One must consider programming as an Art which is how I feel like
            working all the time man!
          </p>
        </Section>
        <Projects />
        <Design />
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

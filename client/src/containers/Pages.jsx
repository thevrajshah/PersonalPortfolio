import React, { Component, Fragment } from "react";
import "./containers.scss";
import Hero from "../components/Hero";
import Design from "../containers/Design";
import { Section, GreySection } from "../UI/Section";
import Card from "../UI/Card";
import Loader from "../UI/Loader";
import Projects from "./Projects";
import Gallery from "./Gallery";
import ContactForm from "./Contact";

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
        <GreySection>
          <div id="moreAbout">
            <div id="profile"></div>
            <div id="moreAboutText">
              <h2>A Little More</h2>
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
          <h2>Get into my brain</h2>
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
          <h2>Programming</h2>
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
        <Card>
          <h1>Say Hello!</h1>
          <ContactForm />
        </Card>
      </Fragment>
    );
  }
}

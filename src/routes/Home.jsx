import React, { Component, Fragment } from "react";
import "./routes.scss";
import Hero from "../components/Hero";
import { WhiteSection, GreySection, Card } from "../components/Containers";
import { devSkills, designSkills } from "../assets/Data.json";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <WhiteSection>
          <h1 style={{ fontSize: "4rem" }}>about me</h1>
          <h2>I'm a computer enginnering student based in Gujarat, India.</h2>
          <p>
            I love tech in general. I really enjoy everything from designing
            images with coloured text to working on complex UI/UX. This website
            compiles all I love in one place, I hope you have a good time
            exploring it.
          </p>
          <a
            href='https://twitter.com/thevrajshah?ref_src=twsrc%5Etfw'
            className='twitter-follow-button'
            data-show-count='false'
          >
            Follow @thevrajshah
          </a>
        </WhiteSection>
        <GreySection textAlign='center' paddingLR='0 2rem'>
          <h1>Skills</h1>
          <div id='Skills'>
            <Card align='left'>
              <h5 style={{ color: "var(--accent)" }}>Development</h5>
              <div id='skill-container'>
                {devSkills.map(data => {
                  return <span id='skill'>{data}</span>;
                })}
              </div>
            </Card>
            <Card align='left'>
              <h5 style={{ color: "var(--accent)" }}>Design</h5>
              <div id='skill-container'>
                {designSkills.map((data, key) => {
                  return <span id='skill'>{data}</span>;
                })}
              </div>
            </Card>
          </div>
        </GreySection>
        <WhiteSection>
          <h1 style={{ fontSize: "3.5rem" }}>about this website</h1>
          <h2> Looks like you stumbled into my Website.</h2>
          <p>
            I' sure you're liking it here! Well, this website is completely
            designed & built by me using <strong>ReactJS</strong> and basic
            <strong> HTML/CSS</strong> tools and I love to take pride in that as
            most of the websites these days especially the personal one are made
            using templates.
          </p>
          <p>
            However, the pain of messing with CSS for weeks to tweak each
            smallest detail is totally worth it.
          </p>
        </WhiteSection>
      </Fragment>
    );
  }
}

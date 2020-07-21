import React, { Component, Fragment, lazy, Suspense } from "react";
import "./routes.scss";
import Helmet from "react-helmet";
import Hero from "../components/Hero";
import { WhiteSection, GreySection, Card } from "../components/Containers";
import { devSkills, designSkills } from "../assets/Data.json";

const Gallery = lazy(() => import("../components/Gallery"));

export default class About extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Vraj Shah</title>
        </Helmet>
        <Hero />
        <WhiteSection>
          <h1 style={{ fontSize: "4rem" }}>about me</h1>
          <h2>I design & create stuff on the Web.</h2>
          <p>
            Through constant learning and creation, I produce aesthetic software
            to the best standard. I'm a computer enginnering student based in
            Gujarat, India.
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
                {devSkills.map((data, key) => {
                  return (
                    <span key={key} id='skill'>
                      {data}
                    </span>
                  );
                })}
              </div>
            </Card>
            <Card align='left'>
              <h5 style={{ color: "var(--accent)" }}>Design</h5>
              <div id='skill-container'>
                {designSkills.map((data, key) => {
                  return (
                    <span key={key} id='skill'>
                      {data}
                    </span>
                  );
                })}
              </div>
            </Card>
          </div>
        </GreySection>
        <WhiteSection textAlign='center'>
          <h1>Random Shots</h1>
          <h2>Art means the world to me.</h2>
        </WhiteSection>
        <Suspense fallback={"Loading..."}>
          <Gallery />
        </Suspense>
        <WhiteSection>
          <h1 style={{ fontSize: "3.5rem" }}>about this website</h1>
          <h2> Looks like you stumbled into my Website.</h2>
          <p>
            I' sure you're liking it here! Well, this website is completely
            designed & built by me using <b>ReactJS</b> and basic
            <b> HTML/CSS</b> tools and I love to take pride in that as most of
            the websites these days especially the personal one are made using
            templates.
          </p>
          <p>
            However, the pain of messing with CSS for weeks to tweak each
            smallest detail is totally worth it. Thank You!
          </p>
        </WhiteSection>
      </Fragment>
    );
  }
}

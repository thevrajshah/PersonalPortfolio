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
            I'm a Rookie Developer based in Gujarat, India. Through constant
            learning and creation, I try to produce aesthetic software at my
            best. I often contribute to the open-source community. Other than
            that I enjoy exploring general trivia via podcasts and youtube
            videos. Also, I love movies especially the horror and thriller ones.{" "}
            <br /> Have fun exploring the site.
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
          <h2>Art means everything to me.</h2>
        </WhiteSection>
        <Suspense fallback={"Loading..."}>
          <Gallery />
        </Suspense>
        <WhiteSection>
          <h1 style={{ fontSize: "3.5rem" }}>about the website</h1>
          <h2> Looks like you stumbled into my Website.</h2>
          <p>
            I'm sure you're liking it here! Well, this website is designed &
            developed by me with <b>ReactJS</b>, basic
            <b> HTML/CSS</b> and other related tools (No templates/frameworks
            used).
          </p>
          <p>
            The initial purpose of building this site was just to learn React
            while implementing it; but later on it started growing and now it
            serves as my identity, portfolio, blog whatever you like to call it.{" "}
            <strong>Thank You 😊</strong>
          </p>
        </WhiteSection>
        <GreySection textAlign='center'>
          <script
            async
            src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
          ></script>
          <div id='Ads'>
            <ins
              class='adsbygoogle'
              style={{ display: "block" }}
              data-ad-client='ca-pub-1805340331841889'
              data-ad-slot='9867912939'
              data-ad-format='auto'
              data-full-width-responsive='true'
            ></ins>
            <ins
              class='adsbygoogle'
              style={{ display: "block" }}
              data-ad-client='ca-pub-1805340331841889'
              data-ad-slot='9867912939'
              data-ad-format='auto'
              data-full-width-responsive='true'
            ></ins>
            <ins
              class='adsbygoogle'
              style={{ display: "block" }}
              data-ad-client='ca-pub-1805340331841889'
              data-ad-slot='9867912939'
              data-ad-format='auto'
              data-full-width-responsive='true'
            ></ins>
          </div>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </GreySection>
      </Fragment>
    );
  }
}

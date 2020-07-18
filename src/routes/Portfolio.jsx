import React, { Component, Fragment, lazy, Suspense } from "react";
import "./routes.scss";
import { WhiteSection } from "../components/Containers";
import Projects from "../components/Projects";
import Design from "../components/Design";

const Gallery = lazy(() => import("../components/Gallery"));

export default class Portfolio extends Component {
  render() {
    return (
      <Fragment>
        <WhiteSection textAlign='center'>
          <h1>Programming</h1>
          <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
        </WhiteSection>
        <Projects />
        <Design />
        <WhiteSection textAlign='center'>
          <h1>Art means the world to me.</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
            quisquam delectus praesentium atque debitis quia expedita voluptates
            ipsam quasi maxime. Magnam, nemo.
          </p>
        </WhiteSection>
        <Suspense fallback={"Loading..."}></Suspense>
        <Gallery />
      </Fragment>
    );
  }
}

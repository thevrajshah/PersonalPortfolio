import React, { Component, Fragment } from "react";
import "./routes.scss";
import ContactForm from "../components/ContactForm";
import Helmet from "react-helmet";
import { Card } from "../components/Containers";

export default class Connect extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Connect | Vraj Shah</title>
        </Helmet>
        <div id='Head'>
          <section>
            <h1 style={{ color: "#111", fontSize: "4.5rem" }}>​</h1>
          </section>
        </div>
        <ContactForm />
      </Fragment>
    );
  }
}

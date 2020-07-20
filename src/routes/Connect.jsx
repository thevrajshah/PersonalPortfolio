import React, { Component, Fragment } from "react";
import "./routes.scss";
import ContactForm from "../components/ContactForm";
import Helmet from "react-helmet";

export default class Connect extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Connect | Vraj Shah</title>
        </Helmet>
        <ContactForm />
      </Fragment>
    );
  }
}

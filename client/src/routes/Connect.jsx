import React, { Component, Fragment } from "react";
import "./routes.scss";
import Card from "../containers/Card";
import ContactForm from "../components/ContactForm";

export default class Connect extends Component {
  render() {
    return (
      <Fragment>
        <Card>
          <h1>Say Hello!</h1>
          <p>Let's discuss some work or simply chat.</p>
          <ContactForm />
        </Card>
      </Fragment>
    );
  }
}

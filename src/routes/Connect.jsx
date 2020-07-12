import React, { Component, Fragment } from "react";
import "./routes.scss";
import { Card } from "../components/Containers";
import ContactForm from "../components/ContactForm";

export default class Connect extends Component {
  render() {
    return (
      <Fragment>
        <Card>
          <h1 style={{ fontSize: "4rem" }}>Say Hello!</h1>
          <ContactForm />
        </Card>
      </Fragment>
    );
  }
}

import React, { Component, Fragment } from "react";
import "./components.scss";

export default class ContactForm extends Component {
  render() {
    return (
      <Fragment>
        <div id="contactForm">
          <form
            action="mailto:thevrajshah@gmail.com"
            _blank
            encType="text/plain"
          >
            <input type="text" name="name" placeholder="Name" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <input type="email" name="address" placeholder="Your Email" />
            <textarea name="mail-body" placeholder="Message" required />
            <button type="reset">
              <i className="fa fa-refresh" aria-hidden="true"></i>
            </button>
            <button type="submit">
              Submit
              <i
                className="fa fa-long-arrow-right m-1-10"
                aria-hidden="true"
              ></i>
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}

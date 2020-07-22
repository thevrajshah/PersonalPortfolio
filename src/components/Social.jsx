import React, { Component } from "react";
import "./components.scss";

export default class Social extends Component {
  render() {
    return (
      <span id='Social'>
        <a
          target='_blank'
          className='fab fa-github'
          href='https://github.com/thevrajshah'
          rel='noopener noreferrer'
        />
        <a
          target='_blank'
          className='fab fa-linkedin'
          href='https://www.linkedin.com/in/thevrajshah/'
          rel='noopener noreferrer'
        />
        <a
          target='_blank'
          className='fab fa-twitter'
          href='https://twitter.com/thevrajshah'
          rel='noopener noreferrer'
        />
        <a
          target='_blank'
          className='fab fa-dev'
          href='https://dev.to/thevrajshah'
          rel='noopener noreferrer'
        />
      </span>
    );
  }
}

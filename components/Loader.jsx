import React, { Component } from 'react';
import { WhiteSection } from './Containers';
import dino from '../assets/dino.gif';

class Loader extends Component {
  render() {
    return (
      <WhiteSection textAlign="center" paddingTB="7.5rem 0 3rem">
        <div className="loader">
          <h3>Wait until I figure out Server-Side Rendering....</h3>
          <img
            // src='https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Dino_non-birthday_version.gif'
            src={dino}
            alt="Loading..."
          />
        </div>
      </WhiteSection>
    );
  }
}

export default Loader;

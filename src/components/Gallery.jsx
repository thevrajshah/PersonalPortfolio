import React, { Component, Fragment, Suspense } from "react";
import "./components.scss";

class Gallery extends Component {
  render() {
    const urls = [
      "https://image-aws-us-west-2.vsco.co/6310a9/51936585/5e0f86e00c55414c0982acd5/960x720/vsco5e0f86e4a7a0f.jpg",
      "https://image-aws-us-west-2.vsco.co/6310a9/51936585/5e0f86110c55414c0982acd1/960x720/vsco5e0f861e4c6df.jpg",
      "https://image-aws-us-west-2.vsco.co/6310a9/51936585/5e0f867c0c55414c0982acd3/960x720/vsco5e0f8680c4f42.jpg",
      "https://image-aws-us-west-2.vsco.co/6310a9/51936585/5e0f86a40c55414c0982acd4/960x720/vsco5e0f86aab02ed.jpg",
      "https://image-aws-us-west-2.vsco.co/6310a9/51936585/5e0f848f0c55414c0982accf/800x688/vsco5e0f8493d2f47.jpg",
      "https://i.imgur.com/tSE9iG2m.jpg",
      "https://i.imgur.com/vryq5ZWm.jpg",
      "https://i.imgur.com/6jNDltTm.jpg",
      "https://i.imgur.com/nK8WtEOm.jpg",
      "https://i.imgur.com/6DYWAjwm.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/5cad6073465817.5c0a1fe481511.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/ccf36473465817.5c0a1fe481f9e.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f56b8173465817.5c0a1fe414a44.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3209e373465817.5c0a1fe41557d.jpg",
    ];
    return (
      <Fragment>
        <div className='imgContainer'>
          {urls.map(url => (
            <div className='imgWrapper'>
              <img src={url} />
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default Gallery;

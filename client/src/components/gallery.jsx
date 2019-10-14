import React from 'react';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <img className="item"></img>
        <img className="item"></img>
        <img className="item"></img>
      </div>
    )
  }
}

export default Gallery;
import React from 'react';
import '../css/gallery.css';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="gallerycontainer">
        {
          this.props.imagelist.map((image, index)=>{
          return <div key={index} onClick={this.props.handleClick}className="galleryitem"><img className="galleryImage" src={image.image}></img></div>
        })}
      </div>
    )
  }
}

export default Gallery;